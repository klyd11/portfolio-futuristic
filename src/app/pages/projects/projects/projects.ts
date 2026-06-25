import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  projects: ProjectItem[] = [
    {
      id: 'bwallet',
      title: 'BWallet // Decentralized Finance Platform',
      description:
        'Enterprise-grade custom web interface leveraging Hyperledger Fabric and Ethereum frameworks.',
      image:
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80',
      tech: ['Ethereum', 'NodeJS', 'Angular', 'Web3.js', 'Hyperledger Fabric', 'PostgreSQL', 'Solidity', 'AWS Cloud Services', 'Azure Cloud Services'],
    },
    {
      id: 'goldgram',
      title: 'Gold Gram Coin // Blockchain Asset Tracking',
      description:
        'Decentralized distributed asset tracking layout for immutable physical gold backing ledgers.',
      image:
        'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80',
      tech: ['Blockchain', 'Smart Contracts', 'NodeJS', 'Angular', 'Web3.js', 'Hyperledger Fabric', 'PostgreSQL'],
    },
    {
      id: 'flight-booking',
      title: 'Aviation Portal Subsystems',
      description:
        'High-availability customer booking mechanics deployed across client-side structures optimizing load cycles.',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
      tech: ['JavaScript', 'JQuery', 'UI Optimization', 'Angular'],
    },
    {
      id: 'BlockClaim',
      title: 'BlockClaim // Asteroid Asset Tokenization',
      description:
        'This is a web application that able to claim asteroid as blockclaim and use the credit card as payment in claiming asteroid.',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      tech: ['Blockchain', 'NodeJS', 'Angular', 'Web3.js', 'Hyperledger Fabric', 'PostgreSQL', 'Solidity', 'AWS Cloud Services'],
    },
  ];
}
