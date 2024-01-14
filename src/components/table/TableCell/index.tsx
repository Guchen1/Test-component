import { defineComponent, type ExtractPublicPropTypes,inject } from "vue";
import { type TableProps } from "../";
import css from "./styles/index.module.css";
export const tableCellProps = {
    as:{
      type:String as ()=>"td"|"div",
      default:'div'
    },
}
export type TableCellProps = ExtractPublicPropTypes<typeof tableCellProps>
export const TableCell = defineComponent({
    name:'TableCell',
    props:tableCellProps,
    setup(props:TableCellProps,{slots}) {
        const {size}=inject('table') as TableProps
        const as=props.as
        console.log(size)
        return () => (
            <as class={[css['table-cell']]}>
                {slots.default?.()}
            </as>
        )
    }
})