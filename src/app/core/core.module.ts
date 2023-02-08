import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent
  ],
  exports: [
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
