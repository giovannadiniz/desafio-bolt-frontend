import {Component, Input} from '@angular/core';

export interface TableColumn {
  header: string;
  field?: string;
  format?: (value: any, row: any, index: number) => string;
}

@Component({
  selector: 'app-default-table',
  standalone: true,
  imports: [],
  templateUrl: './default-table.component.html',
  styleUrl: './default-table.component.scss'
})
export class DefaultTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() title?: string;

  getCellValue(row: any, column: TableColumn, index: number): string {
    console.log('getCellValue - Index:', index, 'Column:', column.header); // Debug

    // Se tem função format, usa ela
    if (column.format) {
      const value = column.field ? row[column.field] : null;
      const resultado = column.format(value, row, index);
      console.log('Format retornou:', resultado); // Debug
      return resultado;
    }

    // Se não tem field, retorna vazio
    if (!column.field) {
      return '-';
    }

    // Retorna o valor do campo
    const value = row[column.field];
    return value?.toString() ?? '-';
  }
}
