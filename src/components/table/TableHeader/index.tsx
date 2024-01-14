import { defineComponent, type ExtractPublicPropTypes,inject,provide } from "vue";
import { type TableProps } from "../";
import css from "./styles/index.module.css";
export const tableHeaderProps = {
    as:{
      type:String as ()=>"thead"|"div",
      default:'div'
    },
}
export type TableHeaderProps = ExtractPublicPropTypes<typeof tableHeaderProps>
export const TableHeader = defineComponent({
    name:'TableHeader',
    props:tableHeaderProps,
    setup(props:TableHeaderProps,{slots}) {
        const {size}=inject('table') as TableProps
        const as=props.as
        provide('type','header')
        console.log(size)
        return () => (
            <as class={[css['table-header']]}>
                {slots.default?.()}
            </as>
        )
    }
})