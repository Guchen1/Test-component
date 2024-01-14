import {
  defineComponent,
  type ExtractPublicPropTypes,
  inject,
  provide,
  onMounted,
  ref
} from "vue";
import { type TableProps } from "../";
import css from "./styles/index.module.css";
export const tableBodyProps = {
  as: {
    type: String as () => "tbody" | "div",
    default: "div",
  },
};
export type TableBodyProps = ExtractPublicPropTypes<typeof tableBodyProps>;
export const TableBody = defineComponent({
  name: "TableBody",
  props: tableBodyProps,
  setup(props: TableBodyProps, { slots }) {
    const { size } = inject("table") as TableProps;
    const as = props.as;
    const heightH = ref(0);
    const heightT = ref(0);
    provide("type", "body");
    onMounted(() => {
        const header = document.getElementsByClassName(css["table-body"])[0]?.previousSibling as HTMLElement;
        const table= document.getElementsByClassName(css["table-body"])[0]?.parentElement ;
        heightH.value = header?.getBoundingClientRect().height;
        heightT.value = table?.getBoundingClientRect().height ?? 0;
    });
    console.log(size);
    return () => <as class={[css["table-body"]]} style={{height:heightT.value-heightH.value+'px'}}>{slots.default?.()}</as>;
  },
});
