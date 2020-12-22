import { Component, h, Prop, Element } from '@stencil/core';

@Component({
    tag: 'plrs-toggle-input',
    styleUrl: 'plrs-toggle-input.css',
    shadow: true
})

export class ToggleInput {

    inputRef: HTMLInputElement;

    @Element() el: HTMLInputElement;

    @Prop() element: string; // Input or textarea
    @Prop({ reflect: true }) type: string;
    @Prop({ reflect: true }) disabled: boolean;
    @Prop() name: string;
    @Prop() min: number;
    @Prop() max: number;
    @Prop() step: number;
    @Prop({ reflect: true, mutable: true }) value: any;
    @Prop({ reflect: true }) placeholder: string;
    @Prop() labeltext: string;
    @Prop() rows: number;
    @Prop() cols: number;
    // fetchdata() {
    //     const data = this.inputRef.value;
    //     console.log(data);
    // }
    ele = null;
    slot = <slot />;
    render() {
        switch (this.element.toLocaleLowerCase().trim()) {
            case 'text':
                this.ele = (<div class="container">
                    <div><label>{this.labeltext}</label></div>
                    <div> {!this.disabled ? <input type="text" value={this.value} placeholder={this.placeholder} /> : <input type="text" value={this.value} placeholder={this.placeholder} disabled />} {this.slot}</div>

                </div>)
                break;
            case 'number':
                this.ele = (<div class="container">
                    <div><label>{this.labeltext}</label></div>
                    <div>{!this.disabled ? <input type="number" min={this.min} max={this.max} step={this.step} value={this.value} class="mod" /> : <input type="number" value={this.value} disabled min={this.min} max={this.max} />} {this.slot}</div>
                </div>)
                break;
            case 'textarea':
                this.ele = (<div class="container">
                    <div><label>{this.labeltext}</label></div>
                    <div>{!this.disabled ? <textarea rows={this.rows} cols={this.cols} value={this.value} placeholder={this.placeholder}></textarea> : <textarea rows={this.rows} cols={this.cols} value={this.value} placeholder={this.placeholder} disabled></textarea>} {this.slot}</div>
                </div>)
                break;
            case 'button':
                this.ele = <div>{!this.disabled ? <input type="button" value={this.value} /> : <input type="button" value={this.value} disabled />} {this.slot}</div>
                break;
            case 'date':
                this.ele = (<div class="container">
                    <div><label>{this.labeltext}</label></div>
                    <div> {!this.disabled ? <input type="date" value={this.value} /> : <input type="date" value={this.value} disabled />} {this.slot}</div>
                </div>)
                break;
            case 'color':
                this.ele = (<div class="container">
                    <div><label>{this.labeltext}</label></div>
                    <div>{!this.disabled ? <input type="color" value={this.value} /> : <input type="color" value={this.value} disabled />}</div>
                </div>)
                break;
            case 'file':
                this.ele = (<div class="container">
                    <div><label>{this.labeltext}</label></div>
                    <div>{!this.disabled ? <input type="file" value={this.value} /> : <input type="file" value={this.value} disabled />}{this.slot}</div>
                </div>)
                break;
            default:
                this.ele = 'Element should be either a input / number / date/ file/ textarea / button / color that works'
        }
        //<input type="text" ref={element => this.inputRef = element} onInput={this.fetchdata.bind(this)} />
        return <div>{this.ele}</div>
    }
}