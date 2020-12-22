import { Component, h, Prop, Host } from "@stencil/core";

@Component({
  tag: 'radio-checkbox-toggle',
  styleUrl: 'radio-checkbox-toggle.scss',
  shadow: true
})
export class RadioCheckboxToggle {
  //@Prop({ mutable: true }) id: any;
  /**
 * @prop type
 * @desc Defines What type of component?
 * @default checkbox
 * @author Nirupam Barman
 */
  @Prop({ reflect: true }) type: string = 'checkbox';
  /**
* @prop name is mutable
* @desc prop to take in name
*/
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ reflect: true, mutable: true }) name: string;
  /**
* @prop value
* @desc prop to take in value
*/
  @Prop({ reflect: true }) value: string;
  /**
* @prop check status is mutable
* @desc checked or not 
*/
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  /**
* @prop name
* @desc prop to take in name
*/
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  // eslint-disable-next-line @stencil/required-jsdoc
  @Prop({ reflect: true }) status: 'default' | 'error' | '' = '';

  render() {
    let toggleContainer = null;
    const statusClass = this.status ? `${this.status}` : "";

    if (this.status && this.status === 'error') {
      this.disabled = true;
    }


    if (this.type && this.type.toLowerCase().trim() === 'radio') {

      toggleContainer = (<label htmlfor="radio-label-id" class={`control  ${statusClass} control--radio`}>
        <input type="radio" name={this.name} value={this.value} checked={this.checked} disabled={this.disabled} />
        <div id="radio-label-id"><slot /></div>
        <div id="helper" class="helper"><slot name="helper"></slot></div>
        <div class="error"><slot name="error"></slot></div>
        <div class="control__indicator"></div></label>)
    } else {

      toggleContainer = (<label htmlfor="check-label-id" class={`control ${statusClass} control--checkbox`}>
        <input type="checkbox" name={this.name} value={this.value} checked={this.checked} disabled={this.disabled} />
        <div id="check-label-id"><slot /></div>
        <div id="helper" slot="helper"></div>
        <div class="error" slot="error"></div>
        <div class="control__indicator"></div></label>)
    }
    return (
      <Host>
        {toggleContainer}
      </Host>
    );
  }
}