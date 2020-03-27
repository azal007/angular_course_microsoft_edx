import {Component} from '@angular/core';
import * as DataManager from './sample.module';

@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html'
})
export class AppComponent {
  public stringExample : string = new DataManager.StringGetter().getString();
  public numberExample : number = new DataManager.NumberGetter().getNumber();

}