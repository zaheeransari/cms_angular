import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-master-menu',
  templateUrl: './master-menu.component.html',
  styleUrls: ['./master-menu.component.css']
})
export class MasterMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getLeftSlideMenu();
  }
  getLeftSlideMenu() {
    $(document).ready(function () {
      $('.leftmenutrigger').on('click', function (e) {
        $('.side-nav').toggleClass("open");
        $('#wrapper').toggleClass("open");
        e.preventDefault();
      });
    });
  }

}
