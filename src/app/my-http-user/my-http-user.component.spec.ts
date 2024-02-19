import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpUserComponent } from './my-http-user.component';

describe('MyHttpUserComponent', () => {
  let component: MyHttpUserComponent;
  let fixture: ComponentFixture<MyHttpUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHttpUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHttpUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
