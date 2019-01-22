import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

import { StocksService } from './services/stocks.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, 
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, 
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, 
  MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, 
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, 
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { TickerDetailComponent } from './ticker-detail/ticker-detail.component';
import { AllstocksComponent } from './allstocks/allstocks.component';
//import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StockDetailsComponent,
    TickerDetailComponent,
    AllstocksComponent,
  //  LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, 
        MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
        MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, 
        MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
        MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, 
        MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, 
        MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, 
        MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
