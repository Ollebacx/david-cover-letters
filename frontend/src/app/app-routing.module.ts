import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScriptComponent } from './pages/script/script.component';
import {CustomReuseStrategy} from './classes/custom-reuse-strategy'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scripts/:id', component: ScriptComponent, data: { animation: 'ScriptPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomReuseStrategy
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
