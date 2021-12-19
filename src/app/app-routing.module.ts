import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { AddlistComponent } from './pages/addlist/addlist.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:"",pathMatch:'full',redirectTo:'home'
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:'addList',component:AddlistComponent
  },
  {
    path:'addTask',component:AddTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
