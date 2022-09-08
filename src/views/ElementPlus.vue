<template>
    <!-- element plus 是UI框架 element plus官网上有多个组件可cv 再改内容 -->
    <!-- 添加accordion属性 变手风琴模式  -->
    <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
</template>
<!-- lang="ts" ts是一种语言 与js不同 所以如果用js渲染就得删除ts语言的语法结构-->
<!-- 当前使用的是ts语言 -->
<script lang="ts" setup>
// 如果使用js的方式就把interface删除 包括ts语言（js不支持interface）
interface Tree {
    label: string
    children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
    console.log(data)
}

const data: Tree[] = [
    {
        label: 'Level one 1',
        children: [
            {
                label: 'Level two 1-1',
                children: [
                    {
                        label: 'Level three 1-1-1',
                    },
                ],
            },
        ],
    },
    {
        label: 'Level one 2',
        children: [
            {
                label: 'Level two 2-1',
                children: [
                    {
                        label: 'Level three 2-1-1',
                    },
                ],
            },
            {
                label: 'Level two 2-2',
                children: [
                    {
                        label: 'Level three 2-2-1',
                    },
                ],
            },
        ],
    },
    {
        label: 'Level one 3',
        children: [
            {
                label: 'Level two 3-1',
                children: [
                    {
                        label: 'Level three 3-1-1',
                    },
                ],
            },
            {
                label: 'Level two 3-2',
                children: [
                    {
                        label: 'Level three 3-2-1',
                    },
                ],
            },
        ],
    },
]

const defaultProps = {
    children: 'children',
    label: 'label',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
