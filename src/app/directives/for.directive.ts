import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input('myForEm') numbers: number[] | undefined;

  constructor(private conatiner: ViewContainerRef, private template: TemplateRef<any>) { }
  
  ngOnInit(): void {
    
    console.log(this.numbers)
  }

}
