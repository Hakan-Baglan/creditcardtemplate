import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatNumberPipe } from './pipe/format-number.pipe';
import { FormatCardNumberPipe } from './pipe/format-card-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    CardComponent,
    FormatNumberPipe,
    FormatCardNumberPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
