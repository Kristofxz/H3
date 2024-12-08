import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'header-menu-modal',
  templateUrl: './header-menu-modal.component.html',
  styleUrls: ['./header-menu-modal.component.scss'],
})
export class HeaderMenuModalComponent implements OnInit {
  @Output() onToggleHeaderMenuModal = new EventEmitter();
  @Output() toggleLanguageModal = new EventEmitter();
  @Input() isOpenLanguageModal!: boolean;
  @Input() isOpenFooter!: boolean;

  isAdmin = false; // Admin státusz
  user: User | null = null;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.user = user;
      if (user) {
        this.isAdmin = user.isAdmin === true; // Admin státusz ellenőrzése
        console.log('Admin státusz:', this.isAdmin); // Debugging
      } else {
        this.isAdmin = false;
        console.log('Nincs bejelentkezett felhasználó');
      }
    });
  }

  isLoggedInUser() {
    return this.user !== null;
  }

  toggleMenuModal() {
    this.onToggleHeaderMenuModal.emit();
  }

  onLogout() {
    this.userService.logout();
    this.toggleMenuModal();
  }

  navigateToAdminData() {
    this.router.navigate(['/admin-data']); // Közvetlen navigálás az admin-data route-ra
    this.toggleMenuModal(); // Menü bezárása
  }
}
