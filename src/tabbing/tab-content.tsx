
import { Component, h, } from '@stencil/core';


@Component({
    tag: 'tab-content',
    styleUrl: 'tab-content.scss'
})
export class Tab {


    render() {
        return (
            <slot name="content"></slot>
        );
    }
}