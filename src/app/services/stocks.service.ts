import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Stock } from '../shared/stock';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StocksService {

  constructor(private http: Http) { }

  getAllStocks(): Observable<Stock[]>{
    return  this.http.get('http://localhost:3000/stocks')
                      .map(res => { return res.json();  })
                      .catch((error:any) => {
                        return Observable.throw(error.json ? error.json().error : error || 'Server error')
      }); 
  }

  getAllSTocksBySymbol(symbol:String):Observable<Stock[]>{
    return this.http.get('http://localhost:3000/stocks/'+symbol)
    .map(res => { return res.json(); })
    .catch( (error:any) => {
        return Observable.throw(error.json ? error.json().error : error || 'Server error')
    }  )
  }
}
