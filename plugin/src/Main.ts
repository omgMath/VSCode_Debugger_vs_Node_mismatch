import {s} from "../../core/build/Singleton";
import {Loader} from "project/build/Loader";

new Loader().run();
console.log(s.getValues());