//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @version    1.0
 *  @copyright  Copyright (c) 2009-2016.
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Sep 10, 2016
 *  @author     Henrik Andersen <henrik.andersen@lnu.se>    
 */
window.onload = (function(event) {

    /**
     *  ...
     *
     *  @return {undefined}
     */
    function init(event) {
        initDragElement();
        initDropElement();
    }

    /**
     *  ...
     *
     *  @return {undefined}
     */
    function initDragElement() {
        var elm = document.getElementById("drag-elm");
            elm.setAttribute("draggable", "true");

        Event.addEventListener(elm, "dragstart", onDragStart);
    };

    /**
     *  ...
     *
     *  @return {undefined}
     */
    function initDropElement() {
        var elm = document.getElementById("drop-elm");
        Event.addEventListener(elm, "drop", onDrop);
        Event.addEventListener(elm, "dragover", onDragOver);
    };

    /**
     *  ...
     *
     *  @return {undefined}
     */
    function onDragStart(event) {
        event = Event.getEvent(event); // Använder Event-biblioteket för att hämta event på ett säkert sätt (så att det fungerar med alla browsers)
        event.dataTransfer.setData("id", event.target.id);
    };

    /**
     *  ...
     *
     *  @return {undefined}
     */
    function onDrop(event) {
        event = Event.getEvent(event);
        var data = event.dataTransfer.getData("id");
        event.target.appendChild(document.getElementById(data));
    };

    /**
     *  ...
     *
     *  @return {undefined}
     */
    function onDragOver(event) {
        event = Event.getEvent(event);
        Event.preventDefault(event);
    };

    //----------------------------------------------------------------------
    // ...
    //----------------------------------------------------------------------

    /**
     *  ...
     */
    init();
});