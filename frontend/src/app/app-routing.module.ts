import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScriptComponent } from './pages/script/script.component';
import { CustomReuseStrategy } from './classes/custom-reuse-strategy';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'scripts/:id', component: ScriptComponent, data: { animation: 'ScriptPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
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
