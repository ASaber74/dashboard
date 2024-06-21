import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SideMenuComponent } from './main-section/side-menu/side-menu.component';
import { DashboardComponent } from './main-section/dashboard/dashboard.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { GridsterModule } from 'angular-gridster2';
import { AudienceComponent } from './main-section/audience/audience.component';
import { CarouselComponent } from './main-section/audience/carousel/carousel.component';
import { PieChartsComponent } from './main-section/dashboard/pie-charts/pie-charts.component';
import { DailyUsageChartComponent } from './main-section/dashboard/daily-usage-chart/daily-usage-chart.component';
import { PerformanceChartComponent } from './main-section/dashboard/performance-chart/performance-chart.component';
import { RationStockChartComponent } from './main-section/dashboard/ration-stock-chart/ration-stock-chart.component';
import { RealTimeComponent } from './main-section/dashboard/real-time/real-time.component';
import { QuickStatsComponent } from './main-section/dashboard/quick-stats/quick-stats.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { UsersComponent } from './main-section/users/users.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainSectionComponent,
    SideMenuComponent,
    DashboardComponent,
    AudienceComponent,
    CarouselComponent,
    PieChartsComponent,
    DailyUsageChartComponent,
    PerformanceChartComponent,
    RationStockChartComponent,
    RealTimeComponent,
    QuickStatsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    GridsterModule,
    HighchartsChartModule,
    FormsModule,
    jqxGridModule,
    jqxButtonModule,
    jqxNumberInputModule,
    jqxInputModule,
    jqxWindowModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
