import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/ngx-bootstrap-datepicker';
import { Speakers } from 'src/app/model/speakers';

@Component({
  selector: 'app-speakers-form',
  templateUrl: './speakers-form.component.html',
  styleUrls: ['./speakers-form.component.css']
})
export class SpeakersFormComponent implements OnInit {
  items: Speakers;
  ReciterPath; image;
  loading = false;
  CountryForm: any;
  speakerForm: any;
  speakerForm2: any;
  speakersData: Array<any>[];
  errorMessage;
  id;
  bsConfig: Partial<BsDatepickerConfig>;
  countryItem: Array<any>[];
  ActiveStatus = [{ 'Status': true, 'name': 'Active' }, { 'Status': false, 'name': 'InActive' }];
  constructor(
    private rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _avRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.InitialSpeakersItem();
    this.GetCountry();
  }

  InitialSpeakersItem() {
    this.speakerForm = this.fb.group({
      Speaker_ID: [],
      Speaker_name: [],
      Speaker_designation: [],
      Speaker_description: [],
      // Speaker_Priority: []
      Status: [],
      Countryg: this.fb.array([
        this.CountryForm
      ])
    });


    this.CountryForm = this.fb.group({
      CountryId: [],
      CountryName: []
    });
  }



  GetCountry() {
    this.rest.fetch("Country/Get")
      .subscribe(item => {
        this.countryItem = item;
        console.log(item, "sasasa");
      });
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
