import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TeambuilderComponent } from './teambuilder/teambuilder.component';
import { PokemonBoxComponent } from './pokemonbox/pokemonbox.component';
import { CoreCoverageComponent } from './corecoverage/corecoverage.component';
import { DefensiveCoverageComponent } from './defensivecoverage/defensivecoverage.component';
import { OffensiveCoverageComponent } from './offensivecoverage/offensivecoverage.component';
import { OffenseVsDefenseComponent } from './offensevsdefense/offensevsdefense.component';
import { FeaturedComponent } from './featured/featured.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teambuilder', component: TeambuilderComponent },
  { path: 'pokemonbox', component: PokemonBoxComponent },
  { path: 'corecoverage', component: CoreCoverageComponent },
  { path: 'defensivecoverage', component: DefensiveCoverageComponent },
  { path: 'offensivecoverage', component: OffensiveCoverageComponent },
  { path: 'offensevsdefense', component: OffenseVsDefenseComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'upgrade', component: UpgradeComponent },
  { path: '', redirectTo: 'teambuilder', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
