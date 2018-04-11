import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

// Pipes
import { Filter } from './pipe/filter.pipe';
import { Sort } from 'app/pipe/sort.pipe';

// Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TeambuilderComponent } from './teambuilder/teambuilder.component';
import { PokemonBoxComponent } from './pokemonbox/pokemonbox.component';
import { CoreCoverageComponent } from './corecoverage/corecoverage.component';
import { DefensiveCoverageComponent } from './defensivecoverage/defensivecoverage.component';
import { OffensiveCoverageComponent } from './offensivecoverage/offensivecoverage.component';
import { OffenseVsDefenseComponent } from './offensevsdefense/offensevsdefense.component';
import { FeaturedComponent } from './featured/featured.component';

// Services
import { MoveService } from './services/move.service';
import { PokemonService } from './services/pokemon.service';
import { TeamService } from './services/team.service';
import { TypeService } from './services/type.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';

// Modules
import { DndModule } from 'ng2-dnd';
import { ViewUsersComponent } from './view-users/view-users.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TeambuilderComponent,
    PokemonBoxComponent,
    CoreCoverageComponent,
    DefensiveCoverageComponent,
    OffensiveCoverageComponent,
    OffenseVsDefenseComponent,
    FeaturedComponent,
    Filter,
    Sort,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    DndModule.forRoot()
  ],
  providers: [
    PokemonService,
    MoveService,
    TeamService,
    TypeService,
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
