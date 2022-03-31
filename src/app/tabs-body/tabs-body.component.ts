import {
  AfterContentInit,
  AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-tabs-body',
  template: `
    <div *ngIf="isOpen">
        <ng-container #vc></ng-container>
        <ng-content></ng-content>        
    </div>      
  `,
  styles: [
    `:host{display: block;}`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsBodyComponent implements OnInit,AfterContentInit,AfterViewInit {
  @ViewChild('vc',{read: ViewContainerRef})
  public contentContainer!: ViewContainerRef;

  @ContentChild('bodyContent')
  public bodyContent!: TemplateRef<any>;

  private _isOpen = false;

  set isOpen(value: boolean){
    this._isOpen = value;
    this.cdr.detectChanges();
    this.toggleContent();
  }

  get isOpen(){
    return this._isOpen;
  }

  toggleContent(){
    if (this.contentContainer){
      this.contentContainer.createEmbeddedView(this.bodyContent);
    }
  }

  ngAfterViewInit(): void {
  }
  ngAfterContentInit(){
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
