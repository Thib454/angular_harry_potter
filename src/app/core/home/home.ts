import { Component, signal, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { style, animate, keyframes, trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  animations: [
    trigger('starsDrift', [
      transition('start => end', [
        animate('9000ms linear', keyframes([
          style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
          style({ transform: 'translate3d(-18px, 10px, 0)', offset: 0.5 }),
          style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
        ]))
      ]),
      transition('end => start', [
        animate('9000ms linear', keyframes([
          style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
          style({ transform: 'translate3d(-18px, 10px, 0)', offset: 0.5 }),
          style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
        ]))
      ]),
    ]),
    trigger('fogFloat', [
      transition('start => end', [
        animate('14000ms ease-in-out', keyframes([
          style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
          style({ transform: 'translate3d(18px, -10px, 0)', offset: 0.5 }),
          style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
        ]))
      ]),
      transition('end => start', [
        animate('14000ms ease-in-out', keyframes([
          style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
          style({ transform: 'translate3d(18px, -10px, 0)', offset: 0.5 }),
          style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
        ]))
      ]),
    ]),
  ],
})
export class Home {
  starsState = signal<'start' | 'end'>('start');
  fogState = signal<'start' | 'end'>('start');
  searchQuery = signal('');
  quotes = [
    "Les mots sont notre source de magie la plus inépuisable.",
    "Le bonheur peut être trouvé même dans les moments les plus sombres, si on n’oublie pas de tourner la lumière.",
    "Ce sont nos choix, Harry, qui montrent ce que nous sommes, bien plus que nos capacités.",
    "La peur d’un nom n’augmente que la peur de la chose elle-même.",
  ];
  currentQuote = signal(this.quotes[0]);

  cards = signal([
    { title: "Choisir ta bannière", route: "/houses", icon: "🏰", tag: "Maisons", color: "gold", desc: "Gryffondor, Serpentard, Poufsouffle, Serdaigle." },
    { title: "Explorer le casting", route: "/characters", icon: "🧙", tag: "Personnages", color: "emerald", desc: "Cherche, filtre, ouvre une fiche détaillée." },
    { title: "Apprendre des sorts", route: "/spells", icon: "✨", tag: "Sortilèges", color: "violet", desc: "Du plus simple au plus interdit." },
    { title: "Parchemin vivant", route: "/mode", icon: "📜", tag: "Mode", color: "ink", desc: "Animations douces, contrastes premium." },
  ]);

  filteredCards = signal<any[]>([]);

  constructor() {
    // Change l'état des animations pour déclencher le cycle
    setInterval(() => {
      this.starsState.set(this.starsState() === 'start' ? 'end' : 'start');
    }, 9000);

    setInterval(() => {
      this.fogState.set(this.fogState() === 'start' ? 'end' : 'start');
    }, 14000);

    // Change la citation toutes les 10 secondes
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.currentQuote.set(this.quotes[randomIndex]);
    }, 10000);

    // Filtrer les cartes en fonction de la recherche
    effect(() => {
      const query = this.searchQuery().toLowerCase();
      if (!query) {
        this.filteredCards.set(this.cards());
      } else {
        this.filteredCards.set(
          this.cards().filter(card =>
            card.title.toLowerCase().includes(query) ||
            card.tag.toLowerCase().includes(query) ||
            card.desc.toLowerCase().includes(query)
          )
        );
      }
    });
  }
}
