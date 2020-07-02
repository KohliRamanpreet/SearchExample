import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datastatic } from './data';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
    serviceURL="./assets/booklist.json";

  
  constructor(private http: HttpClient) { }
  getDetails():Observable<Datastatic>
    {
        return this.http.get<Datastatic>(this.serviceURL);
    }


}





