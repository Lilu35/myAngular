import {
  ComponentFactoryResolver, ComponentRef,
  Directive,
  ElementRef, HostListener, Injector,
  Input, OnDestroy,
  Renderer2,
  TemplateRef,
  Type,
  ViewContainerRef
} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";

@Directive({
  selector: '[menu]'
})
export class MenuDirective implements OnDestroy {
  @Input('menu') content!: string | TemplateRef<any> | Type<any>;
  private componentRef!:ComponentRef<MenuComponent>;

  @HostListener('document:click', ['$event'])
  documentClickEvent(event: Event) {
    if (this.element.nativeElement.contains(event.target)) {
      if (this.componentRef){ //если уже создан
        console.log("уже есть");
        return;
      } //иначе создаем:
      console.log("создаем");
      const factory = this.componentResolver.resolveComponentFactory(MenuComponent);
      const injector = Injector.create({
        providers:[{
          provide:'menuConfig',
          useValue: {
            host: this.element.nativeElement
          }
        }]
      });
      this.componentRef = this.vcr.createComponent(factory,0,injector,this.createMenuContent())
    } else {
      this.destroyMenu();
    }
  }

  private createMenuContent():any {
    console.log("createContent");
    if (typeof this.content === 'string'){
      const elementText = this.render.createText(this.content);
      return elementText;
    }
    if (this.content instanceof TemplateRef){
      const viewRef = this.content.createEmbeddedView({});
      return [viewRef.rootNodes];
    }
    const factory = this.componentResolver.resolveComponentFactory(this.content);
    const viewComponentRef = factory.create(this.injector);
    return viewComponentRef.location.nativeElement;
  }

  private destroyMenu(){
    if (this.componentRef){
      console.log("destroy");
      this.componentRef.destroy();
    }
  }

  ngOnDestroy(): void {
    this.destroyMenu();
  }

  constructor(private element: ElementRef,
              private render: Renderer2,
              private vcr: ViewContainerRef,
              private componentResolver: ComponentFactoryResolver,
              private injector: Injector) { }

}

// в третьем задании 10-ой домашки не работает destroy
