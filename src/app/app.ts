import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="matrix-bg">
      <app-header></app-header>
      <main class="content-view">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .matrix-bg {
      background-color: var(--bg);
      background-image:
        radial-gradient(rgba(0, 243, 255, 0.05) 1px, transparent 0),
        radial-gradient(rgba(255, 0, 127, 0.03) 1px, transparent 0);
      background-size: 40px 40px;
      background-position: 0 0, 20px 20px;
      min-height: 100vh;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
    }
    .content-view {
      flex: 1;
      width: min(100%, 1440px);
      margin: 0 auto;
    }
  `]
})
export class AppRootComponent {}
