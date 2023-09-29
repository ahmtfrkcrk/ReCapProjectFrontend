import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; // ActivatedRouteSnapshot ve RouterStateSnapshot'ı içeri aktarıyoruz
import { ToastrService } from 'ngx-toastr'; 
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { // route ve state parametrelerini açıkça ActivatedRouteSnapshot ve RouterStateSnapshot olarak belirtiyoruz
    if (this.authService.isAuthenticated()) { // Eğer kullanıcı kimlik doğrulamasını geçmişse
      return true; // Gezinmeye izin veriyoruz
    } else {
      this.router.navigate(['login']); // Aksi takdirde 'login' yoluna yönlendiriyoruz
      this.toastrService.info('Sisteme giriş yapmalısınız'); // Toastr ile kullanıcıya bilgi mesajı gösteriyoruz
      return false; // Gezinmeye izin vermiyoruz
    }
  }
}
