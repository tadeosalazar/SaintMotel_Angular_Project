//importamos la clase NgModule, que es el modulo raiz
import { NgModule } from '@angular/core';
//importamos la clase browserModule, para buscar modulos de angular
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
//importamos los modulos de ruta
import { AppRoutingModule } from './app-routing.module';
//appcomponent es el componente principal de angular
import { AppComponent } from './app.component';
import { SlideshowComponent } from './pages/inicio/slideshow/slideshow.component';
import { FormularioComponent } from './pages/inicio/formulario/formulario.component';
import { HeaderComponent } from './pages/inicio/header/header.component';
import { GaleriaComponent } from './pages/inicio/galeria/galeria.component';
import { ArticulosComponent } from './pages/inicio/articulos/articulos.component';
import { NuevoComponenteComponent } from './pages/inicio/nuevo-componente/nuevo-componente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
//los decoradores son funciones que modifican clases de javascript
@NgModule({
  //las declaraciones son las clases de vista que pertenecen a este modulo
  declarations: [
    AppComponent,
    SlideshowComponent,
    FormularioComponent,
    HeaderComponent,
    GaleriaComponent,
    ArticulosComponent,
    NuevoComponenteComponent,
    InicioComponent,
    ArticuloComponent
  ],

  
  //importamos otros modulos cuyas clases sean necesarias para las plantillas de componentes declaradas en este modulo
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //los proveedores son los creadores de servicios que este modulo. Se vuelven accesibles en todas partes de la aplicacion
  providers: [
    provideClientHydration()
  ],
  //importamos la clase browsermodule, para buscar modulos de angular
  bootstrap: [AppComponent]
})

//exportamos la clase del modulo raiz para poder ser invocada en otros archivos
export class AppModule { }
