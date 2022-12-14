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
    // ???????????????????????????
    //1.app.vue???????????????????????????????????????????????????????????????
    // 2.router???index.js????????????????????? ???????????????????????????????????????????????????
    // 3.??????????????????????????????template script setup style scoped ???????????????
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
// ??????????????????????????? jsonArrayRouteNavi, ?????????????????????????????? (Navi.vue) ???????????????.
const jsonArrayRouteNavi = [];
jsonArrayRoute.forEach((jsonItemIn) => {
  jsonArrayRouteNavi.push({
    title: jsonItemIn.meta?.routeTitle,
    intro: jsonItemIn.meta?.routeIntro,
    jsonRoute: { name: jsonItemIn.name, path: jsonItemIn.path },
  });
});
// ??????????????????.
const router = createRouter({
  history: routerHistory,
  routes: jsonArrayRoute,
});
// ????????????????????????????????? (????????????).
export { router, jsonArrayRouteNavi };
