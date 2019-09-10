import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WbgListComponent } from './wbg-list/wbg-list.component';
import { RedWineComponent } from './red-wine/red-wine.component';
import { WhiteWineComponent } from './white-wine/white-wine.component';
import { SparklingWineComponent } from './sparkling-wine/sparkling-wine.component';
import { NewWbgComponent } from './new-wbg/new-wbg.component';

@NgModule({
  declarations: [
    AppComponent,
    WbgListComponent,
    RedWineComponent,
    WhiteWineComponent,
    SparklingWineComponent,
    NewWbgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
