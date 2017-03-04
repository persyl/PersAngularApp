import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DemoComponent } from './demo.component';
import {TasksComponent} from './tasks.component';
//import { PokemonListComponent } from "./pokemon/pokemon-list.component";

// const routes: Routes = [
//   { path: "", component: PokemonListComponent }
// ];
const routes: Routes = [
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
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
