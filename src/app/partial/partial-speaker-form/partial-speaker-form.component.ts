import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Speakers } from 'src/app/model/speakers';
import { FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-partial-speaker-form',
  templateUrl: './partial-speaker-form.component.html',
  styleUrls: ['./partial-speaker-form.component.css']
})
export class PartialSpeakerFormComponent implements OnInit {

  items: Speakers;
  speakerForm: any;
  loading = false;

  constructor(
    private rest: RestService,
    public fb: FormBuilder,
    private router: Router,
    private bsmodalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.InitialSpeakersItem();
    this.GetSpeakersItem();

  }
  InitialSpeakersItem() {
    this.speakerForm = this.fb.group({
      Speaker_ID: [],
      Speaker_name: [],
      Speaker_designation: [],
      Speaker_description: [],
      Speaker_Priority: [],
      Status: []
    });
  }
  GetSpeakersItem() {
    this.speakerForm.patchValue(this.items)
  }
  SaveSpeaker() {
    debugger;
    if (this.speakerForm.valid) {
      this.loading = true;
      Object.assign(this.items, this.speakerForm.value)
      this.rest.put('Speakers/Put', this.items)
        .subscribe(res => {
          this.loading = false;
          this.allclear();
        })
    }
  }
  allclear() {
    this.speakerForm.reset({
    });
  }
}
