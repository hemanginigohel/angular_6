import { Injectable } from '@angular/core';
import { Iform } from './iform';
import { Observable , of } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  dataarray=[];
  private url:string="reqres.in";
  constructor(private http:HttpClient) { }
  dataget(event){
    this.dataarray.push(event);
    console.log(this.dataarray);
  }
  datasend(): Observable<Iform[]>{
    return of(this.dataarray);
  }
  getreq(){
    return this.http.get(this.url);
  }
 
}
