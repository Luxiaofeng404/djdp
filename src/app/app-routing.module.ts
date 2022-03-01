import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {CaseComponent} from "./case/case.component";
import {ContentUsComponent} from "./content-us/content-us.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {NewsComponent} from "./news/news.component";
import {ProductsComponent} from "./products/products.component";
import {ProcessComponent} from "./process/process.component";

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'case/:type', component: CaseComponent},
  {path: 'news', component: NewsComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContentUsComponent},
  {path: 'process', component: ProcessComponent},
  {path: 'products/:type', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
