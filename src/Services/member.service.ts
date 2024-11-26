import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Models/Member';


// decorateur : permet d'injecter le service dans le composant
@Injectable({
  providedIn: 'root'
})
export class MemberService {

                         // type : nom 
  constructor(private httpClient:HttpClient) {}
  //angular utilise le thread observable=un listener . patron de conception basé sur les 3 parties
  //subscriber:celui qui va ecouter , observer: qui va raconter , notifications  :histoire 
    GetAll() : Observable<Member[]> 
    {
      //recuperer les membres a partie du bd
      return this.httpClient.get<Member[]>('http://localhost:3000/membres')
// a chaque envoie de requete angular lance un thread observable 
    }

    AddMember(m:Member) : Observable<void> 
    {
      return this.httpClient.post<void>('http://localhost:3000/membres',m);
    }

    deleteMember(id:string) : Observable<void> 
    {
      return this.httpClient.delete<void>(`http://localhost:3000/membres/${id}`);
    }
   }

