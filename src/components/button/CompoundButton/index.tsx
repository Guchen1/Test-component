import { Button, buttonProps } from "../";
import { defineComponent, type ExtractPropTypes } from "vue";
import css from "./styles/index.module.css";
export const compoundButtonProps = {
  ...buttonProps,
  secondaryContent: {
    type: String,
    default: "",
  },
  contentContainer: {
    type :[Object,String],
    default:"span"
  }
};
const CompoundButtonSize= {
  small: css["compoundButton-small"],
  medium: css["compoundButton-medium"],
  large: css["compoundButton-large"],
};
export type CompoundButtonProps = ExtractPropTypes<typeof compoundButtonProps>;
export const CompoundButton = defineComponent({
  name: "CompoundButton",
  props: compoundButtonProps,
  setup(props : CompoundButtonProps,{slots}) {
    const container=props.contentContainer
    return () => (
      <Button  {...props} class={CompoundButtonSize[props.size]}>
        {<container class={[css['compoundButton-container']]}>{slots.default?.()}
          <container class={[css['compoundButton-secondaryContent'],props.appearance=="primary"?css['button-primary']:undefined]}>{props.secondaryContent}</container>
        </container>}
      </Button>
    );
  },
});
