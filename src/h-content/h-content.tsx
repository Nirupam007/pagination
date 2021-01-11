import { Component, h } from "@stencil/core";

@Component({
    tag: 'h-content',
    styleUrl: 'h-content.scss',
    shadow: true
})
export class HabitatContent {

    render() {
        return (<div role="tabpanel" >
            <slot></slot>
        </div>)
    }
}
