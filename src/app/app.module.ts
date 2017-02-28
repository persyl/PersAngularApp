import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StartComponent } from './start.component';
import { DemoComponent } from './demo.component';
import {TasksComponent} from './tasks.component';
import { HighlightDirective } from './highlight.directive'; //My own custom directive

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  //{ path: 'task/:id',      component: TaskDetailComponent },
  {
    path: 'tasks',
    component: TasksComponent,
    data: { title: 'Tasklist' }
  },
  { path: '',
    component: DemoComponent,
    data:{ title: 'Demo title from route'}
  },
  // { path: '',
  //   redirectTo: '/tasks',
  //   pathMatch: 'full'
  // },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    StartComponent,
    DemoComponent,
    TasksComponent,
    HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
