import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientServices } from '../_services/http-client.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  isProductView = true;
  productForm!: FormGroup;
  categories = [];
  constructor(
    private httpServices: HttpClientServices,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.httpServices.getMethod()
      .subscribe(
        (data: any) => {
          this.products = data;
        }, err => {
          console.log(err);
        }
      );
    this.productForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required]
    });

    // Getting categories
    this.httpServices.getCategories()
      .subscribe(
        (data: any) => {
          this.categories = data;
          console.log(data);
        }, err => {
          console.log(err);
        }
      )
  }
  addProduct() {
    if (this.productForm.valid) {
      this.productForm.controls.id.setValue(this.products[this.products.length - 1].id + 1);
      this.httpServices.addProduct(this.productForm.value)
        .subscribe(
          (data: any) => {
            if(data && data.id){
              alert('data inserted successfully');
              this.productForm.reset();
              this.isProductView = true;
            }
          }, err => {
            alert('Failed to insert data')
            console.log(err);
          }
        )
    } else {
      alert('Please enter valid details');
    }
  }
}
