//// [tests/cases/compiler/es6ImportDefaultBindingDts.ts] ////

//// [server.ts]

class c { }
export default c;

//// [client.ts]
import defaultBinding from "./server";
export var x = new defaultBinding();
import defaultBinding2 from "./server"; // elide this import since defaultBinding2 is not used


//// [server.js]
"use strict";
var c = (function () {
    function c() {
    }
    return c;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = c;
//// [client.js]
"use strict";
var server_1 = require("./server");
exports.x = new server_1.default();


//// [server.d.ts]
declare class c {
}
export default c;
//// [client.d.ts]
import defaultBinding from "./server";
export declare var x: defaultBinding;
