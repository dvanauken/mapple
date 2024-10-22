import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { JtableComponent } from './components/jtable/jtable.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tab/tabs.component';
import { DayNamePipe } from './pipes/enum-to-day-name.pipe';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    JtableComponent,
    DayNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule // Add HttpClientModule here
  ],
  exports: [
    TabsComponent,
    TabComponent,
    JtableComponent,
    DayNamePipe
  ]
})
export class MappleUiModule { }
