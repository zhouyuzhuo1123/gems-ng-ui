import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { MainComponent }        from './main/main.component'
import { CommunicateComponent }   from './communicate/communicate.component'
import { courselistComponent }   from './courselist/courselist.component'
import { DetailComponent }        from './detail/detail.component'
import { EntochPipe } from './pipe/entoch'

import { CountClicks } from './main/test.directive'
import { AppRoutingModule }     from './app-routing.module';


import { ElModule } from 'element-angular' 
import 'element-angular/theme/index.css';
import { courseComponent } from './course/course.component'  

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    MainComponent,
    CommunicateComponent,
    DetailComponent,
    courselistComponent,
    courseComponent,
    EntochPipe,
    CountClicks,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
