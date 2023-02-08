import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftAsideComponent } from './left-aside/left-aside.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LeftAsideComponent,
    ScrollTopComponent
  ],
  exports: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LeftAsideComponent,
    ScrollTopComponent
  ],
  imports: [
    // local
    BrowserModule,
    BrowserAnimationsModule,

    //material
    MatIconModule
  ]
})
export class CoreModule { }
