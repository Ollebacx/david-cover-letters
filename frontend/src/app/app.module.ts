import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// COMPONENTS
import { TextsectionComponent } from './components/textsection/textsection.component';
import { MenuFullscreenComponent } from './components/menu-fullscreen/menu-fullscreen.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
// PAGES
import { HomeComponent } from './pages/home/home.component';
import { ScriptComponent } from './pages/script/script.component';
import { ContactComponent } from './pages/contact/contact.component';
// SERVICES
import { ContactService } from './shared/contact.service'

@NgModule({
  declarations: [
    AppComponent,
    TextsectionComponent,
    SidebarComponent,
    HomeComponent,
    ScriptComponent,
    LeftSidebarComponent,
    MenuFullscreenComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
