import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { TaskService } from './task/task.service';

const appRoutes: Routes = [
  { path: 'list', component: TaskListComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagenotfound' }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
