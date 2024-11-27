import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAngularComponent } from './sub-angular.component';

describe('SubAngularComponent', () => {
  let component: SubAngularComponent;
  let fixture: ComponentFixture<SubAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
