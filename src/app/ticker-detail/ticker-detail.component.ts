import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StocksService } from '../services/stocks.service';
import { Stock } from '../shared/stock';

@Component({
  selector: 'app-ticker-detail',
  templateUrl: './ticker-detail.component.html',
  styleUrls: ['./ticker-detail.component.css']
})
export class TickerDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private stockserve: StocksService ) { }

stockArr: Stock[] =[];              

getTickerDetails(symbol:string){
  this.stockserve.getAllSTocksBySymbol(symbol).subscribe(stocks =>{ this.stockArr=stocks;  });
}              

  ngOnInit() {
    const symbol = this.route.snapshot.paramMap.get('symb');
    console.log(symbol);
    this.getTickerDetails(symbol);
  }

}
