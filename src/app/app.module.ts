import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './index/index.component';
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {NzIconModule} from "ng-zorro-antd/icon";
import { ContentUsComponent } from './content-us/content-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CaseComponent } from './case/case.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';
import { ProcessComponent } from './process/process.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ContentUsComponent,
    AboutUsComponent,
    CaseComponent,
    NewsComponent,
    ProductsComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCarouselModule,
    NzIconModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
