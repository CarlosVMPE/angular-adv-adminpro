import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{

  @Input() title = 'Sin titulo';
  @Input() labels: string[];
  @Input() data: any;
  @Input() dataColors: string[] = ['#6857E6', '#009FEE', '#F02059'];
  public colors: Color[];

  ngOnInit() {
    this.colors = [
      { backgroundColor: this.dataColors }
    ];
  }

}
