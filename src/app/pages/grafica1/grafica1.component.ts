import { Component } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data1 = [350, 450, 100];
  colors1 = ['#4CAF50', '#FFAB40', '#00796B'];

  labels2: string[] = ['1', '2', '3'];
  data2 = [150, 250, 300];

  labels3: string[] = ['X', 'Y', 'Z'];
  data3 = [100, 200, 300];

  labels4: string[] = ['A', 'B', 'C'];
  data4 = [300, 400, 200];

}
