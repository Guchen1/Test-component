import {
  defineComponent,
  type ExtractPublicPropTypes,
  inject,
  type Component,
  type PropType,
  type VNode,
} from "vue";
import { type TableProps } from "../";
import css from "./styles/index.module.css";
interface TableCellLayoutSlots {
  default?: () => VNode[];
  description?: () => VNode[];
  content?: () => VNode[];
}
export const tableCellLayoutProps = {
  as: {
    type: String as () => "div",
    default: "div",
  },
  appearance: {
    type: String as () => "primary",
    default: undefined,
  },
  truncate: {
    type: Boolean,
    default: false,
  },
  media: {
    type: [String, Object] as PropType<string | VNode | Component>,
    default: undefined,
  },
};
export type TableCellLayoutProps = ExtractPublicPropTypes<
  typeof tableCellLayoutProps
>;
export const TableCellLayout = defineComponent({
  name: "TableCellLayout",
  props: tableCellLayoutProps,
  setup(
    props: TableCellLayoutProps,
    { slots }: { slots: TableCellLayoutSlots }
  ) {
    const { size } = inject("table") as TableProps;
    const as = props.as;
    const mediap = props.media;
    const content = () => {
      return (
        <>
          <span class={[css['table-cell-layout-main-primary']]}>{slots.default?.()}</span>
          {slots.description && (
            <span class={[css["table-cell-layout-description"]]}>{slots.description?.()}</span>
          )}
        </>
      );
    };
    console.log(size);
    return () => (
      <as class={[css["table-cell-layout"]]}>
        {mediap && (
          <span class={[css["table-cell-layout-media"],props.appearance=='primary'?css['table-cell-layout-media-primary']:null]}>
            <mediap
              width="1em"
              height="1em"
              class={[css["table-cell-layout-media-body"],props.appearance=='primary'?css['table-cell-layout-media-body-primary']:null]}
            />
          </span>
        )}
        <div class={[css["table-cell-layout-content"]]}>
          {slots.content ? slots.content?.() : content()}
        </div>
      </as>
    );
  },
});
