import { Component, OnInit, Input, trigger, transition, state, style, animate } from '@angular/core';

@Component({
  selector: 'faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.css'],
  animations: [
    trigger('test', [
      state('inactive', style({ 'color': '#333', 'font-size': '13pt' })),
      state('active', style({ 'color': 'red', 'font-size': '14pt' })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ])
  ]
})
export class FaqDetailComponent implements OnInit {

  @Input('data')
  data: any;
  state = 'inactive';
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.state = this.state == 'inactive' ? 'active' : 'inactive';
  }
}
