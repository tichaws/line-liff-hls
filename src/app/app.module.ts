import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineLiffComponent } from './line-liff/line-liff.component';
import { NgMaterialModule } from 'src/ng-material/ng-material.module';
import { VideoPlayerModule } from 'src/video-player/video-player.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule }      from '@ngrx/store-devtools';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LineLiffComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgMaterialModule,
    VideoPlayerModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
