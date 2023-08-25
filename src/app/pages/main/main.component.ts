import { Component } from '@angular/core';
//Importación de la interfaz
import { InterfazPedido} from '../../interfaces/interfaz-pedido';
//Importación del servicio
import { ProveedorService } from '../../providers/proveedor.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  displayedColumns: string[] = ['idpedido','fechapedido','estadopedido', 'total'];
  public data : InterfazPedido[] = [];

  constructor(private dataProvider: ProveedorService) { }
  ngOnInit() {
      this.dataProvider.getResponse().subscribe((response) => { 
        this.data = (response as InterfazPedido[]); 
      })
    }
}
