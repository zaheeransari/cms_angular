import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Users } from '../../model/users';

@Component({
  selector: 'app-show-json',
  templateUrl: './show-json.component.html',
  styleUrls: ['./show-json.component.css']
})
export class ShowJsonComponent implements OnInit {

  user:Users
  constructor(public bsModalref: BsModalRef) { }

  ngOnInit() {
  }

}
