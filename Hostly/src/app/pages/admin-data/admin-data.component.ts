import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.scss']
})
export class AdminDataComponent implements OnInit {
  viewMode: 'users' | 'stays' = 'users'; // Default view: Users
  users: any[] = []; // List of users
  stays: any[] = []; // List of stays

  constructor(
    private userService: UserService,
    private stayService: StayService
  ) {}

  async ngOnInit() {
    try {
      // Fetch users
      this.users = await this.userService.getAllUsers();
      console.log('Users loaded:', this.users);

      // Fetch stays
      this.stays = await this.stayService.getAllStays();
      console.log('Stays loaded:', this.stays);
    } catch (err) {
      console.error('Error loading data:', err);
    }
  }
}
