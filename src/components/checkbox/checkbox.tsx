import { Component, Prop, Event, EventEmitter, Watch, h, Host, Element } from '@stencil/core';
import { CheckboxChangeEventDetail } from './checkbox-interface';
import { renderHiddenInput } from '../../utils/utils';

@Component({
  tag: 'grm-checkbox',
  shadow: true,
  styleUrl: './checkbox.css',
})
export class Checkbox {
  private buttonEl?: HTMLElement;
  
  @Element() el!: HTMLElement;

  /**
   * The name of the control, which is submitted with the form data
   */
  @Prop() name?: string;

  @Prop() label?: string;

  @Prop({ mutable: true }) checked = false;

  @Prop() value = 'on';

  @Prop() disabled = false;

  @Event() grmChange!: EventEmitter<CheckboxChangeEventDetail>;

  /**
   * Emitted when the checkbox has focus.
   */
  @Event() grmFocus!: EventEmitter<void>;

  /**
   * Emitted when the checkbox loses focus.
   */
  @Event() grmBlur!: EventEmitter<void>;

  @Watch('checked')
  checkedChanged(isChecked: boolean) {
    this.grmChange.emit({
      checked: isChecked,
      value: this.value,
    });
  }

  private setFocus() {
    if (this.buttonEl) {
      this.buttonEl.focus();
    }
  }

  private onClick = () => {
    if (this.disabled) {
      return;
    }

    this.setFocus();
    this.checked = !this.checked;
  }

  private onFocus = (e) => {
    console.log('Focus', e)
    this.grmFocus.emit();
  }

  private onBlur = (e) => {
    console.log('BLur', e)
    this.grmBlur.emit();
  }

  render() {
    renderHiddenInput(true, this.el, this.name, (this.checked ? this.value : ''), this.disabled);

    return (
      <Host
        onClick={this.onClick}
        role="checkbox"
        aria-disabled={this.disabled ? 'true' : null}
        aria-checked={`${this.checked}`}
        class={{
          'is-checked': this.checked,
          'is-disabled': this.disabled,
        }}
      >
        <div class="checkbox"
          tabindex="0"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <svg class="checkbox-icon" viewBox="0 0 24 24">
            <path d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>

          <label
            class="checkbox-label"
            htmlFor=""
          >
            {this.label}
          </label>
        </div>
      </Host>
    );
  }
}