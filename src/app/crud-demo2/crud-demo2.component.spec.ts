import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDemo2Component } from './crud-demo2.component';

describe('CrudDemo2Component', () => {
  let component: CrudDemo2Component;
  let fixture: ComponentFixture<CrudDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudDemo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
