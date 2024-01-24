import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsengStyleComponent } from './useng-style.component';

describe('UsengStyleComponent', () => {
  let component: UsengStyleComponent;
  let fixture: ComponentFixture<UsengStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsengStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsengStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
