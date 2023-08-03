import { defineComponent,useSlots,type ExtractPublicPropTypes } from "vue";
import '../../styles/index.css'
import css from "./styles/index.module.css"
interface props{
    [key:string]:any
}
export const buttonProps ={
    type: {
        type: String,
        default: "primary",
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
    default:css['button-plain-default'],
    plain:css['button-plain'],
}
export type ButtonProps = ExtractPublicPropTypes<typeof buttonProps>
export const Button= defineComponent({
    name: "Button",
    props:  buttonProps,

    setup(props: ButtonProps, { slots }) {

        console.log(ButtonSize)
        return () => (
            <button class={css.button+' '+ButtonSize[props.size as string] +' '+ButtonType[props.type as string]}>{slots.icon?.()}
            {slots.default?.()}</button>
        )
    },
});
