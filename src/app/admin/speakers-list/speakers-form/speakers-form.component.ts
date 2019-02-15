import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/ngx-bootstrap-datepicker';

@Component({
  selector: 'app-speakers-form',
  templateUrl: './speakers-form.component.html',
  styleUrls: ['./speakers-form.component.css']
})
export class SpeakersFormComponent implements OnInit {

  ReciterPath; image;
  loading = false;
  speakerForm: any;
  speakerForm2: any;
  speakersData: Array<any>[];
  errorMessage;
  id;
  bsConfig: Partial<BsDatepickerConfig>;

  ActiveStatus = [{ 'Status': true, 'name': 'Active' }, { 'Status': false, 'name': 'InActive' }];
  constructor(
    private rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _avRoute: ActivatedRoute
  ) {

    if (_avRoute.snapshot.params["id"]) {
      this.id = parseInt(this._avRoute.snapshot.params["id"]);
      this.getSpeakers(this.id);
    }
  }

  ngOnInit() {
    
    this.speakerForm = this.fb.group({
      Speaker_ID: [],
      Speaker_name: [],
      Speaker_designation: [],
      Speaker_description: [],
      Speaker_Priority: [],
      Status: [],
      CountryId: []
    });
  }

  getSpeakers(id) {
    debugger;
    this.rest.fetch("Speakers/GetbyId/" + this.id)
      .subscribe(data => {
        this.speakersData = data;
        console.log(data);
        this.speakerForm.patchValue({
          Speaker_ID: data.Speaker_ID,
          Speaker_name: data.Speaker_name,
          Speaker_designation: data.Speaker_designation,
          Speaker_description: data.Speaker_description,
          Speaker_Priority: data.Speaker_Priority,
          Status: data.Status
        })
      })
  }

  SaveSpeaker() {
    debugger;
    if (this.speakerForm.valid) {
      if (this.id > 0) {
        this.loading = true;
        this.speakerForm2 = Object.assign({}, this.speakerForm.value);
        this.rest.put('Speakers/Put', this.speakerForm2)
          .subscribe(data => {
            this.loading = false;
            this.allclear();
          }, error => this.errorMessage = error)
      }
      else {
        debugger;
        this.speakerForm2 = Object.assign({}, this.speakerForm.value);
        this.loading = true;
        this.rest.post('Speakers/Post', this.speakerForm2)
          .subscribe(data => {
            this.loading = false;
            if (data == "Saved") {
              this.allclear();
            }
          }, error => this.errorMessage = error)
      }
    }
  }
  allclear() {
    this.speakerForm.reset({

    });
  }
}
