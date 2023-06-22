import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";

export const Layouts = {
    Main: MainLayout,
    Admin: AdminLayout
}

export type LayoutKeys = keyof typeof Layouts;