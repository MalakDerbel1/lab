import { Component, OnInit } from '@angular/core';
import { MemberComponent } from '../member/member.component';
import { MemberService } from 'src/Services/member.service';
import { EvtService } from 'src/Services/evt.service';
import { PubService } from 'src/Services/pub.service';
import { OutilService } from 'src/Services/outil.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  constructor(private MS:MemberService, private ES:EvtService ,private TS:OutilService , private PS:PubService){}
  nbMembers:number=0
  nbTools:number=0
  nbPubs:number=0
  nbEvts:number=0


ngOnInit(){
  this.MS.GetAll().subscribe((tab)=>{
    
this.nbMembers=tab.length
  })

this.ES.getAllEvt().subscribe((tab)=>{
    this.nbEvts=tab.length
      })


this.PS.getAll().subscribe((tab)=>{
        this.nbPubs=tab.length
          })


this.TS.getAll().subscribe((tab)=>{
            this.nbTools=tab.length
              })
}

}
