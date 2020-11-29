import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ErrorComponent } from './error/error.component';
import { DetailModalComponent } from './gallery/detail-modal/detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ErrorComponent,
    DetailModalComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
