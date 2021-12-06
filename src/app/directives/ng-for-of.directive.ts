//Структурная директива итерирует объект, на каждом шаге доступны ключ и значение.

import {
  Directive,
  Input, KeyValueChangeRecord, KeyValueDiffer, KeyValueDiffers,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[ngForOf]'
})
export class NgForOfDirective {
  private object: {} = {};
  public differ!: KeyValueDiffer<any,any>;
  @Input() set ngForOfFrom(obj:{}){
    this.object = this.createObject(obj);
  }

  public createObject(obj:{}):Object{
    return obj;
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,private iterable:KeyValueDiffers) {
    this.differ = this.iterable.find(this.object).create();
  }

  ngDoCheck(){
    const objChanges = this.differ.diff(this.object);
    if (objChanges){
      objChanges.forEachChangedItem(
      (record: KeyValueChangeRecord<any, any>) => {
        const value = record.currentValue;
        this.viewContainer.createEmbeddedView(this.templateRef, {$implicit: record.key, value})
      });

      objChanges.forEachAddedItem((record: KeyValueChangeRecord<any, any>) => {
        const value = record.currentValue;
        this.viewContainer.createEmbeddedView(this.templateRef, {$implicit: record.key, value})
      });

      // objChanges.forEachRemovedItem(
      //   (record: KeyValueChangeRecord<any, any>) => {
      //     console.log(record.key + ': ' + record.previousValue + '=>' + record.currentValue)
      //   });
    }
  }

}
