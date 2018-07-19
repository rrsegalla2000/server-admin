import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesicoesComponent } from './requesicoes.component';

describe('RequesicoesComponent', () => {
  let component: RequesicoesComponent;
  let fixture: ComponentFixture<RequesicoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequesicoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
