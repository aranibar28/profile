import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  constructor() {}

  init_carrousel() {
    $('.owl-one').owlCarousel({
      loop: true,
      autoplay: true, //true if you want enable autoplay
      autoPlayTimeout: 1000,
      dots: false,
      nav: false,
      smartSpeed: 1500,
      responsive: {
        0: {
          items: 4,
        },
        767: {
          items: 4,
        },
        768: {
          items: 8,
        },
        1200: {
          items: 12,
        },
      },
    });

    $('.owl-two').owlCarousel({
      loop: true,
      autoplay: true, //true if you want enable autoplay
      autoPlayTimeout: 1000,
      dots: false,
      nav: false,
      smartSpeed: 1500,
      rtl: true,
      responsive: {
        0: {
          items: 4,
        },
        767: {
          items: 4,
        },
        768: {
          items: 8,
        },
        1200: {
          items: 12,
        },
      },
    });
  }

  services: any[] = [
    {
      title: 'Análisis y Diseño',
      description: 'Documentación del proyecto mediante fases, deficición de los Requerimientos, Casos de Uso, Diagramacición UML.',
      image: 'assets/img/icons/1.png',
    },
    {
      title: 'Maquetación Web',
      description: 'Creación del diseño que implica la composición e interactividad que tendrá tu página web con el usuario final.',
      image: 'assets/img/icons/2.png',
    },
    {
      title: 'Desarrollo Web',
      description: 'Desarrollo de aplicaciones empresariales, mediante el uso de frameworks, lenguaje de programación y base de datos.',
      image: 'assets/img/icons/3.png',
    },
    {
      title: 'Creación API REST',
      description: 'Construcción de APIs con sus respectivos métodos HTTP para manipular recursos o servicios de manera segura.',
      image: 'assets/img/icons/4.png',
    },
  ];

  questions: any[] = [
    {
      title: '¿Cuánto es el costo de mi página web?',
      description: 'El costo del desarrollo de una página o aplicación web va a depender de los requerimientos del sistema, en mi caso ofrezco páginas web a partir de 300 soles y aplicaciones web por encima de los 400 soles.'
    },
    {
      title: '¿Cuánto es el tiempo de entrega de mi página web?',
      description: 'Esto también depende de los requerimientos que se soliciten, el tiempo promedio mínimo es de 5 días.'
    },
    {
      title: '¿Cómo es el método de pago?',
      description: 'Puedes realizar el pago mediante depósito o transferencia bancarias como BCP, INTERBANK, BBVA o SKOTIABANK. También mediante billeteras digitales como YAPE o Paypal.'
    },
    {
      title: '¿En qué se diferencia una página web y una aplicación web?',
      description: 'Una página o sitio web son básicamente paginas informativas que tienen sus secciones y contenido fijo. Obviamente se pueden actualizar pero no de una forma sencilla para el usuario. Las webs dinámicas son paginas en las que su contenido es más fácil y frecuente a modificaciones. Se construyen usando lenguajes de programación y requiere una base de datos para almacenar la información.'
    },
    {
      title: '¿El sistema viene con hosting y dominio?',
      description: 'Sí, la página web que le entregaré viene con el hosting totalmente gratuito (hosting es donde estará alojada tu web), pero el dominio tendría que comprarlo usted (dominio es el nombre que tendrá tu página web ejemplo : midominio.com), para que de esta manera se evite problemas a futuro ya que el dominio es un pago que se debe realizar anualmente.'
    },
    {
      title: '¿El sistema viene con correo corporativo?',
      description: 'Si toda página web viene con sus respectivos correos corporativos (ejemplo: info@empresa.com), de esta manera su empresa y/o negocio tendrá la formalidad correspondiente.'
    }
  ]

  gallery: any[] = [
    {
      title: 'Sistema de Matrículas',
      image: 'assets/img/gallery/4.png',
      filter: 'management',
      icons: ['html5', 'css3', 'typescript', 'angular', 'nodejs', 'mongodb'],
    },
    {
      title: 'Sistema Administrativo',
      image: 'assets/img/gallery/5.png',
      filter: 'management',
      icons: ['html5', 'css3', 'typescript', 'angular', 'nodejs', 'mongodb'],
    },
    {
      title: 'Sistema Ecommerce',
      image: 'assets/img/gallery/6.png',
      filter: 'business technology',
      icons: ['html5', 'css3', 'typescript', 'angular', 'nodejs', 'mongodb'],
    },
    {
      title: 'Sistema de Citas Médicas',
      image: 'assets/img/gallery/7.png',
      filter: 'management',
      icons: ['html5', 'css3', 'javascript', 'bootstrap', 'php', 'mysql'],
    },
    {
      title: 'Sistema de Ventas y Facturación',
      image: 'assets/img/gallery/8.png',
      filter: 'business technology',
      icons: ['html5', 'css3', 'javascript', 'bootstrap', 'php', 'mysql'],
    },
    {
      title: 'Sistema para Restaurantes',
      image: 'assets/img/gallery/9.png',
      filter: 'business technology',
      icons: ['html5', 'css3', 'javascript', 'react', 'python', 'django'],
    },
    {
      title: 'Sistema ERP',
      image: 'assets/img/gallery/1.png',
      filter: 'management finance',
      icons: ['html5', 'css3', 'javascript', 'bootstrap', 'php', 'mysql'],
    },
    {
      title: 'Sistema Punto de Venta',
      image: 'assets/img/gallery/2.png',
      filter: 'finance management',
      icons: ['html5', 'css3', 'javascript', 'bootstrap', 'php', 'mysql'],
    },
    {
      title: 'Sistema de Almacén',
      image: 'assets/img/gallery/3.png',
      filter: 'finance management',
      icons: ['html5', 'css3', 'javascript', 'bootstrap', 'php', 'mysql'],
    },
  ];

  frontend: any[] = [
    'html5',
    'css3',
    'javascript',
    'typescript',
    'angular',
    'react',
    'redux',
    'sass',
    'bootstrap',
    'tailwind',
    'materialui',
    'semanticui',
  ];

  backend: any[] = [
    'php',
    'python',
    'nodejs',
    'nestjs',
    'java',
    'django',
    'flask',
    'mysql',
    'mongodb',
    'postgresql',
    'heroku',
    'firebase',
  ];
}
