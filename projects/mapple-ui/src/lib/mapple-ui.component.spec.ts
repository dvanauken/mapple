import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappleUiComponent } from './mapple-ui.component';

describe('MappleUiComponent', () => {
  let component: MappleUiComponent;
  let fixture: ComponentFixture<MappleUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MappleUiComponent]
    });
    fixture = TestBed.createComponent(MappleUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
