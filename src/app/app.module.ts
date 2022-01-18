import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaytinhComponent } from './maytinh/maytinh.component';
import { ColorComponent } from './color/color.component';
import { ProductComponent } from './product/product.component';
import { NameCardComponent } from './name-card/name-card.component';
import { BaitapnhoComponent } from './baitapnho/baitapnho.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TodoComponent } from './todo/todo.component';
import { SutudentComponent } from './sutudent/sutudent.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
@NgModule({
  declarations: [
    AppComponent,
    MaytinhComponent,
    ColorComponent,
    ProductComponent,
    NameCardComponent,
    BaitapnhoComponent,
    TodoComponent,
    SutudentComponent,
    TimelinesComponent,
    YoutubePlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
