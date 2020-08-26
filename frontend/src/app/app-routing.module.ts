import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScriptComponent } from './pages/script/script.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scripts/:id', component: ScriptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
