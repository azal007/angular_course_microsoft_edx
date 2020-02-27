import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html'
})
export class AppComponent {
  public myIP : string;
  constructor(private http : Http) {
    this.getIPAddress()
      .subscribe(
        ipdata => this.myIP = ipdata.json().origin
      );
  }
  private getIPAddress() : Observable<Response> {
    return this.http.get('http://httpbin.org/ip');
  }
}