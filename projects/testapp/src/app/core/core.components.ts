import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [''],
})
export class CoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
