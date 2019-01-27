import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { BlogsComponent } from './blogs/blogs.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'blogs', component: BlogsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    BlogsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
