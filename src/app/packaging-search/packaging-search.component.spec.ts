import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingSearchComponent } from './packaging-search.component';

describe('PackagingSearchComponent', () => {
  let component: PackagingSearchComponent;
  let fixture: ComponentFixture<PackagingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagingSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
