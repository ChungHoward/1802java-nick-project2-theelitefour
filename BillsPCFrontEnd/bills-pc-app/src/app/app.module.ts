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

import { TeambuilderComponent } from './teambuilder/teambuilder.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PokemonBoxComponent } from './pokemon-box/pokemon-box.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    TeambuilderComponent,
    RegisterComponent,
    LoginComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
