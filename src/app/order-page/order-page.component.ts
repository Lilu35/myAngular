import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {LocalstorageService} from "../services/localstorage.service";

@Component({
  selector: 'app-order-page',
  template: `
      <div>
          <h2>Оформление заказа</h2>
          <form class="user-form" [formGroup]="orderForm" (ngSubmit)="sendForm()">
            <section class="form-personal">
                <h4>Основные данные:</h4>
                <div>
                    <label>Фамилия Имя:</label>
                    <input type="text" class="form-control" name="fullName"  formControlName="fullName" >
                    <small *ngIf="fNameControl?.hasError('required')">Введите Фамилия Имя</small>
                    <small *ngIf="fNameControl?.hasError('pattern')">Фамилия Имя должны состоять только из кириллических и латинских букв и не менее чем из двух слов</small>
                </div>
                <div>
                    <label>Телефон:</label>
                    <input type="text" class="form-control" name="phone" formControlName="phone">
                    <small *ngIf="phoneControl?.hasError('required')">Введите номер телефона</small>
                    <small *ngIf="phoneControl?.hasError('pattern')">Телефон должен начинаться со знака "+" и состоять из 11 цифр</small>
                </div>
                <div>
                    <label>Способ получения товара:</label>
                    <select  class="form-control" name="deliveryType" formControlName="deliveryType">
                        <option *ngFor="let dType of this.deliveryMenuList" [value]="dType">{{dType}}</option>                        
                    </select>
                    <small *ngIf="deliveryTypeControl?.hasError('required')">Выберите тип доставки</small>
                </div>
                <div>
                    <label>Способ оплаты:</label>
                    <select  class="form-control" name="paymentType" formControlName="paymentType">
                        <option *ngFor="let pType of this.paymentMenuList" [value]="pType">{{pType}}</option>
                    </select>
                    <small *ngIf="paymentTypeControl?.hasError('required')">Выберите способ оплаты</small>
                </div>
            </section>                
            <section class="form-delivery" formGroupName="address" *ngIf="deliveryTypeControl?.value=='Доставка'">
                <div>
                    <h4>Адрес доставки:</h4>
                    <label>Город:</label>
                    <input type="text" class="form-control" name="city" formControlName="city">
                    <small *ngIf="cityControl?.hasError('required')">Введите город</small>
                    <label>Улица:</label>
                    <input type="text" class="form-control" name="street" formControlName="street">
                    <small *ngIf="streetControl?.hasError('required')">Введите улицу</small>
                    <label>Дом:</label>
                    <input type="text" class="form-control" name="house" formControlName="house">
                    <small *ngIf="houseControl?.hasError('required')">Введите номер дома</small>
                    <label>Квартира:</label>
                    <input type="text" class="form-control" name="flat" formControlName="flat">
                    <small *ngIf="flatControl?.hasError('required')">Введите номер квартиры</small>
                </div>
            </section>
            <div>
                <button class="submit">Оформить заказ</button>
            </div>
          </form>   
      </div>
  `,
  styles: [ 'select{display: block;}','label{font-size: small;}','small{color: red;font-size: x-small; display: block;}',
            'input{display: block;}','button{margin-top: 10px;}'
  ]
})
export class OrderPageComponent implements OnInit {
  public deliveryMenuList = ['Доставка','Самовывоз'];
  public paymentMenuList = ['Оплата наличными','Безналичный расчет','Сертификатом'];

  public orderForm: FormGroup = this.fb.group({
    fullName: ['',[Validators.required,Validators.pattern(/([а-яА-Я]+\s[а-яА-Я]+|[a-zA-z]+\s[a-zA-z]+){1}/)]],
    phone: ['',[Validators.required,Validators.pattern(/([+]\d{11})/)]],
    deliveryType: ['',Validators.required],
    address: this.fb.group({
      city: ['',Validators.required],
      street: ['',Validators.required],
      house: ['',Validators.required],
      flat: ['',Validators.required]
    }),
    paymentType: ['',Validators.required]
  },{updateOn:'blur'});

  get fNameControl(){
    return this.orderForm.get('fullName');
  }
  get phoneControl(){
    return this.orderForm.get('phone');
  }
  get deliveryTypeControl(){
    return this.orderForm.get('deliveryType');
  }
  get paymentTypeControl(){
    return this.orderForm.get('paymentType');
  }
  get cityControl(){
    return this.orderForm.get('address')?.get('city');
  }
  get streetControl(){
    return this.orderForm.get('address')?.get('street');
  }
  get houseControl(){
    return this.orderForm.get('address')?.get('house');
  }
  get flatControl(){
    return this.orderForm.get('address')?.get('flat');
  }

  constructor(private fb:FormBuilder, private ls:LocalstorageService) {
    let object = JSON.parse(<string>this.ls.get('orderForm'));
    if (object != null){
      this.fNameControl?.setValue(object['fullName']);
      this.phoneControl?.setValue(object['phone']);
      this.deliveryTypeControl?.setValue(object['deliveryType']);
      this.paymentTypeControl?.setValue(object['paymentType']);
      this.cityControl?.setValue(object['city']);
      this.streetControl?.setValue(object['street']);
      this.houseControl?.setValue(object['house']);
      this.flatControl?.setValue(object['flat']);
    }
  }

  ngOnInit(): void {
    this.deliveryTypeControl?.valueChanges.subscribe(
      (deliveryTypeValue) => {
        if (deliveryTypeValue && deliveryTypeValue=='Доставка'){
          this.paymentMenuList = ['Безналичный расчет','Сертификатом'];
        } else {
          this.paymentMenuList = ['Оплата наличными','Безналичный расчет','Сертификатом'];
        }
      }
    )
  }

  sendForm():void{
    if (!this.orderForm.valid){
      return;
    }
    console.log(this.orderForm.value);
  }

  @HostListener('window:beforeunload', ['$event']) beforeunloadHandler() {
    let a = {
      'fullName': this.fNameControl?.value,
      'phone': this.phoneControl?.value,
      'deliveryType': this.deliveryTypeControl?.value,
      'paymentType': this.paymentTypeControl?.value,
      'city': this.cityControl?.value,
      'street': this.streetControl?.value,
      'house': this.houseControl?.value,
      'flat': this.flatControl?.value
    };
    this.ls.set('orderForm', JSON.stringify(a));
  }

}
