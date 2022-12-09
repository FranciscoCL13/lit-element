import { LitElement, html} from 'lit-element';

export class IntroLitelement extends LitElement {
    render(){
        return html `
        <p> Soy Intro LitElement </p>
        `;
    }
}
customElements.define('intro-litelement', IntroLitelement);