import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Dropdown Menu Overlay -->
    @if (isOpen()) {
      <div class="menu-overlay" (click)="isOpen.set(false)"></div>
    }

    <!-- Dropdown Menu Container -->
    <div class="dropdown-container">
      @if (isOpen()) {
        <nav class="dropdown-menu animate-slide-up">
          @for (item of navItems; track item.route) {
            <a
              [routerLink]="item.route"
              routerLinkActive="active"
              class="dropdown-item"
              (click)="isOpen.set(false)"
            >
              <span class="material-icons-round item-icon">{{ item.icon }}</span>
              <span class="item-label">{{ item.label }}</span>
            </a>
          }
        </nav>
      }

      <!-- Floating Menu Button -->
      <button 
        class="menu-button" 
        [class.open]="isOpen()" 
        (click)="isOpen.set(!isOpen())"
        aria-label="Menu"
      >
        <span class="material-icons-round">
          {{ isOpen() ? 'close' : 'menu' }}
        </span>
      </button>
    </div>
  `,
  styles: [`
    .menu-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
      z-index: 90;
    }

    .dropdown-container {
      position: fixed;
      bottom: env(safe-area-inset-bottom, 20px);
      right: 20px;
      z-index: 100;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 12px;
    }

    .menu-button {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a855f7, #7c3aed);
      border: none;
      color: white;
      box-shadow: 0 8px 32px rgba(168, 85, 247, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      .material-icons-round {
        font-size: 28px;
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: scale(1.05);
      }
      
      &.open {
        background: #1f2937;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        .material-icons-round { transform: rotate(90deg); }
      }
    }

    .dropdown-menu {
      background: rgba(15, 15, 15, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      min-width: 200px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.5);
      transform-origin: bottom right;
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 0.875rem 1rem;
      border-radius: 12px;
      text-decoration: none;
      color: var(--color-text-secondary);
      transition: all 200ms ease;

      &:hover {
        background: rgba(255,255,255,0.05);
        color: var(--color-text-primary);
      }

      &.active {
        background: rgba(168, 85, 247, 0.15);
        color: var(--color-accent-light);
        
        .item-icon { color: var(--color-accent-light); }
      }
    }

    .item-icon {
      font-size: 20px;
      color: var(--color-text-muted);
      transition: color 200ms ease;
    }

    .item-label {
      font-size: 0.9375rem;
      font-weight: 500;
    }

    .animate-slide-up {
      animation: slideUpFade 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes slideUpFade {
      from {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `]
})
export class BottomNavComponent {
  isOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Início', icon: 'home', route: '/dashboard' },
    { label: 'Gastos', icon: 'payments', route: '/expenses' },
    { label: 'Receitas', icon: 'trending_up', route: '/income' },
    { label: 'Metas', icon: 'flag', route: '/goals' },
    { label: 'Histórico', icon: 'history', route: '/history' },
    { label: 'Configurações', icon: 'settings', route: '/settings' },
  ];
}
