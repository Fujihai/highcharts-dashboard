import { BasicLayout } from "@/layouts";
import { Home } from "@/views/index";

export const Routers = [
  {
    path: "/",
    name: "index",
    component: BasicLayout,
    meta: { title: "主页" },
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
        meta: { title: "主页", keepAlive: true }
      }
    ]
  }
];
