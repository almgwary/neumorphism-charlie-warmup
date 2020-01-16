import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RateComponent),
      multi: true
    }
  ]
})
export class RateComponent  implements ControlValueAccessor {
  val = '';
  onChange: any = () => {};
  onTouch: any = () => {};
  constructor() { }


  set value(val) {
    if ( val !== undefined && this.val !== val ) {
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

}
