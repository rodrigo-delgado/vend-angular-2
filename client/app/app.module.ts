import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavigationComponent }  from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent} from './components/carousel/carousel.component';
import { SignInFormComponent } from './components/signin-form/signin-form.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent,
                  NavigationComponent,
                  FooterComponent,
                  SignInFormComponent,
                  CarouselComponent],


  bootstrap:    [ AppComponent ]
})
export class AppModule { }
