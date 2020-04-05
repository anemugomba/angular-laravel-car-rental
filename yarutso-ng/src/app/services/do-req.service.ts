import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../car';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoReqService {


  private baseUrl = '';
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrlBase + 'index.php/api';
   }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }

  getCars(sort: string, order: string, page: number): Observable<Car> {
    console.log('sort', sort);
    console.log('order', order);
    console.log('page number', page);
    return this.http.get<Car>(`${this.baseUrl}/cars?sort=${sort}&order=${order}&page=${page + 1}`);
  }

  public upload(formData) {

    return this.http.post<any>(`${this.baseUrl}/addCar`, formData, {
        reportProgress: true,
        observe: 'events'
      });
  }

  public upDateCar(formData) {
    return this.http.post<any>(`${this.baseUrl}/updateCar`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}

