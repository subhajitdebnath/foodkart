import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { CapitalPipe } from './pipes/capital.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    UserinfoComponent,
    CapitalPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserinfoComponent,
    CapitalPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
