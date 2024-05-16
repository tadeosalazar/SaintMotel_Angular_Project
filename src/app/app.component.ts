//Importamos la clase Component para recopilar metadatos de configuracion de componentes
import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;


//Decorador de la clase Componente
@Component({

  //El selector es la etiqueta personalizada que nos permite crear Angular en el HTML y donde se va a visualizar este componente
  selector: 'app-root',

  //La plantilla url es la ruta de la vista html que va a imprimir este componente
  templateUrl: './app.component.html',

  //La ruta del estilo es donde direccionamos la hoja de estilo exclusiva de este componente
  styleUrl: './app.component.css'
})

//La ruta del estilo es donde direccionamos la hoja de estilo exclusiva de este componente
export class AppComponent implements OnInit {

  ngOnInit(){

/*=============================================
SCROLL UP
=============================================*/

$.scrollUp({
  scrollText: "",
  scrollSpeed:2000,
  easingType: "easeOutQuint"
})
$("#scrollUp").css({
    bottom: "20px",
  right: "20px",
  width: "50px",
  height: "0px",
  background: "url(../assets/img/flecha.jpg)"
})


}

}