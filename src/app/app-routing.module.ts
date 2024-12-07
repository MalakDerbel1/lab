import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';



//tableau de routes (routes pr naviguer dans les # pages de l'app)
const routes: Routes = [// ordre des routers intervient 
  {
    path:'',// va apparaitre ds l'url
    pathMatch:'full', // pour utiliser l'* matching complet 
    component:LoginComponent
  },
  {
    path:'create',// va apparaitre ds l'url
    pathMatch:'full', // pour utiliser l'* matching complet 
    component:MemberFormComponent
  },
  { path:'member', // va apparaitre ds l'url
    pathMatch:'full', 
    component:MemberComponent}, 
    {
      path:':id/edit', // va apparaitre ds l'url  //:id = contenue dynamique 
      pathMatch:'full', // pour utiliser l'* matching complet 
      component:MemberFormComponent
    },
    {
      path:'dashboard',// va apparaitre ds l'url  //:id = contenue dynamique 
      pathMatch:'full', // pour utiliser l'* matching complet 
      component:DashboardComponent
    },
    {
      path:'tools',// va apparaitre ds l'url  //:id = contenue dynamique 
      pathMatch:'full', // pour utiliser l'* matching complet 
      component:ToolsComponent
    },
    {
      path:'articles',// va apparaitre ds l'url  //:id = contenue dynamique 
      pathMatch:'full', // pour utiliser l'* matching complet 
      component:ArticleComponent
    },
    {
      path:'events',// va apparaitre ds l'url  //:id = contenue dynamique 
      pathMatch:'full', // pour utiliser l'* matching complet 
      component:EventComponent
    },
    
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
