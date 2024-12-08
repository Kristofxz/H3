import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private stayService: StayService,
    private router: Router // Router injektálása
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

  // Navigáció a főoldalra
  navigateToHome() {
    this.router.navigate(['/']);
  }

  // Felhasználó törlése
  async deleteUser(userId: string) {
    try {
      await this.userService.deleteUser(userId);
      this.users = this.users.filter(user => user._id !== userId); // Lista frissítése
      console.log('Felhasználó törölve: ${userId}');
      alert('Felhasználó sikeresen törölve.');
    } catch (err) {
      console.error('Hiba a felhasználó törlése során: ${userId}', err);
      alert('Hiba történt a törlés során.');
    }
  }
}