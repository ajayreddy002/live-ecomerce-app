import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HttpClientServices {
    constructor(
        private httpClient: HttpClient
    ){}
    getMethod(){
        return this.httpClient.get('http://localhost:3000/product');
    }
    getCategories(){
        return this.httpClient.get('https://fakestoreapi.com/products/categories');
    }
    addProduct(prodcutData: any){
        return this.httpClient.post('http://localhost:3000/product', prodcutData);
    }
}