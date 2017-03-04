import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";
import { StartComponent } from './start.component';
import { DemoComponent } from './demo.component';
import { TasksComponent } from './tasks.component';
import {PokemonListComponent} from './pokemon/pokemon-list.component';
import { PokemonDetailComponent } from "./pokemon/pokemon-detail.component";
import { PokemonService } from "./pokemon/pokemon.service";
import { HighlightDirective } from './highlight.directive'; //My own custom directive

@NgModule({
  declarations: [
    StartComponent,
    DemoComponent,
    TasksComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    HighlightDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers:[PokemonService],
  bootstrap: [StartComponent]
})
export class AppModule { }
