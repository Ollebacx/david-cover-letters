import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  textList: Array<object>
  constructor() {
    this.textList = [
      {
        title: '¿Buscáis problemas?',
        text: 'Me gustan los problemas.\nMe gustan cuando aparecen de repente, así, sin avisar.\nMe gustan porque puedo rastrearlos, seguir las pistas hasta encontrar dónde se esconden y contemplarlos, a veces durante horas.\n\nLos analizo, los zarandeo...los pongo del revés y les pregunto constantemente: "oye, ¿y si...?"\nPodría pasarme un día entero dividiéndolos en trocitos, simplemente para volverlos a juntar.\n\nMe gusta hablar sobre ellos(¿a quién no?), escuchar sus historias, sus victorias y sus derrotas para comprenderlos mejor, preguntar a cualquiera que pase: "¡ey!¿conoces este problema?".\n\nMe gustan sus diferentes formas, tamaños y colores; especialmente con sabor a tostadas y olor a café.\nPero lo que más me gusta de ellos, es cuando se marchan.\nNo porque deje de tener un problema...sino por todo lo que he ganado mientras lo tenía.',
        bgColor: '#F4E2E6',
        textColor:'#9E0D0D'
      },
      {
        title: '¿Buscáis problemas?',
        text: 'Me gustan los problemas.\nMe gustan cuando aparecen de repente, así, sin avisar.\nMe gustan porque puedo rastrearlos, seguir las pistas hasta encontrar dónde se esconden y contemplarlos, a veces durante horas.\n\nLos analizo, los zarandeo...los pongo del revés y les pregunto constantemente: "oye, ¿y si...?"\nPodría pasarme un día entero dividiéndolos en trocitos, simplemente para volverlos a juntar.\n\nMe gusta hablar sobre ellos(¿a quién no?), escuchar sus historias, sus victorias y sus derrotas para comprenderlos mejor, preguntar a cualquiera que pase: "¡ey!¿conoces este problema?".\n\nMe gustan sus diferentes formas, tamaños y colores; especialmente con sabor a tostadas y olor a café.\nPero lo que más me gusta de ellos, es cuando se marchan.\nNo porque deje de tener un problema...sino por todo lo que he ganado mientras lo tenía.'
      }
    ]
  }

  ngOnInit(): void {
  }

}
