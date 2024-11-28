import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { outil } from 'src/Models/outil';

@Injectable({
  providedIn: 'root'
})
export class OutilService {

  constructor(private httpClient:HttpClient) {}

  getAll() : Observable<outil[]> 
  {
    return this.httpClient.get<outil[]>('http://localhost:3000/Tools')
  }
}
