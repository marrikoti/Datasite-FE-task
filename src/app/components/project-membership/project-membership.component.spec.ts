import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFacade } from 'src/app/store/user.facade';

import { ProjectMembershipComponent } from './project-membership.component';

describe('ProjectMembershipsComponent', () => {
  let component: ProjectMembershipComponent;
  let fixture: ComponentFixture<ProjectMembershipComponent>;
  let userFacade: any;
  beforeEach(async () => {
    userFacade = {};
    await TestBed.configureTestingModule({
      declarations: [ ProjectMembershipComponent ],
      providers: [{provide: UserFacade, useValue: userFacade}]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
