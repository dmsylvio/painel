import { createRouter, createWebHistory } from "vue-router";

//admin routes
import AdminRoutes from "@/admin/admin-router";
//  Customers routes
// import CustomerRoutes from '@/scripts/customer/customer-router'

let routes = []
routes = routes.concat(AdminRoutes);

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes
});

export default router;
