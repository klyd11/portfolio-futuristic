import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <footer class="neon-footer">
      <div class="status-indicator">
        <span class="pulse-dot"></span> SYSTEM_STATUS: ONLINE
      </div>
      <p>&copy; 2026 JEFFREY GUTIERREZ // SENIOR SOFTWARE ENGINEER</p>
      <div class="encryption-tag">
        <mat-icon aria-hidden="true">encrypted</mat-icon>
        <span>ENC_MODE: QUANTUM_256</span>
      </div>
    </footer>
  `,
  styles: [`
    .neon-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1rem 3rem;
      background: #060713;
      border-top: 1px solid rgba(0, 243, 255, 0.2);
      color: #5f6c7d;
      font-size: 0.8rem;
      letter-spacing: 1px;
    }
    .status-indicator {
      display: flex;
      align-items: center;
      color: #39ff14;
      text-shadow: 0 0 5px rgba(57, 255, 20, 0.5);
      white-space: nowrap;
    }
    p {
      margin: 0;
      text-align: center;
    }
    .encryption-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      white-space: nowrap;
    }
    .encryption-tag mat-icon {
      width: 1rem;
      height: 1rem;
      font-size: 1rem;
    }
    .pulse-dot {
      width: 8px;
      height: 8px;
      background-color: #39ff14;
      border-radius: 50%;
      margin-right: 8px;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(0.9); opacity: 0.6; }
      50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 10px #39ff14; }
      100% { transform: scale(0.9); opacity: 0.6; }
    }
    @media (max-width: 760px) {
      .neon-footer {
        flex-direction: column;
        padding: 1rem;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}
