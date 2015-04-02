import _ from 'underscore';
import bootstrap from 'bootstrap';
import { log, debug } from '../utility/logging';

/*****************************************************************************
 * Unique special feature component
 *****************************************************************************/
class UniqueFeature {

	constructor() {
		this.render();
	}

	render() {
		debug('Unique Special Feature');
		this.testBootstrapImport();
	}

	testBootstrapImport() {

		var button = document.createElement('button');
		button.innerHTML = "button";
		button.className = "btn btn-primary";
		document.getElementsByTagName('body')[0].appendChild(button);

		button.addEventListener('click', this.onBootstrapButtonClick)

	}

	onBootstrapButtonClick(e) {
		e.preventDefault();
		alert('click');
	}

	testUnderscoreImport() {

		//test underscore import
		var underscoreTest = _.last([34,1,55,2,20], 1);		
		debug('underscore test result: ' + underscoreTest);
	}
}

export default UniqueFeature;
