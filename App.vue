<template>
    <Button style="margin-right:5px" plain>你好</Button>
    <Button style="margin-right:5px" type="info" plain>你好</Button>
    <Button style="margin-right:5px" type="success" plain>你好</Button>
    <Button style="margin-right:5px" type="warning" plain>你好</Button>
    <Popover style="margin-right:5px">
        <Button  type="danger" plain>你好</Button>
        <template #content>xx</template>
    </Popover>
    
</template>
<script setup lang="ts">
import { Button,Popover} from "x-vue3";

//让组件可以在模板中使用


</script>