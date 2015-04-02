/*****************************************************************************
 * Example shared component used across multiple entry pages
 *****************************************************************************/
class SomeSharedComponent {

	constructor() {
		this.render();
	}

	render() {
		var debug = document.createElement('div');
		debug.innerHTML = 'SomeSharedComponent';
		document.getElementsByTagName('body')[0].appendChild(debug);
	}
}

export default SomeSharedComponent;