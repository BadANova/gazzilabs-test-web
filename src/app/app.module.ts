import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TableViewComponent } from './table-view/table-view.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: TopBarComponent }])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    TableViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
