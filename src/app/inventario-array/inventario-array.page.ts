import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { InventarioArrayFormPage } from '../inventario-array-form/inventario-array-form.page';

@Component({
  selector: 'app-inventario-array',
  templateUrl: './inventario-array.page.html',
  styleUrls: ['./inventario-array.page.scss'],
})
export class InventarioArrayPage implements OnInit {

  public productos: any =[
    {
      id:1,
      nombre:'Coca-Cola',
      precio:1.50,
      descripcion: 'Bebida gaseosa con endulzante'
    }
  ];
  today : number = Date.now()
  public nuevoProducto={id:0, nombre: '', precio: '', descripcion: ''};
  constructor(
    public modalCtrl: ModalController,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }

  async abrirFormulario(producto){
    console.log(producto);
    
    const modal = await this.modalCtrl.create({
      component: InventarioArrayFormPage,
      componentProps:{
        'nombre': producto.nombre,
        'precio': producto.precio,
        'descripcion': producto.descripcion
      }
    });
    await modal.present();

    const {data} = await modal.onWillDismiss();

    if (data != undefined) {
      if (producto.id==0) {
        data.id = new Date().getTime();
        this.productos.push(data);
      }else{
        producto.nombre = data.nombre;
        producto.precio = data.precio;
        producto.descripcion = data.descripcion
      }
    }
    
  }

  eliminar(indice){
    console.log("eliminar",indice);
    this.mensaje(indice);
  }

  //ALERTAS

  async mensaje(indice) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      message: '¿Estás seguro que deseas eliminar el producto?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.productos.splice(indice, 1);
            this.mensaje2();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async mensaje2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Excelente',
      message: 'Eliminado Correctamente',
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
