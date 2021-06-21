import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TraceEquipmentAndTrainsPage } from './trace-equipment-and-trains.page';

describe('TraceEquipmentAndTrainsPage', () => {
  let component: TraceEquipmentAndTrainsPage;
  let fixture: ComponentFixture<TraceEquipmentAndTrainsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceEquipmentAndTrainsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TraceEquipmentAndTrainsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
