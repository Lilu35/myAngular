import {
  Directive,
  Input,
  IterableChanges,
  IterableDiffer,
  IterableDiffers,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[ngForOf]'
})
export class NgForOfDirective {
  private object: {} = {};
  public differ!: IterableDiffer<{}>;
  @Input() set ngForOfFrom(obj:{}){
    // this.object = this.createObject(obj);
    this.viewContainer.clear();
    for (const prop in obj) {
      // @ts-ignore
      let value = obj[prop];
      this.viewContainer.createEmbeddedView(this.templateRef,{$implicit:prop,value});
    }
  }

  public createObject(obj:{}):Object{
    return obj;
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,private iterable:IterableDiffers) {
    // this.differ = this.iterable.find(this.object).create();
  }

  // ngOnCheck(){
  //   const objChanges = this.differ.diff(this.object);
  //   for (var prop in obj) {
  //     this.viewContainer.createEmbeddedView(this.templateRef,{$implicit:prop,prop});
  //   }
  // }

}
