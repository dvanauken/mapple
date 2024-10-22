import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JtableComponent } from 'mapple-ui'; // Import from the library
import { TabsComponent } from 'mapple-ui'; // Import from the library
import { TabsClientComponent } from '.components/tabs/tabs-client.component';  // Import the new client component
import { JTableTestClientComponent } from '.components/table/table-client.component';  // Import the new client component


const routes: Routes = [
  { path: 'table', component: JTableTestClientComponent },  // Route for JTable component
  { path: 'tabs', component: TabsClientComponent  },     // Route for Tabs component
  { path: '', redirectTo: '/table', pathMatch: 'full' },  // Default route redirects to 'table'
  { path: '**', redirectTo: '/table' }            // Wildcard route redirects to 'table'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
