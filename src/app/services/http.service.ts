import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {
  }

  public get<T>(url:string):Observable<T>{
    return this.http.get<T>(url);
  }

  public post(url:string,data:any){
    return this.http.post(url,data).toPromise()
  }

  public put(url:string,data:any){
    return this.http.put(url,data).toPromise()
  }

  public delete(url:string,data:any){
    return this.http.delete(url,data).toPromise()
  }
}
