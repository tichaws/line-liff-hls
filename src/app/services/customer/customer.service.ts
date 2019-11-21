import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  createCustomer(data) {
    return this.http.post("/ca/customers/",data).toPromise();
  }
}
