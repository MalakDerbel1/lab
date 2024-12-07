import { Component, OnInit } from '@angular/core';
import { MemberComponent } from '../member/member.component';
import { MemberService } from 'src/Services/member.service';
import { EvtService } from 'src/Services/evt.service';
import { PubService } from 'src/Services/pub.service';
import { OutilService } from 'src/Services/outil.service';
import {ChartDataset,ChartOptions}from 'chart.js'
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

nbTeacher:number=0;
nbStudent:number=0;
TAB:string[]=[];
TabEvt:number[]=[];
nbSfax:number=0;
nbTunis:number=0;


chartLabels2: string[] = ['Teacher','Student'];
chartOptions2: ChartOptions = {};


chartLabels3: string[] = ['sfax','tunis'];
chartOptions3: ChartOptions = {};


chartData2: ChartDataset[] = [
  {
    // ⤵️ Add these
    label: '$ in millions',
    data: []
  }
];
chartData: ChartDataset[] = [
  {
    // ⤵️ Add these
    label: '$ in millions',
    data: []
  }
];
chartData3: ChartDataset[] = [
  {
    // ⤵️ Add these
    label: '$ in millions',
    data: []
  }
];
chartLabels: string[] = [];
chartOptions: ChartOptions = {};


ngOnInit(){
  this.MS.GetAll().subscribe((tab)=>{
    
this.nbMembers=tab.length

for(let i=0; i<this.nbMembers;i++){

if(tab[i].type=='Teacher') this.nbTeacher++;
else this.nbStudent++;

this.TAB.push(tab[i].name)

this.TabEvt[i]=tab[i].TabEvt.length;

console.log("TabEvt",this.TabEvt);

this.chartLabels=this.TAB;
console.log("chartLabels",this.chartLabels);
}


console.log("nbTeacher",this.nbTeacher);
console.log("nbStudent",this.nbStudent);

this.chartData2= [
  {
    label: '$ in millions',
    data: [this.nbTeacher,this.nbStudent]
  }
];




  })

  

this.ES.getAllEvt().subscribe((tab)=>{
    this.nbEvts=tab.length
    for(let i=0; i<this.nbEvts;i++){

      if(tab[i].lieu=='sfax') this.nbSfax++;
      
      else this.nbTunis++;
    
      
      
      }
      console.log("chartLabels33333333333333333333333",this.nbTunis);
      
this.chartData3=[
  {
    // ⤵️ Add these
    label: '$ in millions',
    data: [this.nbSfax,this.nbTunis]
  }
];
      })
     

this.PS.getAll().subscribe((tab)=>{
        this.nbPubs=tab.length
          })


this.TS.getAll().subscribe((tab)=>{
            this.nbTools=tab.length
              });




this.chartData=[
  {
    label: '$ in millions',
    data: this.TabEvt
  }
];




}
}
