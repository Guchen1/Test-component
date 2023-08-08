import { defineComponent } from "vue";
import css from "./styles/index.module.css";
import {ref} from "vue";
export const CardHeader= defineComponent({
    name: "CardHeader",
    props:{
        bodyStyle:{
            type:Object,
            default:()=>({})
        }
    },
    setup(props, ctx) {
        return () => (
            <div style={props.bodyStyle} class={css.header}>
                {ctx.slots.default?.()}
            </div>
        )
    },
});

export const Card= defineComponent({
    name: "Card",
    props:{
        bodyStyle:{
            type:Object,
            default:()=>({})
        }
    },
    setup(props, ctx) {
        return () => (
            <div style={props.bodyStyle} class={css.card}>
                {ctx.slots.default?.()}
            </div>
        )
    },
});