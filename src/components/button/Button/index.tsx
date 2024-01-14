import {
  defineComponent,
  useSlots,
  type ExtractPublicPropTypes,
  ref,
  type PropType,
  type VNode,
  type Component
} from "vue";
import css from "./styles/index.module.css";
import type { props } from '../../index';


export const buttonProps = {
  as:{
    type:String as ()=>"a"|"button",
    default:'button'
  },
  shape: {
    type: String as () => "rounded" | "circular" | "square",
    default: "rounded",
  },
  size: {
    type: String as () => "small" | "medium" | "large",
    default: "medium",
  },
  appearance: {
    type: String as () =>
      | "default"
      | "primary"
      | "outline"
      | "subtle"
      | "transparent",
    default: "default",
  },
  iconPosition: {
    type: String as () => "before" | "after",
    default: "before",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledFocusable: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: [String, Object] as PropType<string | VNode|Component >,
    default:undefined,
  },
};
const ButtonSize: props = {
  small: css["button-small"],
  medium: css["button-medium"],
  large: css["button-large"],
};
const ButtonShape: props = {
  rounded: css["button-rounded"],
  circular: css["button-circular"],
  square: css["button-square"],
};
const ButtonAppearance: props = {
  default: css["button-default"],
  primary: css["button-primary"],
  outline: css["button-outline"],
  subtle: css["button-subtle"],
  transparent: css["button-transparent"],
};
const stateDisabled=(disabled:boolean,disabledFocusable:boolean)=>{
    if(disabled){
        return css['button-disabled']
    }
    if(disabledFocusable){
        return css['button-disabled']
    }
    return ''
}
export type ButtonProps = ExtractPublicPropTypes<typeof buttonProps>;
export const Button = defineComponent({
  name: "Button",
  props: buttonProps,
  setup(props: ButtonProps, { attrs,slots }) {
    const classList = ref<string[]>([
      css.button,
      ButtonSize[props.size as string],
      ButtonShape[props.shape as string],
      ButtonAppearance[props.appearance as string],
    ]);
    if(props.icon!=undefined){
        classList.value.push(css['button-with-icon'])
        if(slots.default==undefined){
          classList.value.push(css['button-icon-only'])
      }
    }
    
    const iconBody = props.icon;
    const icon = () => {
      if (typeof props.icon === "string") {
        return (
          <svg aria-hidden="true">
            <use xlinkHref={`#${props.icon}`}></use>
          </svg>
        );
      } else {
        return <iconBody  />;
      }
    };
    //过滤掉attrs中与props重复的属性
    const element=props.as
    return () => (
      
      <element type="button"  tabindex={props.disabledFocusable?0:undefined} class={[...classList.value,stateDisabled(props.disabled as boolean,props.disabledFocusable as boolean)]} >
        {props.icon&&props.iconPosition=='before' ? (
          <span class={[css["button-icon-before"],css['button-icon'],slots.default?.()==undefined?css['button-icon-center']:undefined]}>
            <icon style="width:100%;height:100%" />
          </span>
        ) : (
          ""
        )}
        {slots.default?.()}
        {props.icon&&props.iconPosition=='after' ? (
          <span class={[css["button-icon-after"],css['button-icon'],slots.default?.()==undefined?css['button-icon-center']:undefined]}>
            <icon style="width:100%;height:100%" />
          </span>
        ) : (
          ""
        )}
      </element>
    );
  },
});
