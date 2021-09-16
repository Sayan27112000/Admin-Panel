import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path : '' , redirectTo : 'addtask' , pathMatch : 'full' },
  { path : 'addtask' , component : AddTaskComponent },
  { path : 'tasklist' , component : TaskListComponent },
  { path : 'login' , component : LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
