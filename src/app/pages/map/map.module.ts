import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SignupPage} from "../signup/signup";

import { MapPage } from './map';
import { MapPageRoutingModule } from './map-routing.module';
import {SignUpModule} from "../signup/signup.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MapPageRoutingModule,
    SignUpModule
  ],
  declarations: [
    MapPage,
  ],
  entryComponents: [SignupPage],
})
export class MapModule { }
