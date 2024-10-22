import { Component, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterContentInit() {
    // Set the first tab as active after initialization
    if (this.tabs.length > 0) {
      this.selectTab(this.tabs.first);
    }
    this.cd.detectChanges(); // Manually trigger change detection
  }

  selectTab(tab: TabComponent) {
    // Deactivate all tabs
    this.tabs.toArray().forEach(t => t.active = false);

    // Activate the selected tab
    tab.active = true;

    // Trigger change detection to ensure the view updates
    this.cd.detectChanges();
  }
}
