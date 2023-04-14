//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 *	...
 *
 *	@version	1.0
 */
se.lnu.drag.scope.Alias = (function() {

	//----------------------------------------------------------------------
	// Strict mode
	//----------------------------------------------------------------------

	"use strict";

	//----------------------------------------------------------------------
	// Public scope
	//----------------------------------------------------------------------
	
	/**
	 *	The reference to the object's public scope
	 *
	 *	@type {Object}
	 */
	var _this = {};

	//----------------------------------------------------------------------
	// Alias
	//----------------------------------------------------------------------

	/**
	 *	Alias for the library system file
	 */
	window.DragnDrop = se.lnu.drag.system.Main;

	//----------------------------------------------------------------------
	// JsOOP config
	//----------------------------------------------------------------------

	if (window.VPJsOOP !== undefined) {
		window.VPJsOOP.add(
			window.se.lnu.drag,
			['DragnDrop', 'se'],
			["event", "geom", "object", "scope", "system"],
			["Manifest"]
		);
	}
	
	//----------------------------------------------------------------------
	// ...
	//----------------------------------------------------------------------

	/**
	 *	Return the public scope
	 */
	return _this;
		
})();