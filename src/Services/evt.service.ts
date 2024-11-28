import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/Models/evt';

@Injectable({
  providedIn: 'root'
})
export class EvtService {

  constructor(private httpClient:HttpClient) {}

  getAllEvt() : Observable<Evt[]> 
  {
    return this.httpClient.get<Evt[]>('http://localhost:3000/evt')
  }

  AddEvent(E:Evt) : Observable<void> 
  {
    return this.httpClient.post<void>('http://localhost:3000/evt',E);
  }
  getEvtById(id:string) : Observable<Evt> 
    {
      return this.httpClient.get<Evt>(`http://localhost:3000/evt/${id}`);
    }

    updateEvt(E:Evt,id:string) : Observable<void> 
    {
      return this.httpClient.put<void>(`http://localhost:3000/evt/${id}`,E);
    }

    deleteEvtById(id:string) : Observable<void> 
    {
      return this.httpClient.delete<void>(`http://localhost:3000/evt/${id}`);
    }
}
