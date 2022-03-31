import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hw9',
  template: `  
    <div *ngFor="let item of items">
        <app-tabs-group>
            <app-tabs>
                <app-tabs-header>
                    <div class="title-03">Способ оплаты:</div>
                </app-tabs-header>
                <app-tabs-body>
                    <ng-template #bodyContent>
                        <ul>
                            <li>оплата онлайн</li>
                            <li>картой при получении</li>
                            <li>наличкой при получении</li>
                        </ul>
                        <app-button text="Отправить" (click)="btnClick()"></app-button>                           
                    </ng-template>
                </app-tabs-body>
            </app-tabs>
        </app-tabs-group>        
    </div>      
  `,
  styles: [`.topnav { display: inline-block; }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hw9Component implements OnInit {
  public items = new Array(4);
  public numAny = 123;

  btnClick(){
    console.log('btnClick');
  }
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() =>{
      this.numAny = 345;
      this.cdr.detectChanges()},2000)
  }

}
