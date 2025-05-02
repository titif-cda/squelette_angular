import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  ngOnInit() {
    // Fonction de détection du défilement pour l'animation des services
    window.addEventListener('scroll', this.handleScroll);
  }

  // Animation des éléments lors du défilement
  handleScroll() {
    const services = document.querySelector('.services');
    const servicesPosition = services?.getBoundingClientRect().top || 0;
    
    if (servicesPosition <= window.innerHeight / 1.2) {
      services?.classList.add('animate-services');
    }
  }
}
