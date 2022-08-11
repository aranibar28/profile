import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  constructor() {}

  init_carrousel() {
    $('.client-slider-2').owlCarousel({
      loop: false,
      autoplay: false, //true if you want enable autoplay
      autoPlayTimeout: 1000,
      dots: false,
      nav: false,
      smartSpeed: 1500,
      responsive: {
        0: {
          items: 2,
        },
        767: {
          items: 2,
        },
        768: {
          items: 4,
        },
        1200: {
          items: 6,
        },
      },
    });

    $('.team-slider').owlCarousel({
      loop: true,
      autoplay: true, //true if you want enable autoplay
      autoPlayTimeout: 1000,
      dots: true,
      nav: true,
      items: 1,
      smartSpeed: 1500,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: [
        '<img src="assets/img/startup/left.png" alt="arrow">',
        '<img src="assets/img/startup/right.png" alt="arrow">',
      ],
    });
  }

  filter_gallery(){

  }

  services: any[] = [
    {
      title: 'Análisis y Diseño',
      description: 'Documentación del proyecto mediante fases, deficición de los Requerimientos, Casos de Uso, Diagramacición UML.',
      image: 'assets/img/service/1.png',
    },
    {
      title: 'Maquetación Web',
      description: 'Creación del diseño que implica la composición e interactividad que tendrá tu página web con el usuario final.',
      image: 'assets/img/service/2.png',
    },
    {
      title: 'Desarrollo Web',
      description: 'Desarrollo de aplicaciones empresariales, mediante el uso de frameworks, lenguaje de programación y base de datos.',
      image: 'assets/img/service/3.png',
    },
    {
      title: 'Creación API REST',
      description: 'Construcción de APIs con sus respectivos métodos HTTP para manipular recursos o servicios de manera segura.',
      image: 'assets/img/service/4.png',
    },
  ];

  projects: any[] = [
    {
      title: 'Facturador',
      subtitle: 'PRO 5',
      description: 'El software de gestión empresarial en su quinta versión, con miles de empresas facturando a través de este sistema en todo el país, a lo largo del tiempo se convirtió en más que un facturador, es un software para gestionar los principales procesos de cualquier empresa, con múltiples canales de venta.',
      stack1: 'http://localhost:4200/assets/img/icons/t1.png',
      stack2: 'http://localhost:4200/assets/img/icons/t2.png',
      stack3: 'http://localhost:4200/assets/img/icons/t3.png'
    },
    {
      title: 'CRM',
      subtitle: 'PRO 5',
      description: 'El software de gestión empresarial en su quinta versión, con miles de empresas facturando a través de este sistema en todo el país, a lo largo del tiempo se convirtió en más que un facturador, es un software para gestionar los principales procesos de cualquier empresa, con múltiples canales de venta.',
      stack1: 'http://localhost:4200/assets/img/icons/t1.png',
      stack2: 'http://localhost:4200/assets/img/icons/t2.png',
      stack3: 'http://localhost:4200/assets/img/icons/t3.png'
    },
    {
      title: 'ERP',
      subtitle: 'PRO 5',
      description: 'El software de gestión empresarial en su quinta versión, con miles de empresas facturando a través de este sistema en todo el país, a lo largo del tiempo se convirtió en más que un facturador, es un software para gestionar los principales procesos de cualquier empresa, con múltiples canales de venta.',
      stack1: 'http://localhost:4200/assets/img/icons/t1.png',
      stack2: 'http://localhost:4200/assets/img/icons/t2.png',
      stack3: 'http://localhost:4200/assets/img/icons/t3.png'
    },
    {
      title: 'Mi Delivery',
      subtitle: 'PRO 5',
      description: 'El software de gestión empresarial en su quinta versión, con miles de empresas facturando a través de este sistema en todo el país, a lo largo del tiempo se convirtió en más que un facturador, es un software para gestionar los principales procesos de cualquier empresa, con múltiples canales de venta.',
      stack1: 'http://localhost:4200/assets/img/icons/t1.png',
      stack2: 'http://localhost:4200/assets/img/icons/t2.png',
      stack3: 'http://localhost:4200/assets/img/icons/t3.png'
    },
  ];

  questions:any[] = [
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
}
