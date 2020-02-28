import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BillAddComponent } from './bill-components/bill-add/bill-add.component';
import { BillInfoComponent } from './bill-components/bill-info/bill-info.component';
import { BillListComponent } from './bill-components/bill-list/bill-list.component';
import { BillUpdateComponent } from './bill-components/bill-update/bill-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BillAddComponent,
    BillInfoComponent,
    BillListComponent,
    BillUpdateComponent,
    CounterComponent,
    FetchDataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'bills', component: BillListComponent },
      { path: 'bill/add', component: BillAddComponent },
      { path: 'bill/info', component: BillInfoComponent },
      { path: 'bill/update', component: BillUpdateComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
