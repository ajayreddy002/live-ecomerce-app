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
}