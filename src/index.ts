import type { App } from "vue";
import {Button} from './components'
interface componentsType {
    [key: string]: any;
}
const components:componentsType = {
    Button
}
const install = (app: App) => {
    Object.keys(components).forEach((key) => {
        app.component(key, components[key]);
    });
};
export default {
    install
};
export {Button}