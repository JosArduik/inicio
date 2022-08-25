import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inventario-array-form',
  templateUrl: './inventario-array-form.page.html',
  styleUrls: ['./inventario-array-form.page.scss'],
})
export class InventarioArrayFormPage implements OnInit {

  /* GUARDAR EN ARRAY - CRUD  */
  @Input() nombre: string;
  @Input() precio: number;
  @Input() descripcion: string;

  constructor(
    private modalCtrl: ModalController,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  guardar(){
    var name = (<HTMLInputElement>document.getElementById("txtnombre")).value;
    var money = (<HTMLInputElement>document.getElementById("floatnumero")).value;
    var description = (<HTMLInputElement>document.getElementById("txtdescrip")).value;
    
    if (name == "") {
      this.mensaje();
    }else if (money == "") {
      this.mensaje2();
    }else if (description == "") {
      this.mensaje3();
    }else{
      this.modalCtrl.dismiss({
        nombre: name,
        precio: money,
        descripcion: description
      });
      if (this.nombre == "") {
        this.mensaje4();
      }else{
        this.mensaje5();
      }
      
    }
  }

  //ALERTAS 

  async mensaje() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      message: 'Ingresa el nombre',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      message: 'Ingresa el precio',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje3() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      message: 'Ingresa la descripcion',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje4() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Excelente',
      message: 'Guardado Correctamente',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje5() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Excelente',
      message: 'Modificado Correctamente',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
