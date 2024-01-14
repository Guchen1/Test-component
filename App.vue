<template>
    <div style="padding:100px;">
        <Button style="margin-right:5px;width:100px" @click="() => { console.log(1) }" as="a"
            appearance="primary">adadsdsadasdasds</Button>
        <Button style="margin-right:5px;" @click="() => { console.log(1) }" :icon="IceCreamRound" size="medium"></Button>
        <Button style="margin-right:5px;" @click="() => { console.log(1) }" :icon="IceCreamRound" size="large"></Button>
        <Button style="margin-right:5px" appearance="primary" :icon="Back" icon-position="before"
            disabled-focusable>12</Button>
        <Button style="margin-right:5px" :icon="IceCreamRound" appearance="outline">你好</Button>
        <CompoundButton style="margin-right:5px" appearance="primary" secondaryContent="Secondary Content">Example
        </CompoundButton>
        <Button style="margin-right:5px" :icon="IceCreamRound" appearance="subtle">你好</Button>
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
    <Table aria-label="Default table" aria-describedby="table-description" style="height:300px;">
        <TableHeader>
            <TableRow >
                <TableHeaderCell v-for="item in 5" :key="item" >你好
                </TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableBody >
            <TableRow v-for="item in 20" :key="item">
                <TableCell v-for="item in 5" :key="item">
                    <TableCellLayout appearance="primary" :media="IceCreamRound">{{ item }}
                        <template #description>hello</template>
                    </TableCellLayout>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
<script setup lang="tsx">
import { Button, Popover, Card, CardHeader, CompoundButton, Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell, TableCellLayout } from "./src";
import { IceCreamRound, Back } from "@element-plus/icons-vue"
const asideButton = <Button>12</Button>

//让组件可以在模板中使用


</script>