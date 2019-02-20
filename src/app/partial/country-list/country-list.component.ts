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
  countryItem: Country;
  @Output() formReady = new EventEmitter<FormGroup>()

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
  GetCountry() {
    this.rest.fetch("Country/Get")
      .subscribe(item => {
        this.countryItem = item;
      });
  }
  typeaheadOnSelect($event) {
    this.countryItem = $event.item;
    Object.assign(this.CountryForm.value, this.countryItem)    
    //console.log($event.item);
  }  
}
