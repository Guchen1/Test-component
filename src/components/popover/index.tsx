import { Teleport, defineComponent, onMounted, ref, watch, withModifiers, type Ref } from 'vue'
import { useElementHover,useMouseInElement } from '@vueuse/core'
import css from './styles/index.module.css'
export const Popover = defineComponent({
    name: 'Popover',
    props:{
        wrapperStyle:{
            type:Object,
            default:()=>({})
        },
        bodyStyle:{
            type:Object,
            default:()=>({})
        },
        popStyle:{
            type:Object,
            default:()=>({})
        }
    },
    setup(props, { slots }) {
        if(document.getElementById('pop')==null){
            const pop=document.createElement('div')
            pop.id='pop'
            document.body.appendChild(pop)
        }
        const body=ref<HTMLElement|undefined>(undefined)
        const {elementPositionX,elementPositionY,elementWidth}=useMouseInElement(body,{})
        const target=ref(null)
        const isHovered = useElementHover(body)
        const isUsed = useElementHover(target)
        const visible = ref(false)
        watch(isHovered, (value) => {
            if (value) {
                visible.value = true
                console.log(body)
            } else if(!isUsed.value) {
                visible.value = false
            }
        })
        watch(isUsed, (value) => {
            if (value) { 
                visible.value = true
            } else if(!isHovered.value) {
                visible.value = false
            }
        })
        return () => (
            <div style={props.wrapperStyle} class={css.fullPart} onMousedown={withModifiers(()=>{},['self','prevent'])}>
                <div style={props.bodyStyle} ref={body} class={[css.full]} id='body'  >{slots.default?.()}</div>
                {<Teleport to="#pop">{
                    visible.value ?
                        <div ref={target} style={{left:elementPositionX.value+elementWidth.value+'px',top:elementPositionY.value+'px',...props.popStyle}} onMousedown={withModifiers(()=>{},['stop','prevent'])} class={[css.popover]}>{slots.content?.()}</div>
                        : <div></div>
                }
                    </Teleport>
                }

            </div>
        )
    }
})