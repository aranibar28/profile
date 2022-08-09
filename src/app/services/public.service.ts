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
}
