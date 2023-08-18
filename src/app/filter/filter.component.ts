import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
        minValue:number = 0;
         maxValue:number = 0;

 @Output() apply = new EventEmitter();
 @Output() reset = new EventEmitter();

 applyFilter(minValue: number, maxValue: number) {
 this.apply.emit({minValue, maxValue});
}

resetFilter() {
  this.minValue= 0;
  this.maxValue= 0;
  this.reset.emit();
  
}
}



