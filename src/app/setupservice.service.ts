import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetupserviceService {

  constructor(private http:HttpClient) {}
  getContext(){ return this.http.get("http://wcidev:9001/ecouiapservices/rest/1/setupcontextvoapi")}
}
