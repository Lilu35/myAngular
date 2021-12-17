import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplierComponent } from './multiplier.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('MultiplierComponent', () => {
  let component: MultiplierComponent;
  let fixture: ComponentFixture<MultiplierComponent>;
  let debugElement!: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplierComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set start value', () => {
    component.start = 5;
    expect(component.count).toBe(5);
  });

  it('should multiply value', () => {
    component.start = 5;
    component.multiply();
    expect(component.count).toBe(10);
  });

  it('should divide value', () => {
    component.start = 20;
    component.divide();
    expect(component.count).toBe(10);
  });

  it('should have buttons', () => {
    const multiplyBtn = debugElement.query(By.css('[data-id="multiplyBtn"]'));
    const divideBtn = debugElement.query(By.css('[data-id="divideBtn"]'));
    expect(multiplyBtn).toBeTruthy();
    expect(multiplyBtn.nativeElement.tagName.toLowerCase()).toBe('button');
    expect(divideBtn).toBeTruthy();
    expect(divideBtn.nativeElement.tagName.toLowerCase()).toBe('button');
  });

  it("should show value", () => {
    const value = debugElement.query(By.css('#value'));
    const multiplyBtn = debugElement.query(By.css('[data-id="multiplyBtn"]'));
    const divideBtn = debugElement.query(By.css('[data-id="divideBtn"]'));
    component.start = 2;
    multiplyBtn.triggerEventHandler('click',null);
    multiplyBtn.triggerEventHandler('click',null);
    multiplyBtn.triggerEventHandler('click',null);
    divideBtn.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(value.nativeElement.textContent).toContain('8');
  });

});
