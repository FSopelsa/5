//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @version    1.3
 *  @copyright  Copyright (c) 2009-2015.
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Oct 25, 2016
 *  @author     Henrik Andersen <henrik.andersen@lnu.se>
 */
Event = {

    //----------------------------------------------------------------------
    // Window Event
    //----------------------------------------------------------------------
    
    /**
     *  ...
     *
     *  @type {String}
     */
    LOAD : "load",

    /**
     *  ...
     *
     *  @type {String}
     */
    UNLOAD : "unload",

    //----------------------------------------------------------------------
    // KEYBOARD EVENTS
    //----------------------------------------------------------------------
    
    /**
     *  ...
     *
     *  @type {String}
     */
    KEY_DOWN : "keydown",

    /**
     *  ...
     *
     *  @type {String}
     */
    KEY_PRESS : "keypress",

    /**
     *  ...
     *
     *  @type {String}
     */
    KEY_UP : "keyup",

    //----------------------------------------------------------------------
    // MOUSE EVENTS
    //----------------------------------------------------------------------
    
    /**
     *  ...
     *
     *  @type {String}
     */
    CLICK : "click",

    /**
     *  ...
     *
     *  @type {String}
     */
    DBL_CLICK : "dblclick",

    /**
     *  ...
     *
     *  @type {String}
     */
    MOUSE_DOWN : "mousedown",

    /**
     *  ...
     *
     *  @type {String}
     */
    MOUSE_MOVE : "mousemove",

    /**
     *  ...
     *
     *  @type {String}
     */
    MOUSE_OUT : "mouseout",

    /**
     *  ...
     *
     *  @type {String}
     */
    MOUSE_OVER : "mouseover",

    /**
     *  ...
     *
     *  @type {String}
     */
    MOUSE_UP : "mouseup",

    /**
     *  ...
     *
     *  @type {String}
     */
    MOUSE_WHEEL : "mousewheel",

    //----------------------------------------------------------------------
    // Public static methods
    //----------------------------------------------------------------------

    /**
     *  The addEventListener method registers the specified listener on the 
     *  EventTarget it's called on. The event target may be an Element in a 
     *  document, the Document itself, a Window, or any other object that 
     *  supports events (such as XMLHttpRequest).
     *
     *  @param {Element}    ...
     *  @param {String}     ...
     *  @param {function}   ...
     *  @param {Boolean}    ...
     *
     *  @return {undefined}
     */
    addEventListener : function(element, type, handler, useCapture) {
    	useCapture = useCapture || false;
    	if (element.addEventListener !== undefined) {
    		element.addEventListener(type, handler, useCapture);
    	} else if (element.attachEvent !== undefined) {
    		element.attachEvent("on"+type, handler);
    	} else {
    		element["on"+type] = handler;
    	}
    },

    /**
     *  ...
     *
     *  @param {Event}    ...
     *
     *  @return {Event}
     */
    getEvent : function(event) {
        return event ? event : window.event;
    },

    /**
     *  ...
     *
     *  @param {Event}    ...
     *
     *  @return {Element}
     */
    getTarget : function(event) {
        return event.target || event.srcElement || window;
    },

    /**
     *  ...
     *
     *  @param {Event}    ...
     *
     *  @return {undefined}
     */
    preventDefault : function(event) {
        if (event.preventDefault !== undefined) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    /**
     *  ...
     *
     *  @param {Element}    ...
     *  @param {String}     ...
     *  @param {function}   ...
     *  @param {Boolean}    ...
     *
     *  @return {undefined}
     */
    removeEventListener : function(element, type, handler, useCapture) {
    	useCapture = useCapture || false;
    	if (element.removeEventListener !== undefined) {
    		element.removeEventListener(type, handler, useCapture);
    	} else if (element.detachEvent !== undefined) {
    		element.detachEvent("on"+type, handler);
    	} else {
    		element["on"+type] = null;
    	}
    },

    /**
     *  ...
     *
     *  @param {Event}  ...
     *
     *  @type {String}
     */
    stopPropagation : function(event) {
        if (event.stopPropagation !== undefined) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};