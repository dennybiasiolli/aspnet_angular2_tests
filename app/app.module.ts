import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PairingComponent } from './pairing.component';
import { AboutComponent } from './about.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [ 
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        PairingComponent,
        AboutComponent,
    ],
})
export class AppModule { }