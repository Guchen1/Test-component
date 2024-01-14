import { defineComponent, type ExtractPublicPropTypes, inject } from "vue";
import { type TableProps } from "../";
import css from "./styles/index.module.css";
import type { props } from "../../index";
export const tableRowProps = {
  as: {
    type: String as () => "tr" | "div",
    default: "div",
  },
  appearance: {
    type: String as () => "none" | "neutral" | "brand",
    default: "none",
  },
};
const TableRowAppearance:props = {
  none: css["table-row-none"],
  neutral: css["table-row-neutral"],
  brand: css["table-row-brand"],
};
export type TableRowProps = ExtractPublicPropTypes<typeof tableRowProps>;
export const TableRow = defineComponent({
  name: "TableRow",
  props: tableRowProps,
  setup(props: TableRowProps, { slots }) {
    const { size } = inject("table") as TableProps;
    const type=inject('type') as string
    const as = props.as;
    console.log(css["table-row"]);
    console.log(size);
    return () => <as class={[css['table-row'], TableRowAppearance[props.appearance as string],type=='body'?css['table-row-in-body']:null]}>{slots.default?.()}</as>;
  },
});
