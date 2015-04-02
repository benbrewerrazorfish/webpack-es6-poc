import { debug } from '../utility/logging';

/*****************************************************************************
 * Example "Home" Feature #1
 *****************************************************************************/
class HomeFeature1 {

	constructor() {
		this.render();
	}

	render() {
		debug('created by home feature 1');
	}
}

export default HomeFeature1;