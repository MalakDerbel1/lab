import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pub } from 'src/Models/pub';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(private httpClient:HttpClient) {}

  getAll() : Observable<pub[]> 
  {
    return this.httpClient.get<pub[]>('http://localhost:3000/Pub')
  }
}
