import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();
const jsonArrayRoute = [
  // API / Lifecycle & Hooks.
  {
    name: "OptionsAPI",
    path: "/OptionsAPI",
    component: () => import("@/views/API/OptionsAPI.vue"),
    meta: {},
  },
  {
    name: "CompositionAPI",
    path: "/CompositionAPI",
    component: () => import("@/views/API/CompositionAPI.vue"),
    meta: {},
  },
  {
    name: "Lifecycle",
    path: "/Lifecycle",
    component: () => import("@/views/Lifecycle/WithData.vue"),
    meta: {},
  },
  {
    name: "Lifecycle2",
    path: "/Lifecycle2",
    component: () => import("@/views/Lifecycle/WithRef.vue"),
    meta: {},
  },
  {
    name: "KeepAlive",
    path: "/KeepAlive",
    component: () => import("@/views/API/KeepAlive.vue"),
    meta: {},
    children: [
      {
        path: "Image",
        component: () => import("@/PartialView/KeepAlive/Image.vue"),
      },
      {
        path: "InputText",
        component: () => import("@/PartialView/KeepAlive/InputText.vue"),
      },
    ],
  },
  {
    name: "NextTick",
    path: "/NextTick",
    component: () => import("@/views/API/NextTick.vue"),
    meta: {},
  },
  {
    name: "ComponentComm",
    path: "/ComponentComm",
    component: () => import("@/views/ComponentComm/PassValParent.vue"),
    meta: {},
  },
  {
    name: "ComponentComm2",
    path: "/ComponentComm2",
    component: () => import("@/views/ComponentComm/PassValGrandparent.vue"),
    meta: {},
  },
  {
    name: "ComponentComm3",
    path: "/ComponentComm3",
    component: () => import("@/views/ComponentComm/PassValPinia.vue"),
    meta: {},
  },
  {
    name: "CallChildFunc",
    path: "/CallChildFunc",
    component: () => import("@/views/ComponentComm/CallChildFunc.vue"),
    meta: {},
  },
  {
    name: "GlobalProperties",
    path: "/GlobalProperties",
    component: () => import("@/views/GlobalProperties.vue"),
    meta: {},
  },
  {
    name: "Promise",
    path: "/Promise",
    component: () => import("@/views/Promise.vue"),
    meta: {},
  },
  {
    name: "Axios",
    path: "/Axios",
    component: () => import("@/views/BackendAPI/Axios.vue"),
    meta: {},
  },
  {
    name: "RequestProxy",
    path: "/RequestProxy",
    component: () => import("@/views/BackendAPI/RequestProxy.vue"),
    meta: {},
  },
  {
    name: "EncapsulatingAxios",
    path: "/EncapsulatingAxios",
    component: () => import("@/views/BackendAPI/EncapsulatingAxios.vue"),
    meta: {},
  },
  {
    name: "DataMonitor",
    path: "/DataMonitor",
    component: () => import("@/views/DataMonitor.vue"),
    meta: {},
  },
  {
    name: "ClassicBugShallowCopy",
    path: "/ClassicBugShallowCopy",
    component: () => import("@/views/ClassicBugShallowCopy.vue"),
    meta: {},
  },
  {
    name: "ClassicBugShallowCopy2",
    path: "/ClassicBugShallowCopy2",
    component: () => import("@/views/ClassicBugShallowCopy2.vue"),
    meta: {},
  },
  {
    name: "ShuttleFrame",
    path: "/ShuttleFrame",
    component: () => import("@/views/ShuttleFrame.vue"),
    meta: {},
  },
  {
    name: "Slot",
    path: "/Slot",
    component: () => import("@/views/Slot.vue"),
    meta: {},
  },
  {
    name: "DynamicComponent",
    path: "/DynamicComponent",
    component: () => import("@/views/DynamicComponent.vue"),
    meta: {},
  },
  {
    name: "ElementPlus",
    path: "/ElementPlus",
    component: () => import("@/views/ElementPlus.vue"),
    meta: {},
  },
  {
    name: "NameRouterParam",
    path: "/RouterParam",
    component: () => import("@/views/RouterParam.vue"),
    meta: {},
  },
  {
    // 测试构建一个新组件
    //1.app.vue定义一个数据（点击事件就会有这个组件数据）
    // 2.router（index.js）添加路由地址 （才能有这个组件盒子不然点击无效）
    // 3.组件内容自定，三件套template script setup style scoped 备齐就行了
    name: "RouterParam2",
    path: "/RouterParam2",
    component: () => import("@/views/RouterParam2.vue"),
    meta: {},
  },
  {
    name: "Directive",
    path: "/Directive",
    component: () => import("@/views/Directive.vue"),
    meta: {},
  },
  {
    name: "DebounceAndThrottle",
    path: "/DebounceAndThrottle",
    component: () => import("@/views/DebounceAndThrottle.vue"),
    meta: {},
  },
];
// 提炼路由有效信息到 jsonArrayRouteNavi, 该变量会用于导航组件 (Navi.vue) 的菜单渲染.
const jsonArrayRouteNavi = [];
jsonArrayRoute.forEach((jsonItemIn) => {
  jsonArrayRouteNavi.push({
    title: jsonItemIn.meta?.routeTitle,
    intro: jsonItemIn.meta?.routeIntro,
    jsonRoute: { name: jsonItemIn.name, path: jsonItemIn.path },
  });
});
// 创建路由实例.
const router = createRouter({
  history: routerHistory,
  routes: jsonArrayRoute,
});
// 输出路由实例和菜单数组 (全局变量).
export { router, jsonArrayRouteNavi };
