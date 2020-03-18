import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MessageService } from './messages.service';
import { IndicatorComponent } from './indicator.component';

@NgModule({
    imports:      [ 
        BrowserModule 
    ],
    declarations: [ 
        AppComponent,
        IndicatorComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [
        MessageService
    ]
})
export class AppModule { }
