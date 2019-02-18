import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/model/registration';
import { CommonItem } from 'src/app/model/commonItem';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  regItem: Registration;
  commonItem: CommonItem;
  constructor(
    private rest: RestService
  ) { }

  ngOnInit() {
    this.getRegistration();
  }

  getRegistration() {
    debugger;
    //this.commonItem.loading= true;
    this.rest.fetch("Registration/Get")
      .subscribe(res => {
        debugger;
        //this.commonItem.loading = false;
        this.regItem = res;
      })
  }
}
