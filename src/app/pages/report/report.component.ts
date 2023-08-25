import { Component } from '@angular/core';
//Importación de la interfaz y del servicio producto
import { ServicioProductoService } from '../../providers/servicio-producto.service';
import { InterfazProducto } from '../../interfaces/interfaz-producto';
//Importación de la interfaz y del servicio categoria
import { ServicioCategoriaService } from '../../providers/servicio-categoria.service';
import { InterfazCategoria } from '../../interfaces/interfaz-categoria';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent  {
  displayedColumns: string[] = ['nombre', 'precio', 'descripcion', 'stock'];
  public data: InterfazProducto[] = [];
  public categories: InterfazCategoria[] = []; 
  public selectedCategoryId: number | null = null;

  constructor(
    private productoService: ServicioProductoService,
    private categoriaService: ServicioCategoriaService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.productoService.getResponse().subscribe((response) => {
      this.data = response as InterfazProducto[];
    });

    this.categoriaService.getResponse().subscribe((response) => {
      this.categories = response as InterfazCategoria[];
    });
  }

  filterByCategory() {
    if (this.selectedCategoryId === null) {
      this.loadData(); // Cargar todos los datos
    } else {
      // Filtrar productos por categoría
      this.productoService.getResponse().subscribe((response) => {
        this.data = (response as InterfazProducto[]).filter(producto => producto.categoria_idcategoria === this.selectedCategoryId);
      });
    }
  }
}