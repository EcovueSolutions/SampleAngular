import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetupserviceService {

  constructor(private http:HttpClient) {}
  getContext(): Observable<any>{ return this.http.get("http://129.159.96.224:9001/ecouiapservices/rest/1/setupcontextvoapi")}
}
