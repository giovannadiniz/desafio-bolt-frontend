import {Component, inject, OnInit} from '@angular/core';
import {DefaultLayoutComponent} from '../default-layout/default-layout.component';
import {UsinaService} from '../../services/usina-service';
import {UsinaDto} from '../../models/usina-dto';
import {DefaultTableComponent, TableColumn} from '../default-table/default-table.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    DefaultTableComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit{
  private service = inject(UsinaService);

  usinas: UsinaDto[] = [];

  columns: TableColumn[] = [
    {
      header: 'Posição',
      format: (value, row, index) => `${index + 1}º`
    },
    {
      header: 'Usina Geradora',
      field: 'nome'
    },
    {
      header: 'Capacidade',
      field: 'potenciaKw',
      format: (value) => `${value} MW`
    },
    {
      header: 'Localização',
      field: 'uf'
    }
  ];

  ngOnInit(): void {
    this.buscarTop5();
  }

  buscarTop5(): void {
    this.service.getTop5MaioresUsinas().subscribe({
      next: (response) => {
        this.usinas = response;
        console.log('Top 5 maiores usinas:', this.usinas);
      },
      error: (error) => {
        console.error('Erro ao buscar as maiores usinas:', error);
      }
    });
  }

}
