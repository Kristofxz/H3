import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.scss']
})
export class AdminDataComponent implements OnInit {
  viewMode: 'users' | 'stays' = 'users'; // Alapértelmezett nézet: Felhasználók
  users: any[] = []; // Felhasználók listája
  stays: any[] = []; // Szállások listája

  constructor(
    private userService: UserService,
    private stayService: StayService
  ) {}

  async ngOnInit() {
    try {
      // Felhasználók lekérdezése
      this.users = await this.userService.getAllUsers();
      console.log('Felhasználók sikeresen betöltve:', this.users);
  
      // Szállások lekérdezése
      this.stays = await this.stayService.getAllStays();
      console.log('Szállások sikeresen betöltve:', this.stays);
    } catch (err) {
      console.error('Hiba az adatok betöltése során:', err);
    }
  }
  

}
