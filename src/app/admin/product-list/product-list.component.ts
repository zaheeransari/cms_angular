import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: Array<any>[];
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.GetProduct();
  }
  GetProduct() {
    this.rest.fetch("Product/GetData")
      .subscribe(res => {
        this.items = res;
      })
  }

}
