import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTresComponent } from './module-tres.component';

describe('ModuleTresComponent', () => {
  let component: ModuleTresComponent;
  let fixture: ComponentFixture<ModuleTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleTresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
