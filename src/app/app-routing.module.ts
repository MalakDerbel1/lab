import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';



//tableau de routes (routes pr naviguer dans les # pages de l'app)
const routes: Routes = [
  {
    path:'create',// va apparaitre ds l'url
    pathMatch:'full', // pour utiliser l'* matching complet 
    component:MemberFormComponent
  },
  { path:'', // va apparaitre ds l'url
    pathMatch:'full', 
    component:MemberComponent},
  {
    path:'**', // va apparaitre ds l'url
    component:MemberComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
