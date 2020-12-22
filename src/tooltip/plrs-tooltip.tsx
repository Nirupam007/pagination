import { Component, h, Prop, State } from '@stencil/core';

@Component({
    tag: 'plrs-tooltip',
    styleUrl: 'plrs-tooltip.scss',
    shadow: true
})
export class ToolTip {
    @Prop({ reflect: true, mutable: true }) text: string;
    @State() show = false;

    showtooptip() {
        this.show = true;
    }

    hideTooltip() {
        this.show = false;
    }

    render() {
        let tooltipcontent = null;
        if (this.show) {
            tooltipcontent = (<div class="tooltext"><span class="triangle"></span>{this.text}</div>);
        }
        return (
            <div class="tool-container">
                {tooltipcontent}
                {/* {this.show ? <div class="tooltext">{this.text}</div> : null}
                {this.show && <div class="tooltext">{this.text}</div>} */}
                <p onMouseEnter={this.showtooptip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}><slot /></p>

            </div>
        )
    }
}