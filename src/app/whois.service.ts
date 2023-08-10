

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class whoisService{
    
    constructor(private http : HttpClient){

    }

    getInfo(url:string): Observable<any> {
        return this.http.get("http://localhost:3000/"+url).pipe(map(
            (data:any)=>{
              return data
            }
          )
          )
      }

    getAll() : Observable<any> {
      return this.http.get("http://localhost:3000").pipe(map(
        (data:any)=>{
          return data
        }
      ))
    }
    

}