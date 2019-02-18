import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  CountryForm: FormGroup;

  selectedValue: string;
  selectedOption: any;

  
  @Output() formReady = new EventEmitter<FormGroup>()
  countryItem: Array<any>[];

  constructor(private rest: RestService, private fb: FormBuilder) { }

  ngOnInit() {
    this.CountryForm = this.fb.group({
      CountryId: [],
      CountryName: []
    });

    this.formReady.emit(this.CountryForm);
    this.GetCountry();
  }
  GetCountry() {
    this.rest.fetch("Country/Get")
      .subscribe(item => {
        this.countryItem = item;
      });
  }
}
