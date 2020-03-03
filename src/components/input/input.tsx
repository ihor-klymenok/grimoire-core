import { Component, h, State, Element, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'grm-input',
  styleUrl: './input.css',
  scoped: true,
})
export class Input {
  // private nativeInput?: HTMLInputElement;

  @State() hasFocus = false;

  @Element() el!: HTMLElement;

  @Prop() type?: string;

  @Prop() name?: string;

  @Prop() disabled?: boolean;

  @Prop() placeholder?: string;

  @Prop() value?: string;

  @Event() grmInput!: EventEmitter<KeyboardEvent>

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.grmInput.emit(ev as KeyboardEvent);
  }

  render() {
    return (
      <input
        class="input-native"
        placeholder={this.placeholder}
        type={this.type}
        name={this.name}
        disabled={this.disabled}
        value={this.value}
        onInput={this.onInput}
      />
    );
  }
}