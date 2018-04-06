import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { Filter } from './pipe/filter.pipe';
import { Sort } from 'app/pipe/sort.pipe';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TeambuilderComponent } from './teambuilder/teambuilder.component';
import { PokemonBoxComponent } from './pokemonbox/pokemonbox.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { PokemonComponent } from './pokemon/pokemon.component';

// Services
import { LoggingService } from './services/logging.service';
import { MoveService } from './services/move.service';
import { TeamService } from './services/team.service';
import { TypeService } from './services/type.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TeambuilderComponent,
    PokemonBoxComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PokemonComponent,
    Filter,
    Sort,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [LoggingService, MoveService, TeamService, TypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
