(function(window) {

    /**
     * @type {Function} Hooking-system instance constructor
     * @parameter options {Object} Optional. 
     * Options for the current hooking-system instance.
     * The currently supported options are:
     *      - 
     *      - 
     *      - 
     *      - 
     * @description Generates a new hooking-system instance.
     * @return {Object}
     */
    var HookingSystem = function(options) {
        
        /**
         * @type {Object} Constructor
         * @description Current hooking-system instance being built.
         */
        var hookingSystem = this;
        
        /**
         * @type {Object}
         * @description Set of loaded hooks.
         */
        hookingSystem.hooks = {};
        
        /**
         * @type {Object}
         * @description Data
         */
        hookingSystem.data = {};

        /**
         * @type {Function}
         * @return {Function}
         * @description Generates a hook of the hooking system.
         * At the same time, it registers the hook in this instance.
         */
        hookingSystem.Hook = function() {

        };
        
        /**
         * @type {Function}
         * @return {Function}
         * @description Generates a new piece of data from a hook usage.
         * At the same time, it registers that data in the current hooking-system instance.
         */
        hookingSystem.Data = function() {

        };
        
        /**
         * @description New hooking-system instance generated.
         */
        return hookingSystem;

    };

    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = HookingSystem;
    } else {
        window.HookingSystem = HookingSystem;
        if (typeof define === "function" && define.amd) {
            define("HookingSystem", [], function () {
                return HookingSystem;
            });
        }
    }
    
})(this);