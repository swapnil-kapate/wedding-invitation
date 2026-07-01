import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  opening = false;
  invitationOpened = false;

  weddingDate = new Date('2026-07-19T11:29:00').getTime();

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  ngOnInit(): void {

    this.updateCountdown();

    setInterval(() => {

      this.updateCountdown();
      this.cdr.detectChanges();

    }, 1000);

  }

  openInvitation() {

  if (this.opening) return;

  this.opening = true;

  setTimeout(() => {

    this.invitationOpened = true;
    this.cdr.detectChanges();

  }, 1000);

}

  updateCountdown(): void {

    const now = new Date().getTime();

    const diff = this.weddingDate - now;

    if (diff < 0) {

    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;

    return;
  }


    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));

    this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    this.seconds = Math.floor((diff % (1000 * 60)) / 1000);

  }

}