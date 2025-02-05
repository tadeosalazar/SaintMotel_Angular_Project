//Importamos la clase Componente para recopilar metadatos de configuracion de componentes
import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {

/*=============================================
VALIDAR FORMULARIO
=============================================*/
 
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event: { preventDefault: () => void; stopPropagation: () => void; }) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
 
/*=============================================
ICHECK
=============================================*/
 
$(".icheck").iCheck({
 
  checkboxClass: "icheckbox_flat-blue",
  radioClass: "iradio_flat-blue"
})



  }

}
