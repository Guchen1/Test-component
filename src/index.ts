import type { App } from "vue";
import * as x from './components'
import './styles/index.css'
interface componentsType {
    [key: string]: any;
}
const components:componentsType = {
    ...x
}
const install = (app: App) => {
    Object.keys(components).forEach((key) => {
        app.component(key, components[key]);
    });
};
export default {
    install
};
export * from './components'