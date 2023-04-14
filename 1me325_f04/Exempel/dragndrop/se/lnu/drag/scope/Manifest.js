
//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Package
//--------------------------------------------------------------------------

if (window.se == undefined) window.se = {};
if (window.se.lnu == undefined) window.se.lnu = {};
if (window.se.lnu.drag == undefined) window.se.lnu.drag = {};

//--------------------------------------------------------------------------
// Public static class
//--------------------------------------------------------------------------

/**
 *	Declares the system's package structure
 *
 *	@version    1.0
 *  @copyright  Copyright (c) 2009-2016.
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Sep 10, 2016
 *  @author     Henrik Andersen <henrik.andersen@lnu.se>
 */
se.lnu.drag = (function() {

	//----------------------------------------------------------------------
    // Strict mode
    //----------------------------------------------------------------------

    "use strict";

	//----------------------------------------------------------------------
	// Public static scope
	//----------------------------------------------------------------------
	
	/**
	 *	...
	 *
	 *	@type {Object}
	 */
	var _this = {};

	//----------------------------------------------------------------------
	// Meta data
	//----------------------------------------------------------------------

	/**
	 *	...
	 *
	 *	@type {String}
	 */
	_this.id = "se.lnu.drag";

	/**
	 *	...
	 *
	 *	@type {String}
	 */
	_this.name = "Drag-n-Drop";
	
	/**
	 *	...
	 *
	 *	@type {String}
	 */
	_this.version = "0.0.0";

	//----------------------------------------------------------------------
	// Package structure
	//----------------------------------------------------------------------

	/**
	 *	...
	 *
	 *	@type {Object}
	 */
	_this.event = {};

	/**
	 *	...
	 *
	 *	@type {Object}
	 */
	_this.geom = {};

	/**
	 *	...
	 *
	 *	@type {Object}
	 */
	_this.object = {};

	/**
	 *	...
	 *
	 *	@type {Object}
	 */
	_this.scope = {};

	/**
	 *	...
	 *
	 *	@type {Object}
	 */
	_this.system = {};

	//----------------------------------------------------------------------
	// ...
	//----------------------------------------------------------------------

	/**
	 *	...
	 */
	return _this;

})();