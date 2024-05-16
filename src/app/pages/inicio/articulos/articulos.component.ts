import { Component } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent {
  articulos = [
    {
      imgSrc: 'assets/img/articulos/portada05.jpg',
      titulo: '¿Qué es Saint Motel?',
      descripcion: 'Saint Motel es una banda estadounidense de indie pop',
      descripcionLarga: 'Saint Motel es una banda estadounidense de indie pop conocida por su estilo musical vibrante y ecléctico. Con una mezcla de indie rock, synth-pop y elementos de dance music, su sonido distintivo y enérgico los ha llevado a la fama internacional. Son reconocidos por sus actuaciones en vivo dinámicas y visualmente atractivas.',
      mostrarMas: false
    },
    {
      imgSrc: 'assets/img/articulos/portada06.jpg',
      titulo: '¿Quienes somos nosotros?',
      descripcion: 'Bienvenido a la página de fans de Saint Motel',
      descripcionLarga: 'Bienvenido a la página de fans de Saint Motel, tu fuente definitiva para todo lo relacionado con la banda. Aquí encontrarás noticias actualizadas, artículos exclusivos, galerías de fotos, y contenido detrás de escena. Únete a nuestra comunidad para compartir tu pasión por Saint Motel y estar al tanto de todas las novedades.',
      mostrarMas: false
    },
    {
      imgSrc: 'assets/img/articulos/portada07.jpg',
      titulo: 'Escucha el nuevo single de Saint Motel',
      descripcion: '¡No te pierdas el nuevo single de Saint Motel, "Slowly Spilling Out"!',
      descripcionLarga: '¡No te pierdas el nuevo single de Saint Motel, "Slowly Spilling Out"! Este cautivador tema captura la esencia del sonido único de la banda con melodías pegajosas y ritmos envolventes. "Slowly Spilling Out" te llevará a un viaje musical que no querrás que termine. Escúchalo ahora en todas las plataformas digitales..',
      mostrarMas: false
    },
    {
      imgSrc: 'assets/img/articulos/portada08.jpeg',
      titulo: 'Registrate',
      descripcion: '¡únete a nuestra comunidad de fans!',
      descripcionLarga: '¿Amas a Saint Motel tanto como nosotros? Entonces, ¡únete a nuestra comunidad de fans! Al registrarte en nuestra página, recibirás acceso exclusivo a contenido especial, noticias de primera mano, y la oportunidad de participar en eventos únicos. No te pierdas la oportunidad de estar más cerca de tu banda favorita. ¡Regístrate hoy mismo y sé parte de la experiencia Saint Motel!.',
      mostrarMas: false
    }
  ];
}
