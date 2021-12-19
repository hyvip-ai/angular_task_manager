import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskLeftComponent } from './components/task-left/task-left.component';
import { TaskRightComponent } from './components/task-right/task-right.component';
import { TaskItemComponent } from './components/task-left/task-item/task-item.component';
import { HomeComponent } from './pages/home/home.component';
import { AddlistComponent } from './pages/addlist/addlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskLeftComponent,
    TaskRightComponent,
    TaskItemComponent,
    HomeComponent,
    AddlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
