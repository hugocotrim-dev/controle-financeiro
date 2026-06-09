import { Component, computed } from '@angular/core';
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
    <nav class="bottom-nav">
      @for (item of navItems; track item.route) {
        <a
          [routerLink]="item.route"
          routerLinkActive="active"
          class="nav-item"
          [attr.aria-label]="item.label"
        >
          <span class="material-icons-round nav-icon">{{ item.icon }}</span>
          <span class="nav-label">{{ item.label }}</span>
        </a>
      }
    </nav>
  `,
  styles: [`
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 480px;
      height: 72px;
      background: rgba(10, 10, 10, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-top: 1px solid rgba(255,255,255,0.06);
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 0.5rem;
      z-index: 100;
      padding-bottom: env(safe-area-inset-bottom, 0);
    }

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      padding: 0.5rem 1rem;
      border-radius: 12px;
      text-decoration: none;
      color: var(--color-text-muted);
      transition: all 200ms ease;
      position: relative;
      flex: 1;
      min-width: 0;

      &::before {
        content: '';
        position: absolute;
        top: 6px;
        width: 32px;
        height: 32px;
        border-radius: 10px;
        background: transparent;
        transition: all 200ms ease;
      }

      &:hover { color: var(--color-text-secondary); }

      &.active {
        color: var(--color-accent-light);

        &::before { background: rgba(168, 85, 247, 0.15); }
        .nav-icon { transform: translateY(-1px); }
      }
    }

    .nav-icon {
      font-size: 22px;
      position: relative;
      z-index: 1;
      transition: transform 200ms ease;
    }

    .nav-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.02em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 60px;
      text-align: center;
    }
  `]
})
export class BottomNavComponent {
  navItems: NavItem[] = [
    { label: 'Início', icon: 'home', route: '/dashboard' },
    { label: 'Gastos', icon: 'payments', route: '/expenses' },
    { label: 'Receitas', icon: 'trending_up', route: '/income' },
    { label: 'Metas', icon: 'flag', route: '/goals' },
    { label: 'Config', icon: 'settings', route: '/settings' },
  ];
}
