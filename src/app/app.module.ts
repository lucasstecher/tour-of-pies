import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PiesComponent } from './pies/pies.component';
import { FormsModule } from '@angular/forms';
import { PieDetailComponent } from './pie-detail/pie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PiesComponent,
    PieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
