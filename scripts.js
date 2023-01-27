/**
 * MMX / EXAMPLE
 */
class MMX_Example extends MMX_Element {

	static get props() {
		return {
			color: {
				allowAny: true,
				default: 'blue'
			}
		};
	}

	themeResourcePattern = /mmx-(base|example)|family=Inter/i;

	constructor() {
		super();
		this.makeShadow();
	}

	render() {
		return /*html*/`<div class="mmx-example type-display-1">
			<slot></slot>
		</div>`;
	}

	styles() {
		return /*css*/`
			:host {
				--mmx-example__color: ${this.getPropValue('color')};
			}
		`;
	}
}

if (!customElements.get('mmx-example')) {
	customElements.define('mmx-example', MMX_Example);
}
