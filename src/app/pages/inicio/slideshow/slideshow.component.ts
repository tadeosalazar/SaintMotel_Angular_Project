import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void{


      /*=============================================
JD SLIDER
=============================================*/

$('.slideshow').jdSlider({

  wrap:'.slide-inner', //Especificar el slide que vamos a usar
  isAuto: true, //Inicia la animación automáticamente
  isLoop: true, //Al finalizar vuelve a comenzar
  interval: 7000, //Tiempo por cada slide
  isCursor:true //Pausar animación con el mouse

});


  }

}

