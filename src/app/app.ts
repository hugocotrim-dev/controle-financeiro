import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { BottomNavComponent } from './shared/components/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BottomNavComponent],
  template: `
    @if (authService.loading()) {
      <div class="global-loading">
        <div class="loading-logo">
          <span class="material-icons-round">account_balance_wallet</span>
        </div>
        <div class="loading-spinner"></div>
      </div>
    } @else {
      @if (authService.isLoggedIn()) {
        <app-bottom-nav />
      }
      <main class="app-container" [class.has-sidebar]="authService.isLoggedIn()">
        <router-outlet />
      </main>
    }
  `,
  styles: [`
    .global-loading {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      background: #000;
    }

    .loading-logo {
      width: 80px;
      height: 80px;
      border-radius: 22px;
      background: linear-gradient(135deg, #a855f7, #7c3aed);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 40px rgba(168, 85, 247, 0.4);
      animation: pulse-glow 2s infinite;

      .material-icons-round {
        font-size: 40px;
        color: white;
      }
    }

    .loading-spinner {
      width: 32px;
      height: 32px;
      border: 3px solid rgba(168, 85, 247, 0.2);
      border-top-color: #a855f7;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {
    // Apply saved theme on startup
    const saved = localStorage.getItem('ff-theme');
    if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
  }
}
