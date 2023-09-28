import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { CapitalPipe } from './pipes/capital.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    UserinfoComponent,
    CapitalPipe,
    HighlightDirective,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserinfoComponent,
    CapitalPipe,
    HighlightDirective,
    FilterPipe
  ]
})
export class SharedModule { }
