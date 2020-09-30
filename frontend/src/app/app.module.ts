import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextsectionComponent } from './components/textsection/textsection.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ScriptComponent } from './pages/script/script.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { MenuFullscreenComponent } from './components/menu-fullscreen/menu-fullscreen.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TextsectionComponent,
    SidebarComponent,
    HomeComponent,
    ScriptComponent,
    LeftSidebarComponent,
    MenuFullscreenComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
