import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./AuthGuard";
import Signin from "../components/auth/Signin.vue";
import Signup from "../components/auth/Signup.vue";
import EmployeesList from "../components/employee/EmployeesList.vue";
import NewEmployee from "../components/employee/NewEmployee.vue";
import Home from "../views/Home.vue";
import Reports from "../views/Reports.vue";
import Employees from "../views/Employees.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: AuthGuard
  },
  {
    path: "/employees",
    component: Employees,
    beforeEnter: AuthGuard,
    children: [
      {
        path: "",
        name: "Employees",
        component: EmployeesList
      },
      {
        path: "new",
        name: "EmployeesList",
        component: NewEmployee
      }
    ]
  },
  {
    path: "/employees/new",
    name: "Employees",
    component: Employees,
    beforeEnter: AuthGuard
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
    beforeEnter: AuthGuard
  },
  {
    path: "/user",
    name: "User",
    component: User,
    beforeEnter: AuthGuard
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
