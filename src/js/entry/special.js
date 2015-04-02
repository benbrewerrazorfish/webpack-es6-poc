import { log } from '../utility/logging';
import SomeSharedComponent from '../components/someSharedComponent';
import UniqueFeature from '../components/uniqueFeature';

/*****************************************************************************
 * special feature page 
 *****************************************************************************/
class SpecialFeature {

	constructor() {

		log("SpecialFeature page constructor");
		var someSharedComponent = new SomeSharedComponent();
		var uniqueFeature = new UniqueFeature();


		uniqueFeature.testUnderscoreImport();
	}
}

var specialFeature = new SpecialFeature();