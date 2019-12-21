import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filteer',
  templateUrl: './filteer.component.html',
  styleUrls: ['./filteer.component.css']
})
export class FilteerComponent  {
  @Input() name: string;


  constructor() { }

  ngOnInit() {
  }

}
