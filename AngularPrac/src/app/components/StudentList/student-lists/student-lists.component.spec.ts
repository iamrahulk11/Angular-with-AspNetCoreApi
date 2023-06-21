import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListsComponent } from './student-lists.component';

describe('StudentListsComponent', () => {
  let component: StudentListsComponent;
  let fixture: ComponentFixture<StudentListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListsComponent]
    });
    fixture = TestBed.createComponent(StudentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
