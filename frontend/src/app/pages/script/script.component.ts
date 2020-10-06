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
  pageNumber: number
  offsetEnter: number = 100
  offsetLeave: number = -100

  constructor(public router: Router, private route: ActivatedRoute) {
    router.events.subscribe(val => {
      this.id = route.snapshot.params.id;
      this.scriptPosition = parseInt(this.id) - 1;
      this.pageNumber = this.scriptPosition + 1
    });
    this.textList = [
      {
        title: '¿Buscáis problemas?',
        text: 'Me gustan los problemas.\nMe gustan cuando aparecen de repente, así, sin avisar.\nMe gustan porque puedo rastrearlos, seguir las pistas hasta encontrar dónde se esconden y contemplarlos, a veces durante horas.\n\nLos analizo, los zarandeo...los pongo del revés y les pregunto constantemente: "oye, ¿y si...?"\nPodría pasarme un día entero dividiéndolos en trocitos, simplemente para volverlos a juntar.\n\nMe gusta hablar sobre ellos(¿a quién no?), escuchar sus historias, sus victorias y sus derrotas para comprenderlos mejor, preguntar a cualquiera que pase: "¡ey!¿conoces este problema?".\n\nMe gustan sus diferentes formas, tamaños y colores; especialmente con sabor a tostadas y olor a café.\nPero lo que más me gusta de ellos, es cuando se marchan.\nNo porque deje de tener un problema...sino por todo lo que he ganado mientras lo tenía.',
        bgColor: '#F4E2E6',
        textColor: '#9E0D0D',
        date: '06 de Junio de 2020'
      },
      {
        title: `I'm in lovve`,
        text: '“¿Te enamoraste? La cagaste.”\nSabias palabras de una madre a la que razón no le faltaba.\n\nPorque cuando estás enamorado se te cierra el estómago con cremallera,\ncuando estás enamorado los números en el reloj se desordenan,\ncuando estás enamorado no importa dónde mires, solo la ves a ella…\n\nVives en esa gran esperanza demoledora que es el futuro, imaginando.\nImaginando lo jodidamente increíble que será todo.\nDespertar con sus buenos días… \nReír las penas y llorar las alegrías...\nOír sus besos como la mejor de las melodías...\nLlenar de niños las habitaciones vacías...\nYo lo quiero todo.\n\nParece una mala broma del destino que Cupido malgastase todas sus flechas en un loco creativo que no sabe qué hora es.\nQuizá sea la hora de conocernos y quizá la mejor manera sea dándonos dos besos: https://bellaco.portfoliobox.net/',
        bgColor: '#EBA68D',
        textColor: '#1D5CAB',
        date: '07 de Mayo de 2019'
      },
      {
        title: `Cuentános algo sobre ti`,
        text: 'Muy buenas, mi nombre es David Cabello Oquendo y soy un unicornio.\nBueno, o eso es lo que me han dicho algunas personas del sector tecnológico durante 2020.\nLa verdad es que no sabía muy bien lo que significaba cuando lo escuché y buscando en Google encontré que el concepto "unicornio" se aplica a personas que saben diseñar y programar.\n\nPor un lado, sé diseñar porque durante la carrera de Publicidad y Relaciones Públicas mis compañeros diseñadores presentaban unas ideas de campaña que eran la envidia de toda la clase, así que pensé que podría ser una buena herramienta complementaria y decidí que mi siguiente paso sería formarme como diseñador.\n\nPor otro lado, aunque efectivamente el diseño me descubrió y guió hacia un camino nuevo orientado a especializarme en creatividad artística publicitaria, sé programar porque en un impás de mi vida pre-covid, Reboot Academy me dió la oportunidad de formar parte de su último curso fullstack concediéndome una de sus becas 100%.\n\nY eso lo cambió todo.\nMe abrieron una puerta hacia lo desconocido. Como si de un garaje lleno de miles de cajas se tratara, me enseñaron a desembalarlas con cuidado y fui destapando artilugios y cachibaches que me servirían para convertirme en desarrollador.\nGracias a esto pude participar y completar el curso de Angular 9 impartido en Escuela de Organización Industrial, que junto a los cursos de "MongoDB para desarrolladores en Javascript" y "Data modeling" impartidos en MongoDB University, son mis proyectos de formación más recientes.\n\nSoy consciente de que me quedan muchas cajas por abrir, otras muchas por trastear a fondo, incluso hay cajas que mi vista aún no alcanza a ver siquiera...y no estoy seguro de si soy un unicornio o un ornitorrinco, pero tengo claro que trabajar con ustedes será un acierto para seguir aprendiendo y crecer profesionalmente.',
        bgColor: '#164E5D',
        textColor: '#F8F7C1',
        date: '05 de Agosto de 2020'
      },
      {
        title: `Declaración indecente`,
        text: '¡Hola! ¿Cómo va? Me llamo David Cabello, soy fan incondicional de &Rosàs y ha llegado el día. \nDespués de años de trabajo y sufrimiento, hoy es el día. \nHoy es el día que llamo a vuestra puerta con los nervios de un niño que se va dormir la noche del 5 de enero. \nToco el timbre flojito para no hacer mucho ruido y no molestar, pero por dentro deseo que el sonido llegue a todos los rincones de la agencia. \n\nLlevo traje y corbata para parecer una persona formal, aunque se aprecia a simple vista que no visto así normalmente. Solo espero que al abrir la puerta me veáis como yo os miro a vosotros, con ganas de todo: de descubrir, de aprender, de reír, de café… \n\nYa, ya sé que no esperabais una visita tan repentina. Así que si necesitáis tiempo para recibirme no pasa nada, esperaré aquí mismo: https://bellaco.portfoliobox.net/ \n\nQue tengamos buen día. ¡Un saludo!',
        bgColor: '#EBA68D',
        textColor: '#1D5CAB',
        date: '05 de Agosto de 2020'
      },
      {
        title: `Motivación Edosoft`,
        text: 'Esta es mi primera vez. \nLa primera vez que mi currículum habla más de código que de publicidad. \nLa primera vez que busco trabajo como desarrollador. \nIncluso es la primera vez que escribo una carta de presentación. \n\nRecientemente he finalizado mis estudios de desarrollo web full-stack en Reboot Academy. A lo largo de mi formación, he tenido oportunidad de desarrollar mis primeras experiencias mediante proyectos individuales y en equipo, por primera vez me he enfrentado a problemas que han desafiado mis conocimientos y mi manera de pensar a diario, he aprendido a aprender y después de recorrer la península de extremo a extremo buscando cuál era mi sitio, por primera vez tengo la sensación de estar en el lugar adecuado. \n\nA pesar de ser mi primera vez en este sector, tengo experiencia trabajando en equipo, bajo presión, cumpliendo deadlines, coordinando personas, recibiendo y elaborando briefs, pensando en los detalles y compartiendo distintos puntos de vista para encontrar soluciones creativas.\n\nDicen que las primeras veces nunca se olvidan, por eso me encantaría formar parte de vuestro equipo mi primera vez trabajando como desarrollador, para crecer mano a mano con los mejores profesionales y descubrir los procesos de producción que siguen. \nPienso que podría encajar en el perfil que buscan, adaptándome y aprendiendo lo necesario que el puesto de trabajo requiere, además de aportar todas mis ganas e ilusión por desempeñarlo. \n\nMuchas gracias por la atención. \nUn saludo.',
        bgColor: '#EBA68D',
        textColor: '#1D5CAB',
        date: '05 de Agosto de 2020'
      },
      {
        title: `¿Por qué eres el candidato perfecto?`,
        text: 'Soy el candidato perfecto... porque me cansé de serlo. \nDespués de estudiar una carrera, me cansé de ser el candidato perfecto pero tener que servir copas por la noche. \nDespués de estudiar un ciclo superior, me cansé de ser el candidato perfecto para ver si me queda en el almacén la talla 42 en negro. \nDespués de estudiar un máster, me cansé de ser el candidato perfecto para ser el encargado de las fotocopias, me cansé... \n\nMe cansé de cargar camiones, de aguantar niños, de los clientes maleducados, de limpiar baños, de fregar platos... \n\nPero no me arrepiento de nada. \nTodo lo que hice me enseñó. \nGracias a todo eso aprendí que solo estoy cansado. \nQue simplemente tengo que parar por un segundo a respirar, recuperar el aliento y volver a poner todo mi esfuerzo en dar el siguiente paso. \n¿Me enseñáis el camino?',
        bgColor: '#01623D',
        textColor: '#EFAF2F',
        date: '05 de Agosto de 2020'
      },
       {
         title: `¿Quién es David?`,
         text: 'David es un astronauta tropical. \nLe gusta explorar y el mar. \nA veces viste raro. \nBaila en la ducha. \nDesayuna tortitas cada día. \nPrefiere el café solo. \nPatina. \nMira al cielo a menudo. \nSe enamora de colores. \nMedita. \nColecciona libretas. \nEscucha canciones nuevas. \nMadruga para coger olas. \nSe mira en el reflejo de los escaparates \nCocina peor de lo que cree. \nEs flexible. \nLe encanta oír historias. \nSuele olvidar la mascarilla al salir. \n\nY se me da fatal hablar sobre mí.',
        bgColor: '#01623D',
        textColor: '#EFAF2F',
        date: '05 de Agosto de 2020'
      }
    ]
  }

  ngOnInit(): void {
  }

  setAnimationParams(transitionDirection) {
    this.offsetEnter = transitionDirection.offsetEnter;
    this.offsetLeave = transitionDirection.offsetLeave;
  }
}
