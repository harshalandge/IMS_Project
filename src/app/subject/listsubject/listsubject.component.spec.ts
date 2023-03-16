import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsubjectComponent } from './listsubject.component';

describe('ListsubjectComponent', () => {
  let component: ListsubjectComponent;
  let fixture: ComponentFixture<ListsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
