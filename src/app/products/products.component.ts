import { Component, OnInit } from '@angular/core';
import { HttpClientServices } from '../_services/http-client.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any[] = [];
  constructor(
    private httpServices: HttpClientServices
  ) { }

  ngOnInit(): void {
    this.httpServices.getMethod()
      .subscribe(
        (data: any) => {
          this.products = data;
        }, err => {
          console.log(err);
        }
      )
  }

}
