import { defineComponent, type ExtractPublicPropTypes,inject, type PropType,type VNode,type Component } from "vue";
import { type TableProps } from "../";
import css from "./styles/index.module.css";
export const tableHeaderCellProps = {
    as:{
      type:String as ()=>"th"|"div",
      default:'div'
    },

    button:{
        type:Boolean,
        default:false,
    },
    sortIcon:{
        type:[String, Object] as PropType<string | VNode|Component>,
        default:undefined
    },
    sortable:{
        type:Boolean,
        default:false
    },
    sortDirection:{
        type:String as ()=>"ascending"|"descending",
        default:"ascending"
    },
}
export type TableHeaderCellProps = ExtractPublicPropTypes<typeof tableHeaderCellProps>
export const TableHeaderCell = defineComponent({
    name:'TableHeaderCell',
    props:tableHeaderCellProps,
    setup(props:TableHeaderCellProps,{slots}) {
        const {size}=inject('table') as TableProps
        const as=props.as
        console.log(size)
        return () => (
            <as class={[css['table-header-cell']]}>
                <div class={[css['table-header-cell-body']]}>
                {slots.default?.()}
                </div>
                {slots.aside&&<span>{slots.aside?.()}</span>}
            </as>
        )
    }
})