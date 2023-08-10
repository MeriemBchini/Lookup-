import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { NgModule } from '@angular/core';
import { AnalyseComponent } from './analyse/analyse.component';


const routes: Routes = [
    {path:'',redirectTo:'hello',pathMatch:'full'},
    {path : 'hello' , component :HelloComponent } ,
    {path : 'analyse' , component : AnalyseComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }