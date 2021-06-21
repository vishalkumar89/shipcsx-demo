import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, ViewDidEnter } from '@ionic/angular';
import { Network } from '@ngx-pwa/offline';
import { Observable } from 'rxjs';
import { Position } from '@capacitor/geolocation';
import { LocationService } from 'src/app/core/location/location.service';
import { ClaimManagementService } from '../claim-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-freight-report',
  templateUrl: './new-freight-report.component.html',
  styleUrls: ['./new-freight-report.component.scss'],
})
export class NewFreightReportComponent implements OnInit {
  damagedFreightReportForm: FormGroup;
  online$: Observable<boolean>;
  location$: Observable<Position> = this.locationService.getLocation();
  submitAttempt = false;

  constructor(
    private fb: FormBuilder,
    private network: Network,
    private locationService: LocationService,
    private toastCtrl: ToastController,
    private claimManagementService: ClaimManagementService
  ) {}

  ngOnInit() {
    this.damagedFreightReportForm = this.fb.group({
      reason: this.fb.control('', [Validators.required]),
      damageLocation: this.fb.control('', [Validators.required]),
      productCondition: this.fb.control('', [Validators.required]),
      bracingMethod: this.fb.control('', [Validators.required]),
    });
    this.online$ = this.network.onlineChanges;
  }

  ionViewDidEnter() {
    this.location$ = this.locationService.getLocation();
  }

  hasError(controlName: string, errorCode: string) {
    const control = this.damagedFreightReportForm.get(controlName);
    return (
      control &&
      control.getError(errorCode) &&
      (control.dirty || this.submitAttempt)
    );
  }

  async handleFormSubmit() {
    this.submitAttempt = true;
    if (this.damagedFreightReportForm.valid) {
      this.claimManagementService
        .saveFreightReport(this.damagedFreightReportForm.value)
        .subscribe(() => {
          this.showToast();
        });
    }
  }

  private async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'Report Submitted Successfully',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            this.resetFormFields();
          },
        },
      ],
    });
    await toast.present();
    await toast.onDidDismiss();
  }

  private resetFormFields() {
    this.submitAttempt = false;
    this.damagedFreightReportForm.reset();
  }
}
