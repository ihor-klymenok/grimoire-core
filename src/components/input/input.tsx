import { Component, h, State, Element, Prop } from "@stencil/core";

@Component({
  tag: 'grm-input',
  styleUrl: './input.css',
  scoped: true,
})
export class Input {
  @State() hasFocus = false;

  @Element() el!: HTMLElement;

  @Prop() type?: string;

  @Prop() name?: string;

  @Prop() autocomplete?: string = 'off';

  @Prop() disabled?: boolean;

  @Prop() placeholder?: string;

  @Prop() value?: string;

  render() {
    return (
      <input
        class="input-native"
        name={this.name}
        type={this.type}
        autoComplete={this.autocomplete}
        placeholder={this.placeholder}
        disabled={this.disabled}
        value={this.value}
      />
    );
  }
}