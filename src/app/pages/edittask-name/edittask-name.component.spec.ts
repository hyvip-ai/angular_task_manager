import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittaskNameComponent } from './edittask-name.component';

describe('EdittaskNameComponent', () => {
  let component: EdittaskNameComponent;
  let fixture: ComponentFixture<EdittaskNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittaskNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittaskNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
