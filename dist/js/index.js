System.register("index", [], function (exports_1, context_1) {
    "use strict";
    var world;
    var __moduleName = context_1 && context_1.id;
    function hello(word) {
        if (word === void 0) { word = world; }
        return "Hello " + world + "! ";
    }
    exports_1("hello", hello);
    return {
        setters: [],
        execute: function () {
            world = '🗺️';
        }
    };
});
//# sourceMappingURL=index.js.map