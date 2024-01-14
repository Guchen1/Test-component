import { defineComponent, type ExtractPublicPropTypes,provide } from "vue";
import css from "./styles/index.module.css";
export const tableProps = {
    as:{
      type:String as ()=>"div"|"table",
      default:'div'
    },
    size:{
        type:String as ()=> "small"|"medium"|"extra-small",
        default:'medium'
    },
    noNativeElements:{
        type:Boolean,
        default:false
    },
    sortable:{
        type:Boolean,
        default:false
    },

}
export type TableProps = ExtractPublicPropTypes<typeof tableProps>
const TableSize= {
    small: css["table-small"],
    medium: css["table-medium"],
    'extra-small': css["table-extra-small"],
};
export const Table = defineComponent({
    name:'Table',
    props:tableProps,
    setup(props:TableProps,{slots}) {
        const as=props.as
        provide('table',props)
        return () => (
            <as class={[css['table']]}>
                {slots.default?.()}
            </as>
        )
    }
})