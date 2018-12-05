import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

  productos=[
    {
      id: 0,
      imagen:'../asstes/imgs/MF.jpg',
      nombre:'Halcón Milenario',
      precio:'₿551,390,290',

        vender: {
        vendedor:'Watto',
        valoracionv:[1, 2]
        },

          review: [{
            username: 'MarleneShip',
            avatar: '../assets/imgs/Avatar3',
            valoracion: [1, 2, 3, 4, 5],
            reseña:'Spicy jalapeno bacon ipsum dolor amet consequat sed reprehenderit aliquip, ea voluptate pork loin dolore strip steak et',
            date:'11/09/2051'
          }],

          date: [{
              fecha:'09/01/2050',
              disponibles:'0'
          }]
    },

    {
      id: 1,
      imagen:'../asstes/imgs/Arwing.jpg',
      nombre:'Arwing',
      precio:'₿17,580,000',

        vender: {
        vendedor:'Falco',
        valoracionv:[1, 2, 3, 4, 5]
        },

          review: [{
            username: 'MarPlanet',
            avatar: '../assets/imgs/Marvatar',
            valoracion: [1, 2, 3, 4 ],
            reseña:'Non porchetta commodo bresaola enim labore. Excepteur prosciutto kevin, anim incididunt chicken cupim ut aliqua buffalo.',
            date:'05/12/2056'
          }],

          date: [{
              fecha:'11/10/2050',
              disponibles:'3'
          }]
    },

    {
      id: 2,
      imagen:'../asstes/imgs/Axiom.jpg',
      nombre:'Axiom',
      precio:'₿777,900,000',

        vender: {
        vendedor:'BNL',
        valoracionv:[1, 2, 3]
        },

          review: [{
            username: 'AtomLene',
            avatar: '../assets/imgs/Cavatar',
            valoracion: [1, 2, 3, 4, 5],
            reseña:'upim fatback dolor ex sausage in. Consequat occaecat salami esse alcatra sirloin rump consectetur leberkas non pork. Anim burgdoggen ribeye in tail in velit',
            date:'27/12/2050'
          }],

          date: [{
              fecha:'11/10/2050',
              disponibles:'1'
          }]
    },

    {
      id: 3,
      imagen:'../asstes/imgs/Bubbleship.jpg',
      nombre:'Bubbleship',
      precio:'₿33,000,050',

        vender: {
        vendedor:'BNL',
        valoracionv:[1, 2, 3]
        },

          review: [{
            username: 'AtomLene',
            avatar: '../assets/imgs/Cavatar',
            valoracion: [1, 2, 3, 4],
            reseña:'Elit pancetta swine, est t-bone occaecat brisket non fatback.',
            date:'02/03/2050'
          }],

          date: [{
              fecha:'01/02/2050',
              disponibles:'15'
          }]
    },

    {
      id: 4,
      imagen:'../asstes/imgs/Bubbleship.jpg',
      nombre:'Bubbleship',
      precio:'₿33,000,050',

        vender: {
        vendedor:'BNL',
        valoracionv:[1, 2, 3]
        },

          review: [{
            username: 'AtomLene',
            avatar: '../assets/imgs/Cavatar',
            valoracion: [1, 2, 3, 4],
            reseña:'Elit pancetta swine, est t-bone occaecat brisket non fatback.',
            date:'02/03/2050'
          }],

          date: [{
              fecha:'01/02/2050',
              disponibles:'15'
          }]
    },

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

}
