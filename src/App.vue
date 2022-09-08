<template>
  <div class="ProcUnitHorizBar3R">
    <div class="InnerMarkLogo3R">
      <a href="/"><img src="/logo.png" alt="logo" /></a>
    </div>
    <div class="InnerMark3R"></div>
  </div>
  <div class="ProcUnitMain3R">
    <div class="inner-menu-3r ProcUnitChar" ei020="MenuLeft" eg010="100">
      <div class="ProcUnitHorizBar3W">
        <a class="InnerMarkTitle3R" href="/LV06SM030/">Vue Think Tank (VTT)</a>
      </div>
      <el-tree
        :data="jsonTreeNavi.jsonArrayNodeList"
        :props="jsonTreeNavi.nodeProp"
        :node-key="jsonTreeNavi.strNodeKey"
        @node-click="handleTreeNaviClick"
        class="proc-unit-tree-navi-50 proc-unit-char"
        ref="elTreeNavi"
        accordion
      />
      <!-- <div v-for="jsonItem in proxy.$jsonArrayRouteNavi" :key="jsonItem.jsonRoute.name" :class="'ProcUnitLeftMenu50 ' + strFuncCurrentClassName(jsonItem.jsonRoute.name, jsonItem.title)">
        <router-link :to="jsonItem.jsonRoute.path">{{ jsonItem.title }}</router-link>
      </div> -->
      <!-- <div class="ProcUnitLeftMenu50">
        <a @click="handleAddRoute">动态路由 (Dynamic Routing)</a>
      </div> -->
    </div>
    <div class="InnerMarkRight3R">
      <div class="ProcUnitWorkbench3R">
        <div class="ProcUnitTitle50">{{ titleInner }}</div>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  onBeforeMount,
  onMounted,
  getCurrentInstance,
  watch,
  reactive,
  ref,
} from "vue";
const { proxy } = getCurrentInstance();

let jsonTreeNavi = ref({
  jsonArrayNodeList: [
    {
      ShowText: "Explanation Message",
      RouteName: "ExplanationMessage",
    },
    {
      ShowText: "动态组件",
      RouteName: "DynamicComponent",
    },
    {
      ShowText: "插槽 (Slot)",
      RouteName: "Slot",
    },
    {
      ShowText: "穿梭框",
      RouteName: "ShuttleFrame",
    },
    {
      ShowText: "Vue Router",
      ListChild: [
        {
          ShowText: "路由传值",
          RouteName: "NameRouterParam",
        },
        {
          ShowText: "动态路由",
          RouteName: "DynamicRouting.vue",
        },
        // 测试构建一个新组件
        //1.app.vue定义一个数据（点击事件就会有这个组件数据）
        // 2.router（index.js）添加路由地址 （才能有这个组件盒子不然点击无效）
        // 3.组件内容自定，三件套template script setup style scoped 备齐就行了
        {
          // ShowText页面显示的组件名
          ShowText: "路由传值2",
          RouteName: "RouterParam2",
        },
      ],
    },
    {
      ShowText: "API",
      ListChild: [
        {
          ShowText: "选项式应用程序接口 (Options API)",
          RouteName: "OptionsAPI",
        },
        {
          ShowText: "组合式应用程序接口 (Composition API)",
          RouteName: "CompositionAPI",
        },
        {
          ShowText: "Composition API by Script Setup",
          RouteName: "ScriptSetup",
        },
        { ShowText: "Keep-Alive", RouteName: "KeepAlive" },
        { ShowText: "nextTick", RouteName: "NextTick" },
      ],
    },
    {
      ShowText: "Lifecycle & Related Hooks",
      ListChild: [
        { ShowText: "With Data", RouteName: "Lifecycle" },
        { ShowText: "With Ref", RouteName: "Lifecycle2" },
      ],
    },
    {
      ShowText: "指令 (Directive)",
      RouteName: "Directive",
    },
    {
      ShowText: "全局属性 (Global Properties)",
      RouteName: "GlobalProperties",
    },
    {
      ShowText: "Third-party UI Libraries",
      ListChild: [
        { ShowText: "Element Plus (示例)", RouteName: "ElementPlus" },
      ],
    },
    {
      ShowText: "组件间通信",
      ListChild: [
        { ShowText: "父子组件间传值", RouteName: "ComponentComm" },
        { ShowText: "祖孙组件间传值", RouteName: "ComponentComm2" },
        { ShowText: "Pinia 状态管理", RouteName: "ComponentComm3" },
        { ShowText: "父组件调用子组件的函数", RouteName: "CallChildFunc" },
        { ShowText: "Style Scoped (示例)", RouteName: "CallChildComponent" },
      ],
    },
    {
      ShowText: "Promise 对象",
      RouteName: "Promise",
    },
    {
      ShowText: "接口请求 / 异步 (Async)",
      ListChild: [
        { ShowText: "Axios", RouteName: "Axios" },
        { ShowText: "Axios 封装 (示例)", RouteName: "EncapsulatingAxios" },
        { ShowText: "Fetch", RouteName: "Fetch" },
        { ShowText: "跨域 & 请求代理", RouteName: "RequestProxy" },
      ],
    },
    {
      ShowText: "Watch & Computed",
      RouteName: "DataMonitor",
    },
    {
      ShowText: "防抖和节流 (Debounce & Throttle)",
      RouteName: "DebounceAndThrottle",
    },
  ],
  strNodeKey: "ShowText",
  nodeProp: {
    children: "ListChild",
    label: "ShowText",
  },
});
// let jsonCurrentDataGroup = ref({});
let titleInner = ref("");
const elTreeNavi = ref(null);
// el-tree 中 node 点击以后的业务.
function handleTreeNaviClick(jsonSrcIn, srcElemNodeIn, componentSrcIn) {
  //实现点击jsonSrcIn.RouteName里面的各个路由
  // proxy.$router.push(jsonSrcIn.RouteName);
  titleInner.value = jsonSrcIn.ShowText;
  // alert输出测试该组件是否为该组件
  // alert(jsonSrcIn.RouteName);
  //测试开始 编程式路由跳转 proxy.$router.push({ path: "/ElementPlus" }) || name:"ElementPlus"
  //点击事件里面只有这一个路由的话，那么所有选项组件点击出来的内容都是/ElementPlus这个网址内容
  // proxy.$router.push({ path: "/ElementPlus" })
  //测试结束
  // 判断 jsonSrcIn 中是否有 RouteName 这个字段. .call es6语法
  if (jsonSrcIn.hasOwnProperty.call(jsonSrcIn, "RouteName")) {
    // 简单演示
    // proxy.$router.push({ name: jsonSrcIn.RouteName, query: { strTest: "Test1", strTest2: "Test2" } });
    // 之前判断的路由地址名是RouterParam，所以路由传值不显示，方法1.要不将实际地址改为NameRouterParam 方法2.将router路由地址（index.js里面的name:改成RouterParam也可以实现传值效果）
    if (jsonSrcIn.RouteName === "NameRouterParam") {
      // 演示路由传值.
      proxy.$router.push({
        name: jsonSrcIn.RouteName,
        query: {
          strTest: "A string passed in through the route.",
          strTest2: "生命",
          transmit: 1234,
        },
      });
    } else if (jsonSrcIn.RouteName === "DynamicRouting") {
      // 演示动态路由.(动态路由都没有再index.js里面存值 ，而是现写现用)
      // 导航守卫生效?
      // .addRoute意为添加新路由 vue内置函数不可更改
      // 注意：view路由语法获取后面一定要加后缀.vue webpack语法可不用点缀 一定要区分view与webpack的写法
      proxy.$router.addRoute({
        path: "/DynamicRouting",
        name: "DynamicRouting",
        component: () => import("@/views/DynamicRouting.vue"),
      });
      // .removeRoute意为删除该组件
      // proxy.$router.removeRoute('DynamicRouting');
      proxy.$router.push({ name: jsonSrcIn.RouteName });
    } else {
      // 编程式路由,
      proxy.$router.push({ name: jsonSrcIn.RouteName });
    }
  }
}

function strFuncCurrentClassName(strRouteNameIn, titleIn) {
  if (strRouteNameIn === proxy.$route.name) {
    if (titleInner.value != titleIn) {
      titleInner.value = titleIn;
    }
    return "AddiCurrent50";
  } else {
    return "";
  }
}

// function handleRouterLink(strRoutePathIn, titleIn) {
//   titleInner.value = titleIn;
//   proxy.$router.push({ path: strRoutePathIn });
// }
function handleAddRoute() {
  proxy.$router.addRoute({
    path: "/DynamicRouting",
    name: "DynamicRouting",
    component: () => import("@/views/DynamicRouting"),
  });
  // proxy.$router.removeRoute('DynamicRouting');
  proxy.$router.push({ path: "/DynamicRouting", query: { suibian: "zhi" } });
}
onBeforeMount(() => {});
onMounted(() => {});
</script>

<style>
@import "@/VisualConfig/CSS/Core.Schema.css";
@import "@/VisualConfig/CSS/CtrlPanel/Schema.css";
@import "@/VisualConfig/CSS/CtrlPanel/SystemMgt.css";
</style>
