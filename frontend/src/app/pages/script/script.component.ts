import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SectionInfo } from '../../classes/section-info'
// import { map, mapTo, filter, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.scss']
})
export class ScriptComponent implements OnInit {
  textList: Array<SectionInfo>
  id: string
  url: string
  user: string
  scriptPosition: number

  constructor(public router: Router, private route: ActivatedRoute) {
    // this.url = route.snapshot.url.join('');
    // this.user = route.snapshot.data.user;
    router.events.subscribe(val => {
      this.id = route.snapshot.params.id;
      this.scriptPosition = parseInt(this.id)-1
    });
    this.textList = [
      {
        title: '¿BUSCÁIS PROBLEMAS?',
        text: 'Me gustan los problemas.\nMe gustan cuando aparecen de repente, así, sin avisar.\nMe gustan porque puedo rastrearlos, seguir las pistas hasta encontrar dónde se esconden y contemplarlos, a veces durante horas.\n\nLos analizo, los zarandeo...los pongo del revés y les pregunto constantemente: "oye, ¿y si...?"\nPodría pasarme un día entero dividiéndolos en trocitos, simplemente para volverlos a juntar.\n\nMe gusta hablar sobre ellos(¿a quién no?), escuchar sus historias, sus victorias y sus derrotas para comprenderlos mejor, preguntar a cualquiera que pase: "¡ey!¿conoces este problema?".\n\nMe gustan sus diferentes formas, tamaños y colores; especialmente con sabor a tostadas y olor a café.\nPero lo que más me gusta de ellos, es cuando se marchan.\nNo porque deje de tener un problema...sino por todo lo que he ganado mientras lo tenía.',
        bgColor: '#F4E2E6',
        textColor: '#9E0D0D',
        date: '06 de Junio de 2020'
      },
      {
        title: `I'M IN LOVVE`,
        text: '“¿Te enamoraste? La cagaste.”\nSabias palabras de una madre a la que razón no le faltaba.\n\nPorque cuando estás enamorado se te cierra el estómago con cremallera,\ncuando estás enamorado los números en el reloj se desordenan,\ncuando estás enamorado no importa dónde mires, solo la ves a ella…\n\nVives en esa gran esperanza demoledora que es el futuro, imaginando.Imaginando lo jodidamente increíble que será todo.\nDespertar con sus buenos días… Reír las penas y llorar las alegrías...\nOír sus besos como la mejor de las melodías...\nLlenar de niños las habitaciones vacías...\nYo lo quiero todo.\n\nParece una mala broma del destino que Cupido malgastase todas sus flechas en un loco creativo que no sabe qué hora es.\nQuizá sea la hora de conocernos y quizá la mejor manera sea dándonos dos besos: https://bellaco.portfoliobox.net/\n\nQue tengáis un buen día lleno de lovve.\n\nEste mensaje iba dirigido originalmente a careers@lola-mullenlowe.com ',
        bgColor: '#EBA68D',
        textColor: '#1D5CAB',
        date: '07 de Mayo de 2019'
      },
      {
        title: `CUÉNTANOS ALGO SOBRE TI`,
        text: 'Muy buenas, mi nombre es David Cabello Oquendo y soy un unicornio.\nBueno, o eso es lo que me han dicho algunas personas del sector tecnológico durante 2020.\nLa verdad es que no sabía muy bien lo que significaba cuando lo escuché y buscando en Google encontré que el concepto "unicornio" se aplica a personas que saben diseñar y programar.\n\nPor un lado, sé diseñar porque durante la carrera de Publicidad y Relaciones Públicas mis compañeros diseñadores presentaban unas ideas de campaña que eran la envidia de toda la clase, así que pensé que podría ser una buena herramienta complementaria y decidí que mi siguiente paso sería formarme como diseñador.\n\nPor otro lado, aunque efectivamente el diseño me descubrió y guió hacia un camino nuevo orientado a especializarme en creatividad artística publicitaria, sé programar porque en un impás de mi vida pre-covid Reboot Academy me dió la oportunidad de formar parte de su último curso fullstack concediéndome una de sus becas 100%.\n\nY eso lo cambió todo.\nMe abrieron una puerta hacia lo desconocido. Como si de un garaje lleno de miles de cajas se tratara, me enseñaron a desembalarlas con cuidado y fui destapando artilugios y cachibaches que me servirían para convertirme en desarrollador.\nGracias a esto pude participar y completar el curso de Angular 9 impartido en Escuela de Organización Industrial, que junto a los cursos de "MongoDB para desarrolladores en Javascript" y "Data modeling" impartidos en MongoDB University, son mis proyectos de formación más recientes.\n\nSoy consciente de que me quedan muchas cajas por abrir, otras muchas por trastear a fondo, incluso hay cajas que mi vista aún no alcanza a ver siquiera...y no estoy seguro de si soy un unicornio o un ornitorrinco, pero tengo claro que trabajar con ustedes será un acierto para seguir aprendiendo y crecer profesionalmente.pensé que podría ser una buena herramienta complementaria y decidí que mi siguiente paso sería formarme como diseñador.\n\nPor otro lado, aunque efectivamente el diseño me descubrió y guió hacia un camino nuevo orientado a especializarme en creatividad artística publicitaria, sé programar porque en un impás de mi vida pre-covid Reboot Academy me dió la oportunidad de formar parte de su último curso fullstack concediéndome una de sus becas 100%.\n\nY eso lo cambió todo.\nMe abrieron una puerta hacia lo desconocido. Como si de un garaje lleno de miles de cajas se tratara, me enseñaron a desembalarlas con cuidado y fui destapando artilugios y cachibaches que me servirían para convertirme en desarrollador.\nGracias a esto pude participar y completar el curso de Angular 9 impartido en Escuela de Organización Industrial, que junto a los cursos de "MongoDB para desarrolladores en Javascript" y "Data modeling" impartidos en MongoDB University, son mis proyectos de formación más recientes.\n\nSoy consciente de que me quedan muchas cajas por abrir, otras muchas por trastear a fondo, incluso hay cajas que mi vista aún no alcanza a ver siquiera...y no estoy seguro de si soy un unicornio o un ornitorrinco, pero tengo claro que trabajar con ustedes será un acierto para seguir aprendiendo y crecer profesionalmente.',
        bgColor: '#164E5D',
        textColor: '#F8F7C1',
        date: '05 de Agosto de 2020'
      },
      {
        title: `1`,
        text: '',
        bgColor: '#EBA68D',
        textColor: '#1D5CAB',
        date: '05 de Agosto de 2020'
      },
      {
        title: `2`,
        text: '',
        bgColor: '#EBA68D',
        textColor: '#1D5CAB',
        date: '05 de Agosto de 2020'
      },
      {
        title: `3`,
        text: 'fsadfsfsfsf',
        bgColor: '#8AD4E3',
        textColor: '#224E8B',
        date: '05 de Agosto de 2020'
      },
      {
        title: `4`,
        text: 'fdsfsffafdsa',
        bgColor: '#01623D',
        textColor: '#EFAF2F',
        date: '05 de Agosto de 2020'
      },
      {
        title: `5`,
        text: 'wefadsfagfg',
        bgColor: '#F7BAC1',
        textColor: '#EB3D50',
        date: '05 de Agosto de 2020'
      },
      {
        title: `6`,
        text: 'gadgffdagagfdg',
        bgColor: '#F7AD27',
        textColor: '#F7EACF',
        date: '05 de Agosto de 2020'
      }
    ]
  }

  ngOnInit(): void {
  }

}
