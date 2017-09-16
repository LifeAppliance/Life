import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MdAutocompleteModule , MdCheckboxModule , MdDatepickerModule , MdInputModule ,
  MdRadioModule, MdSelectModule, MdSliderModule , MdSlideToggleModule,
  MdMenuModule, MdSidenavModule, MdToolbarModule, MdListModule, MdGridListModule, MdCardModule ,
  MdTabsModule, MdExpansionModule, MdButtonModule, MdButtonToggleModule, MdChipsModule,
  MdIconModule, MdProgressSpinnerModule, MdProgressBarModule, MdDialogModule, MdTooltipModule,
  MdSnackBarModule, MdTableModule, MdSortModule , MdPaginatorModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdAutocompleteModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule ,
    MdTabsModule,
    MdExpansionModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdTableModule,
    MdSortModule,
    MdPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
