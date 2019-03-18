import { Component } from '@angular/core';


@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  payeeAccounts = [{ 'id': 1001, 'name': 'Harshal' }, { 'id': 1002, 'name': 'KUSTUBH' }, { 'id': 1003, 'name': 'Ravi' }];

  public incrementCounter() {
    this.currentCount++;
  }
}
