import { Component, OnInit } from '@angular/core';
import { StocksService } from '../services/stocks.service';
import { Stock } from '../shared/stock';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
_stockArray: Stock[] =[];
_tickers: String[] = []
  constructor(private stock:StocksService) { }

getStocks(){
    this.stock.getAllStocks().subscribe(stocks =>{ this._stockArray=stocks;
        var resArr = [];
        stocks.filter(function(item){
        var i = resArr.findIndex(x => x.symbol == item.symbol);
        if(i <= -1){
            resArr.push({symbol:item.symbol});
              }
            return null;
         });
              this._tickers=resArr;
    });
 }
 
  getChipInfo(){
    console.log("Chip Info");
    
  
  }
  ngOnInit() {
    this.getStocks();
  }

}
