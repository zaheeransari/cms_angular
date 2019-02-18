import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  CountryForm: FormGroup;
  countryitem: Country;
  @Output() formReady = new EventEmitter<FormGroup>()
  countryItem: Array<any>[];

  constructor(private rest: RestService, private fb: FormBuilder) { }

  ngOnInit() {
    this.InitializationCountry();
    this.GetCountry();
    this.formReady.emit(this.CountryForm);
  }
  InitializationCountry() {
    this.CountryForm = this.fb.group({
      CountryId: [],
      CountryName: []
    });
  }
  typeaheadOnSelect($event) {
    this.countryitem = $event.item;
    Object.assign(this.CountryForm.value, this.countryitem)
    
    //console.log($event.item);
  }

  GetCountry() {
    this.rest.fetch("Country/Get")
      .subscribe(item => {
        this.countryItem = item;
      });
  }
}
