import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
      this.loadUser(this.currentUser.email);
  }

  updatUser(user: User) {
      this.userService.update(user).subscribe(() => {
          this.loadUser(user.email);
      });
  }

  private loadUser(email) {
      this.userService.getById(email).subscribe(user => {
          this.currentUser = user;
      });
  }

}
