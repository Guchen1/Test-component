<template>
    <Button style="margin-right:5px">你好</Button>
    <Button style="margin-right:5px" type="info" >你好</Button>
    <Button style="margin-right:5px" type="success" >你好</Button>
    <Button style="margin-right:5px" type="warning" >你好</Button>
    <Button style="margin-right:5px" type="danger" >你好</Button>
    <fluent-button appearance="accent">Click Me</fluent-button>
</template>
<script setup lang="ts">
import { Button } from './components';
import { provideFluentDesignSystem, fluentCard, fluentButton } from '@fluentui/web-components';
provideFluentDesignSystem().register(fluentCard(), fluentButton());
//让组件可以在模板中使用


</script>