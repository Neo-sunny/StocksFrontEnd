import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StockDetailsComponent } from '../stock-details/stock-details.component';
import { TickerDetailComponent } from '../ticker-detail/ticker-detail.component';
import { AllstocksComponent } from '../allstocks/allstocks.component';

const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'stocks', component: StockDetailsComponent},
  { path: 'stocks/:symb', component: TickerDetailComponent },
  { path: 'home', component:AllstocksComponent }
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ],
  declarations: []
})
export class AppRoutingModule { 

}
