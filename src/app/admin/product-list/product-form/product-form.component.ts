import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup
  constructor(private rest: RestService, private fb: FormBuilder) { }

  ngOnInit() {
    this.InitializeProduct();
  }
  InitializeProduct() {

    this.productForm = this.fb.group({
      product: this.fb.array([this.createItem()])
    })
  }
  createItem() {
    return this.fb.group({
      ProductName: [],
      ProductDesc: [],
      ProductAmount: []
    })
  }
  addNext() {
    (this.productForm.controls['product'] as FormArray).push(this.createItem())
  }
  SaveProduct() {
    if (this.productForm.valid) {
      debugger;
      this.rest.post('Product/Post', this.productForm.value.product)
        .subscribe(res => {

        })
    }
  }
}
