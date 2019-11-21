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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';
import { httpInterceptor } from './interceptor/http.interceptor';
import { CustomerService } from './services/customer/customer.service';
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
    }),
    SuiModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
