import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDEmoComponent } from './directive-demo.component';

describe('DirectiveDEmoComponent', () => {
  let component: DirectiveDEmoComponent;
  let fixture: ComponentFixture<DirectiveDEmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveDEmoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveDEmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
