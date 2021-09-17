import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  public get(key: string) {
    return localStorage.getItem(key);
  }

  public set(key: string, data:any){
    localStorage.setItem(key,data);
  }

  public reset() {
    localStorage.clear();
  }

  constructor() { }
}
