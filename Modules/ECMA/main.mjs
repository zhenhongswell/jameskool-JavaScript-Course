import obj, { firstname, lastname, hello } from "./named.mjs";
import * as Utils from "./named.mjs";
Utils.hello();
console.log(Utils.firstname);
obj.sayMyName();
obj.sayMyFirstName();
obj.sayMyLastName();
