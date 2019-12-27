import { Component, h, Prop } from "@stencil/core";

enum ButtonType {
  primary = 'primary',
  accent = 'accent'
}

@Component({
  tag: 'grm-button',
  shadow: true,
  styleUrl: './button.css'
})
export class Button {
  @Prop() type: ButtonType = ButtonType.primary;
  @Prop() disabled?: boolean;

  render() {
    return <button
      disabled={this.disabled}
    >Button</button>
  }
}
