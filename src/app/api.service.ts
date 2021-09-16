import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_SERVER = "http://localhost:3000";
  constructor(public httpClient: HttpClient) { }
}
