import { log } from '../utility/logging';
import HomeFeature1 from '../components/homeFeature1';
import HomeFeature2 from '../components/homeFeature2';
import SomeSharedComponent from '../components/someSharedComponent';

/*****************************************************************************
 * home page 
 *****************************************************************************/
class Home {

	constructor() {

		log("home page constructor");

		var homeFeature1 = new HomeFeature1();
		var homeFeature2 = new HomeFeature2();
		var someSharedComponent = new SomeSharedComponent();
	}
}

var home = new Home();