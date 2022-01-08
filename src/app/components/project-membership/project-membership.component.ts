import { Component, OnInit } from '@angular/core';
import {UserFacade} from "../../store/user.facade";

@Component({
  selector: 'app-project-membership',
  templateUrl: './project-membership.component.html',
  styleUrls: ['./project-membership.component.scss']
})
export class ProjectMembershipComponent implements OnInit {
  projectRelationsState$ = this.userFacade.getProjectRelationState$;
  constructor(private userFacade: UserFacade) { }

  ngOnInit(): void {
  }

}
