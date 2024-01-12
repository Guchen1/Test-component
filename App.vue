<template>
    <div style="padding:100px;">
    <Button style="margin-right:5px;width:100px" @click="()=>{console.log(1)}" as="a" appearance="primary"   >adadsdsadasdasds</Button>
    <Button style="margin-right:5px;" @click="()=>{console.log(1)}" :icon="IceCreamRound" size="medium"></Button>
    <Button style="margin-right:5px;" @click="()=>{console.log(1)}" :icon="IceCreamRound" size="large"></Button>
    <Button style="margin-right:5px"  appearance="primary" :icon="Back" icon-position="before" disabled-focusable>12</Button>
    <Button style="margin-right:5px" :icon="IceCreamRound"   appearance="outline">你好</Button>
    <CompoundButton style="margin-right:5px"  appearance="primary" secondaryContent="Secondary Content">Example</CompoundButton>
    <Button style="margin-right:5px" :icon="IceCreamRound"  appearance="subtle">你好</Button>
    <Popover style="margin-right:5px">
        <Button type="danger" :icon="IceCreamRound" appearance="transparent">你好</Button>
        <template #content>
            <Card>
            <CardHeader>
                12
            </CardHeader>
            </Card>
        </template>
    </Popover>
    </div>
</template>
<script setup lang="ts">
import { Button, Popover, Card,CardHeader,CompoundButton } from "./src";
import { IceCreamRound ,Back} from "@element-plus/icons-vue"

//让组件可以在模板中使用


</script>