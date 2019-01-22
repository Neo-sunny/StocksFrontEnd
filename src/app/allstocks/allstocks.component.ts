import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material';
import { Stock } from '../shared/stock';
import { StocksService } from '../services/stocks.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-allstocks',
  templateUrl: './allstocks.component.html',
  styleUrls: ['./allstocks.component.css']
})
export class AllstocksComponent implements OnInit {

  _stockArray: Stock[] =[];

  displayedColumns = ['date', 'symbol', 'open', 'close'];
 // dataSource = this._stockArray;
  dataSource= new UserDataSource(this.stocks);
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    console.log(filterValue);
  }


  constructor(private stocks:StocksService ) { }

  getStocks(){
    this.stocks.getAllStocks().subscribe(stocks =>{ this._stockArray=stocks;
    });
 }
 

  ngOnInit() {
  }
  
}
export class UserDataSource extends DataSource<any> {
  constructor(private stocks: StocksService) {
    super();
  }
  connect(): Observable<Stock[]> {
    return this.stocks.getAllStocks();
  }
  disconnect() {}
}