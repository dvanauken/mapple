import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JtableComponent } from './jtable.component';

describe('JtableComponent', () => {
  let component: JtableComponent;
  let fixture: ComponentFixture<JtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JtableComponent]
    });
    fixture = TestBed.createComponent(JtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
