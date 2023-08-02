import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ReportComponent } from './pages/report/report.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReportComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
