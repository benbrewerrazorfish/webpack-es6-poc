webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _log = __webpack_require__(1);

	var _HomeFeature1 = __webpack_require__(2);

	var HomeFeature1 = _interopRequire(_HomeFeature1);

	var _HomeFeature2 = __webpack_require__(3);

	var HomeFeature2 = _interopRequire(_HomeFeature2);

	var _SomeSharedComponent = __webpack_require__(4);

	var SomeSharedComponent = _interopRequire(_SomeSharedComponent);

	/*****************************************************************************
	 * home page 
	 *****************************************************************************/

	var Home = function Home() {
		_classCallCheck(this, Home);

		_log.log('home page constructor');

		var homeFeature1 = new HomeFeature1();
		var homeFeature2 = new HomeFeature2();
		var someSharedComponent = new SomeSharedComponent();
	};

	var home = new Home();

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (descriptor.value) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _debug = __webpack_require__(1);

	/*****************************************************************************
	 * Example "Home" Feature #1
	 *****************************************************************************/

	var HomeFeature1 = (function () {
		function HomeFeature1() {
			_classCallCheck(this, HomeFeature1);

			this.render();
		}

		_createClass(HomeFeature1, [{
			key: 'render',
			value: function render() {
				_debug.debug('created by home feature 1');
			}
		}]);

		return HomeFeature1;
	})();

	module.exports = HomeFeature1;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (descriptor.value) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _debug = __webpack_require__(1);

	/*****************************************************************************
	 * Example "Home" Feature #2
	 *****************************************************************************/

	var HomeFeature2 = (function () {
		function HomeFeature2() {
			_classCallCheck(this, HomeFeature2);

			this.render();
		}

		_createClass(HomeFeature2, [{
			key: 'render',
			value: function render() {
				_debug.debug('created by home feature 2');
			}
		}]);

		return HomeFeature2;
	})();

	module.exports = HomeFeature2;

/***/ }
]);