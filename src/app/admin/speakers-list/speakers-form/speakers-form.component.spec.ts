import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersFormComponent } from './speakers-form.component';

describe('SpeakersFormComponent', () => {
  let component: SpeakersFormComponent;
  let fixture: ComponentFixture<SpeakersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
