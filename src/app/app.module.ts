import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InterpolationComponent } from './component/interpolation/interpolation.component';
import { PropertybindingComponent } from './component/propertybinding/propertybinding.component';
import { EventbindingComponent } from './component/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './component/twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './component/directive/directive.component';
import { NgClassComponent } from './component/ng-class/ng-class.component';
import { UsengStyleComponent } from './component/ngStyle/useng-style.component';
import { NgIfComponent } from './component/ng-if/ng-if.component';
import { NgSwitchComponent } from './component/ng-switch/ng-switch.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DirectiveComponent,
    NgClassComponent,
    UsengStyleComponent,
    NgIfComponent,
    NgSwitchComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
