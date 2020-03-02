import { Component, h, Prop, Host } from "@stencil/core";
import { Color } from '../../interface';

@Component({
  tag: 'grm-button',
  shadow: true,
  styleUrl: './button.css'
})
export class Button {
  @Prop() color?: Color = 'primary';
  @Prop() disabled?: boolean;

  render() {
    return (
      <Host
        class={{
          'button--color-primary': this.color === 'primary',
          'button--color-secondary': this.color === 'secondary',
          'button--disabled': this.disabled,
        }}
      >
        <button
          class="button"
          disabled={this.disabled}
        >
          Button
        </button>
      </Host>
    )
  }
}
