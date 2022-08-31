import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAddComponent } from './config-add.component';

describe('ConfigAddComponent', () => {
  let component: ConfigAddComponent;
  let fixture: ComponentFixture<ConfigAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
