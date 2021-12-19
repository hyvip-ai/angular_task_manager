import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { AddlistComponent } from './pages/addlist/addlist.component';
import { EditListNameComponent } from './pages/edit-list-name/edit-list-name.component';
import { EdittaskNameComponent } from './pages/edittask-name/edittask-name.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
    path:':listID/addTask',component:AddTaskComponent
  },
  {
    path:"editTask/:taskId",component:EdittaskNameComponent
  },
  {
    path:"editList/:listId",component:EditListNameComponent
  },
  {
    path:"**",component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
