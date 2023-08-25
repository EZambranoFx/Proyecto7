import { Component } from '@angular/core';
import { ServicioCategoriaService } from '../../providers/servicio-categoria.service';
import { InterfazCategoria } from '../../interfaces/interfaz-categoria';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description: string = 'Hecho por Enrique Zambrano, Freddy Tenesaca';
}