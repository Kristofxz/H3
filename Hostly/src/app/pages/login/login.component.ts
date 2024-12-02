import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UploadImgService } from 'src/app/services/upload-img.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('container') container: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private uploadImgService: UploadImgService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.formSignup = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  faUser = faUser;
  facebook = faFacebookF;
  twitter = faTwitter;
  google = faGoogle;
  formSignup!: FormGroup;
  formLogin!: FormGroup;
  user!: User;
  subscription!: Subscription;
  isSignup: boolean = false;
  imgData = {
    imgUrl: '',
    height: 500,
    width: 500,
  };

  ngOnInit(): void {
    this.formSignup.patchValue(this.userService.getEmptyUser());
    this.formLogin.patchValue(this.userService.getEmptyUser());
  }

  /**
   * Bejelentkezési metódus
   */
  async onSubmit(type: string) {
    if (type === 'login') {
      const coords = this.formLogin.value;
  
      try {
        const loggedInUser = await this.userService.login(coords);
  
        this.user = loggedInUser;
  
        if (loggedInUser.isAdmin) {
          this.router.navigateByUrl('/').then(() => {
            this.resetLoginState(); // Állapot visszaállítása
          });
        } else {
          this.router.navigateByUrl('/').then(() => {
            this.resetLoginState();
          });
        }
      } catch (err) {
        this.snackBar.open('Felhasználónév vagy jelszó helytelen', 'Vissza', {
          duration: 3000,
        });
        console.error('Bejelentkezési hiba:', err);
      }
    } else if (type === 'signup') {
      const user = this.formSignup.value;
  
      try {
        const newUser = await this.userService.signup(user);
  
        this.snackBar.open('Sikeres regisztráció!', 'OK', { duration: 3000 });
        this.resetLoginState(); // Állapot visszaállítása
      } catch (err) {
        this.snackBar.open('Hiba a regisztráció során', 'Vissza', {
          duration: 3000,
        });
        console.error('Regisztrációs hiba:', err);
      }
    }
  }
  
  
  private resetLoginState() {
    this.formLogin.reset(); // Form ürítése
    this.isSignup = false; // Nézet visszaállítása
  }
  
  

  /**
   * Kép feltöltése
   */
  async uploadImg(ev: Event) {
    const { secure_url, height, width } = await this.uploadImgService.uploadImg(
      ev
    );
    this.imgData = { imgUrl: secure_url, width, height };
  }

  /**
   * Regisztrációs / bejelentkezési nézet váltása
   */
  onToggleSign() {
    this.isSignup = !this.isSignup;
  }
}
