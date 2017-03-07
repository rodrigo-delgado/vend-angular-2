import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { NavigationComponent }  from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent} from './components/carousel/carousel.component';
import { SignInFormComponent } from './components/signin-form/signin-form.component';
import { BodyContainerComponent } from './components/body-container/body-container.component';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule,
                  ReactiveFormsModule],
  declarations: [ AppComponent,
                  NavigationComponent,
                  FooterComponent,
                  SignInFormComponent,
                  CarouselComponent,
                  BodyContainerComponent
                ],


  bootstrap:    [ AppComponent ]
})

export class AppModule { }
