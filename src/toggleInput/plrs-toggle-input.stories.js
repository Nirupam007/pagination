import readme from './readme.md';

export default {
    title: 'Custom Input',
    parameters: {
        markdown: readme,
    }
}

export const Default = () => {
    <plrs-toggle-input element="text" labeltext="Name" value="Nirupam barman" placeholder="Any number">
        <div class="message error">Error: There is a error!</div>
        <div class="message success">Success: There is a error!</div>
    </plrs-toggle-input>
}
