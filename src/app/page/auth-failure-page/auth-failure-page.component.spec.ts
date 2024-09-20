import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFailurePageComponent } from './auth-failure-page.component';

describe('AuthFailurePageComponent', () => {
  let component: AuthFailurePageComponent;
  let fixture: ComponentFixture<AuthFailurePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFailurePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFailurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
