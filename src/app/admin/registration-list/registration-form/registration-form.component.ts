import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Registration } from 'src/app/model/registration';
import { CommonItem } from 'src/app/model/commonItem';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  item: Registration;
  countrydata: Country;
  registrationForm: any;
  commonitem: CommonItem;
  constructor(
    private rest: RestService,
    private fb: FormBuilder,
    private _router: Router,
    private _avRoute: ActivatedRoute
  ) { }
  ActiveStatus = [{ 'Status': true, 'name': 'Active' }, { 'Status': false, 'name': 'InActive' }];
  ngOnInit() {
    this.InitialRegisterItem();
  }
  formInitialized(name: string, form: FormGroup) {
    this.registrationForm.setControl(name, form);
  }
  InitialRegisterItem() {
    this.registrationForm = this.fb.group({
      RegisterId: [],
      RegisterName: [],
      RegisterDescription: [],
      RegisterEmail: [],
      RegisterMobile: [],
      Status: []
    });
  }
  SaveRegistration() {
    debugger;
    //this.commonitem.loading = Object.assign({}, true);
    //Object.assign(this.commonitem.loading, true)
    if (this.registrationForm.valid) {
      this.item = Object.assign({}, this.registrationForm.value);
      this.countrydata = Object.assign({}, this.registrationForm.value.countrydata);
      this.item.CountryId = this.countrydata.CountryId;
      this.rest.post('Registration/Post', this.item)
        .subscribe(data => {
          this.commonitem.loading = false;
          if (data == "Saved") {
            this.allclear();
          }
        }, error => this.commonitem.errorMessage = error)
    }
  }
  allclear() {
    this.registrationForm.reset({

    });
  }
}
