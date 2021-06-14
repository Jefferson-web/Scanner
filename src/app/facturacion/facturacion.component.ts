import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  constructor(private _toastr: ToastrService) { }
  ngOnInit(): void {
  }

  onInputChange(e) {
    const { value } = e.target;
    if (this.isValid(value)) {

    } else {
      this._toastr.error('<span class="now-ui-icons ui-1_bell-53"></span>El formato del N° de Guia es inválido.', '', {
        timeOut: 4000,
        enableHtml: true,
        closeButton: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-top-right'
      });
    }
  }

  isValid(val) {
    return /^([0-9]{3}-[0-9]{7})*$/.test(val) && val !== "";
  }

}
