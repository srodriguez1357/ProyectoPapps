import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BienvenidaPage } from '../bienvenida/bienvenida';
import { RegistroPage } from '../registro/registro';
import { ProductosPage } from '../productos/productos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

prds = ProductosPage;


  constructor(public navCtrl: NavController) {

  }
  clickprds()
  {
    this.navCtrl.push(this.prds);
  }

}
