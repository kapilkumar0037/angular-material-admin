import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavTemComponent } from './components/side-nav-tem/side-nav-tem.component';
import { SideNavComponent } from './containers/side-nav/side-nav.component';
import { TopNavComponent } from './containers/top-nav/top-nav.component';
import { TopNavUserComponent } from './components/top-nav-user/top-nav-user.component';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { FooterComponent } from './containers/footer/footer.component';



@NgModule({
  declarations: [SideNavTemComponent, SideNavComponent, TopNavComponent, TopNavUserComponent, DashboardLayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DashboardLayoutComponent]
})
export class NavigationModule { }
