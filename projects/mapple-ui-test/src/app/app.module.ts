import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TabsClientComponent } from './tabs-client.component';
import { MappleUiModule } from 'projects/mapple-ui/src/lib/mapple-ui.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', component: TabsClientComponent }, // Add the route for 'tabs'
  { path: '', redirectTo: '/tabs', pathMatch: 'full' } // Redirect to 'tabs' as default
];

@NgModule({
  declarations: [
    AppComponent,
    TabsClientComponent
  ],
  imports: [
    BrowserModule,
    MappleUiModule,
    RouterModule.forRoot(routes) // Configure routes
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
