import { defineComponent,useSlots,type ExtractPublicPropTypes, ref } from "vue";
import '../../styles/index.css'
import css from "./styles/index.module.css"
interface props{
    [key:string|number]:any
}

export const buttonProps ={
    type: {
        type: String,
        default: "primary",
    },
    plain:{
        type:Boolean,
        default:false
    },
    size: {
        type: String,
        default: "medium",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: "",
    },
}
const ButtonSize:props={
    small:css['button-small'],
    medium:css['button-medium'],
    large:css['button-large']
}
const ButtonType:props={
    primary:css['button-primary'],
    success:css['button-success'],
    info:css['button-info'],
    warning:css['button-warning'],
    danger:css['button-danger'],
    text:css['button-text'],
}
const ButtonPlainType:props={
    0:css['button-plain-default'],
    1:css['button-plain'],
}
export type ButtonProps = ExtractPublicPropTypes<typeof buttonProps>
export const Button= defineComponent({
    name: "Button",
    props:  buttonProps,

    setup(props: ButtonProps, { slots }) {
        const classList = ref<string[]>([css.button,ButtonSize[props.size as string], ButtonType[props.type as string],ButtonPlainType[Number(props.plain)]])
        console.log(ButtonSize)
        return () => (
            <button class={classList.value}>{slots.icon?.()}
            {slots.default?.()}</button>
        )
    },
});
