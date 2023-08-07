import { Teleport, defineComponent, onMounted, ref, watch, withModifiers, type Ref } from 'vue'
import { useElementHover,useMouseInElement } from '@vueuse/core'
import css from './styles/index.module.css'
export const Popover = defineComponent({
    setup(props, { slots }) {
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
            <div class={css.full} onMousedown={withModifiers(()=>{},['self','prevent'])}>
                <div ref={body} class={css.full} id='body'  >{slots.default?.()}</div>
                {<Teleport to="body">{
                    visible.value ?
                        <div ref={target} style={{left:elementPositionX.value+elementWidth.value+'px',top:elementPositionY.value+'px'}} onMousedown={withModifiers(()=>{},['stop','prevent'])} class={css.popover}>{slots.content?.()}</div>
                        : <div></div>
                }
                    </Teleport>
                }

            </div>
        )
    }
})