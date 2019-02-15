import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  CountryForm: FormGroup;
  CountryData: Array<any>[];

  constructor(private rest: RestService, private fb: FormBuilder) { }

  ngOnInit() {
    this.GetCountry();
  }
  GetCountry() {
    this.rest.fetch("Country/Get")
      .subscribe(item => {
        this.CountryData = item;
      });
  }

}
