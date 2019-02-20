import { Component, OnInit } from '@angular/core';
import { Users } from '../../model/users';
import { RestService } from '../../services/rest.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ShowJsonComponent } from 'src/app/partial/show-json/show-json.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  loading = false;
  userItem: Users[];
  bsModalref: BsModalRef;
  constructor(private rest: RestService, private bsmodalservice: BsModalService) { }

  ngOnInit() {
    this.getUser();
    setInterval(() => {
      this.getUser();
    }, 10000)
  }
  getUser() {
    debugger;
    this.rest.fetchdata("https://hn.algolia.com/api/v1/search_by_date?tags=story")
      .subscribe((res: any) => {
        this.userItem = res.hits;
        console.log(this.userItem);
      });
  }
  showJson(user: Users) {
    const initialState = {
      user
    };

    this.bsModalref = this.bsmodalservice.show(ShowJsonComponent, { initialState });
    this.bsModalref.content.closeBtnName = 'Close';
    console.log(initialState);
  }
}
