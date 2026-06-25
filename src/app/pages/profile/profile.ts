import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
  skills = [
    'Blockchain',
    'Node JS',
    'Angular',
    'React JS',
    'TypeScript',
    'Go Lang',
    'Hyperledger Fabric',
    'PostgreSQL'
  ];

  timeline = [
    {
      company: 'Accenture, Inc. // Associate Manager',
      date: '2022 - Present',
      details: 'Leads development engineering cohorts delivering enterprise systems. Formulates solutions architecture, conducts code evaluation matrix operations, and secures baseline deployment standards.'
    },
    {
      company: 'Collabera Technologies // Full Stack Developer',
      date: '2021 - 2022',
      details: 'Optimized flight-booking UI subroutines for leading Philippine aviation sectors, securing 50% fewer operational runtime bugs via integrated testing frameworks.'
    },
    {
      company: 'BWallet Philippines Inc // Chief Technology Officer',
      date: '2020 - 2021',
      details: 'Directed core distributed ledger implementation schemas. Built token models, state-smart contracts, and client node web architectures via NodeJS and Angular systems.'
    },
    {
      company: 'Clark Outsourcing // Blockchain Project Manager',
      date: '2019 – 2020',
      details: 'Developed Hyperledger Fabric applications and REST APIs, streamlining blockchain-based system integration.'
    },
    {
      company: 'Quantum Crowd, Inc // Software Engineer',
      date: '2019',
      details: 'Led development of Gold Gram Coin blockchain system. Provided technical solutions and production support.'
    },
    {
      company: 'Mercantile Venture Partners Asia Pacific // Software Engineer',
      date: '2018 – 2019',
      details: 'Built Ethereum-based applications for token transfers and account management. Designed and tested blockchain web apps.'
    },
    {
      company: 'IBM Solutions Delivery, Inc // Application Developer',
      date: '2014 – 2018',
      details: 'Delivered multiple blockchain and web projects using Ethereum, Hyperledger, NodeJS, Angular, and Go Lang.'
    },
    {
      company: 'Dai-Chi Management Pte Ltd // IT Application Programmer',
      date: '2011 – 2014',
      details: 'Developed and maintained applications in Lotus Notes, Lotus Domino, VB.Net, SQL, and MS Access. Managed client projects across Singapore and Malaysia.'
    },
    {
      company: 'Banco De Oro Unibank // Junior Assistant Manager (IT)',
      date: '2010 – 2011',
      details: 'Maintained Lotus Notes systems, Windows servers, and internal applications. Implemented DFS, Hyper-V, DNS, and Active Directory.'
    },
    {
      company: 'Softweb Consulting, Inc // Lotus Notes Consultant',
      date: '2008 – 2010',
      details: 'Developed applications for government and private agencies using Lotus Notes and JavaScript. Provided technical support and documentation.'
    }
  ];
}
