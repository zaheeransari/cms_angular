import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialSpeakerFormComponent } from './partial-speaker-form.component';

describe('PartialSpeakerFormComponent', () => {
  let component: PartialSpeakerFormComponent;
  let fixture: ComponentFixture<PartialSpeakerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialSpeakerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialSpeakerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
