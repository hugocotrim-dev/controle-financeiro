import { Component, signal, OnInit, OnDestroy } from '@angular/core';
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
    <!-- Backdrop Overlay (visible only on mobile when open) -->
    <div class="sidebar-backdrop" [class.open]="isOpen()" (click)="toggleMenu()"></div>

    <!-- Sidebar Container -->
    <aside class="sidebar-container" [class.open]="isOpen()">
      <div class="sidebar-header">
        <span class="logo-text">FinanceFlow</span>
      </div>

      <nav class="sidebar-menu">
        @for (item of navItems; track item.route) {
          <a
            [routerLink]="item.route"
            routerLinkActive="active"
            class="sidebar-item"
            (click)="onNavClick()"
          >
            <span class="material-icons-round item-icon">{{ item.icon }}</span>
            <span class="item-label">{{ item.label }}</span>
          </a>
        }
      </nav>
    </aside>

    <!-- Floating Toggle Button (Always visible at top-left) -->
    <button 
      class="sidebar-toggle" 
      [class.open]="isOpen()" 
      (click)="toggleMenu()"
      aria-label="Toggle Menu"
    >
      <span class="material-icons-round">menu</span>
    </button>
  `,
  styles: [`
    .sidebar-toggle {
      position: fixed;
      top: env(safe-area-inset-top, 12px);
      left: 12px;
      z-index: 110;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a855f7, #7c3aed);
      border: none;
      color: white;
      box-shadow: 0 4px 16px rgba(168, 85, 247, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      .material-icons-round {
        font-size: 24px;
      }

      &:hover {
        transform: scale(1.05);
      }
      
      &.open {
        background: #1f2937;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      }
    }

    .sidebar-container {
      position: fixed;
      top: 0;
      bottom: 0;
      left: -260px;
      width: 260px;
      background: rgba(15, 15, 15, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-right: 1px solid rgba(255,255,255,0.08);
      z-index: 100;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 10px 0 40px rgba(0,0,0,0.5);

      &.open {
        transform: translateX(260px);
      }
    }

    .sidebar-header {
      height: 68px;
      display: flex;
      align-items: center;
      padding: 0 1rem 0 4.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      
      .logo-text {
        font-size: 1.125rem;
        font-weight: 800;
        background: linear-gradient(135deg, #c084fc, #a855f7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -0.02em;
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
      font-size: 22px;
      color: var(--color-text-muted);
      transition: color 200ms ease;
    }

    .item-label {
      font-size: 0.9375rem;
      font-weight: 600;
    }

    .sidebar-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      z-index: 90;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;

      &.open {
        opacity: 1;
        pointer-events: auto;
      }
    }

    @media (min-width: 768px) {
      .sidebar-backdrop {
        display: none;
      }
    }
  `]
})
export class BottomNavComponent implements OnInit, OnDestroy {
  isOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Início', icon: 'home', route: '/dashboard' },
    { label: 'Gastos', icon: 'payments', route: '/expenses' },
    { label: 'Receitas', icon: 'trending_up', route: '/income' },
    { label: 'Metas', icon: 'flag', route: '/goals' },
    { label: 'Histórico', icon: 'history', route: '/history' },
    { label: 'Configurações', icon: 'settings', route: '/settings' },
  ];

  ngOnInit() {
    const savedOpen = localStorage.getItem('ff-sidebar-open') !== 'false';
    this.isOpen.set(savedOpen);
    this.updateBodyClass(savedOpen);
  }

  ngOnDestroy() {
    document.body.classList.remove('sidebar-open');
  }

  toggleMenu() {
    const newState = !this.isOpen();
    this.isOpen.set(newState);
    localStorage.setItem('ff-sidebar-open', String(newState));
    this.updateBodyClass(newState);
  }

  private updateBodyClass(open: boolean) {
    if (open) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }

  onNavClick() {
    // Only auto-close on mobile/tablet (width < 768px)
    if (window.innerWidth < 768) {
      this.isOpen.set(false);
      localStorage.setItem('ff-sidebar-open', 'false');
      this.updateBodyClass(false);
    }
  }
}
