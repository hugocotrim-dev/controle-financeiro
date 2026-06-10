import { Component } from '@angular/core';
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
    <!-- Sidebar / Bottom Nav Container -->
    <aside class="sidebar-container">
      <div class="sidebar-header">
        <span class="logo-text">FinanceFlow</span>
      </div>

      <nav class="sidebar-menu">
        @for (item of navItems; track item.route) {
          <a
            [routerLink]="item.route"
            routerLinkActive="active"
            class="sidebar-item"
          >
            <span class="material-icons-round item-icon">{{ item.icon }}</span>
            <span class="item-label">{{ item.label }}</span>
          </a>
        }
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar-container {
      position: fixed;
      background: rgba(15, 15, 15, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      z-index: 100;
      display: flex;
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      
      .logo-text {
        font-weight: 800;
        background: linear-gradient(135deg, #c084fc, #a855f7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -0.02em;
      }
    }

    .sidebar-item {
      display: flex;
      align-items: center;
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
      color: var(--color-text-muted);
      transition: color 200ms ease;
    }

    .item-label {
      font-weight: 600;
    }

    /* Desktop Layout (Fixed Left Sidebar) */
    @media (min-width: 768px) {
      .sidebar-container {
        top: 0;
        bottom: 0;
        left: 0;
        width: 260px;
        flex-direction: column;
        border-right: 1px solid rgba(255,255,255,0.08);
      }

      .sidebar-header {
        height: 68px;
        padding: 0 1rem 0 1.5rem;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        
        .logo-text {
          font-size: 1.25rem;
        }
      }

      .sidebar-menu {
        padding: 1rem 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
        flex: 1;
        overflow-y: auto;
      }

      .sidebar-item {
        gap: 12px;
        padding: 0.875rem 1rem;
        border-radius: 12px;
      }

      .item-icon {
        font-size: 22px;
      }

      .item-label {
        font-size: 0.9375rem;
      }
    }

    /* Mobile Layout (Bottom Navigation Bar) */
    @media (max-width: 767px) {
      .sidebar-container {
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: var(--bottom-nav-height, 72px);
        flex-direction: row;
        border-top: 1px solid rgba(255,255,255,0.08);
        padding-bottom: env(safe-area-inset-bottom, 0px);
      }

      .sidebar-header {
        display: none; /* Hide logo on mobile nav */
      }

      .sidebar-menu {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 0 0.5rem;
        gap: 0;
      }

      .sidebar-item {
        flex-direction: column;
        gap: 4px;
        padding: 0.5rem 0.25rem;
        border-radius: 8px;
        flex: 1;
        justify-content: center;

        &.active {
          background: transparent;
        }
        
        &.active .item-label {
          color: var(--color-accent-light);
        }
      }

      .item-icon {
        font-size: 24px;
      }

      .item-label {
        font-size: 0.7rem;
      }
    }
  `]
})
export class BottomNavComponent {
  navItems: NavItem[] = [
    { label: 'Início', icon: 'home', route: '/dashboard' },
    { label: 'Gastos', icon: 'payments', route: '/expenses' },
    { label: 'Receitas', icon: 'trending_up', route: '/income' },
    { label: 'Metas', icon: 'flag', route: '/goals' },
    { label: 'Extrato', icon: 'receipt_long', route: '/history' },
    { label: 'Opções', icon: 'settings', route: '/settings' },
  ];
}
