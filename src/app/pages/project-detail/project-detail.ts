import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  template: `
    <div class="container">
      <a mat-button routerLink="/projects" class="back-btn">
        <mat-icon aria-hidden="true">arrow_back</mat-icon>
        RETURN_TO_MATRIX
      </a>
      <mat-card class="detail-frame" appearance="outlined">
        <mat-card-content>
          <h1>PROJECT_ID: {{ id | uppercase }}</h1>
          <div class="scanner-line"></div>
          <div class="content-block">
            <p class="status">SYSTEM LEVEL ACCESS GRANTED</p>
            <p class="desc">Constructing active environment nodes for the target interface module. All endpoints verified under systemic deployment matrices.</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      padding: clamp(1rem, 4vw, 4rem) clamp(1rem, 4vw, 3rem);
      min-height: 80vh;
      color: white;
    }
    .back-btn {
      color: #00f3ff;
      font-weight: 700;
      letter-spacing: 0.03rem;
      margin-left: -0.6rem;
    }
    .back-btn mat-icon {
      margin-right: 0.35rem;
    }
    .detail-frame {
      margin-top: 2rem;
      background: rgba(16, 18, 43, 0.72);
      border: 1px solid #00f3ff;
      overflow: hidden;
      box-shadow: inset 0 0 18px rgba(0, 243, 255, 0.08);
    }
    mat-card-content {
      padding: clamp(1.25rem, 5vw, 3rem);
    }
    h1 {
      font-size: clamp(1.6rem, 7vw, 2.5rem);
      line-height: 1.15;
      letter-spacing: 0.1rem;
      color: #fff;
      margin: 0;
      overflow-wrap: anywhere;
    }
    .scanner-line {
      height: 2px;
      background: linear-gradient(90deg, transparent, #00f3ff, transparent);
      margin: 1.5rem 0;
      animation: scan 3s linear infinite;
    }
    .status {
      color: #39ff14;
      font-family: monospace;
      font-size: clamp(0.85rem, 3vw, 1rem);
      margin: 0 0 0.75rem;
    }
    .desc {
      color: #a4b3c6;
      line-height: 1.8;
      max-width: 800px;
      margin: 0;
    }
    @keyframes scan {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
