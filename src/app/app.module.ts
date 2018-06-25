import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router'; // router

import { HomeComponent } from './home/home.component';
import { NgbButtonCheckboxComponent } from './ngb-button-checkbox/ngb-button-checkbox.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgbdSideNavComponent } from './ngbd-side-nav/ngbd-side-nav.component'; // ng-bootstrap

const routes: Routes = [

    // 기본 라우트
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NgbButtonCheckboxComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NgbdSideNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
