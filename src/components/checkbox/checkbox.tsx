import { Component, Prop, Event, EventEmitter, Watch, h, Host, Element } from '@stencil/core';
import { CheckboxChangeEventDetail } from './checkbox-interface';

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

  private onFocus = () => {
    this.grmFocus.emit();
  }

  private onBlur = () => {
    this.grmBlur.emit();
  }

  render() {
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
        <div class="checkbox">
          <svg class="checkbox-icon" viewBox="0 0 24 24">
            <path d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>

          <label
            class="checkbox-label"
            htmlFor=""
          >
            {this.label}
          </label>

          <input
            class="checkbox-native"
            type="hidden"
            name={this.name}
            disabled={this.disabled}
            checked={this.checked}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
      </Host>
    );
  }
}