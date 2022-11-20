import type { defineComponent } from 'vue';
import type {
    RouteMeta,
    NavigationGuard,
    RouteRecordRedirectOption,
    RouteRecordRaw,
} from 'vue-router';

export type Component<T = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>);

export type AppRouteRecordRaw = RouteRecordRaw;
// export interface AppRouteRecordRaw {
//     path: string;
//     name?: string | symbol;
//     meta?: RouteMeta;
//     redirect?: RouteRecordRedirectOption;
//     component: Component | string;
//     children?: AppRouteRecordRaw[];
//     alias?: string | string[];
//     props?: Record<string, any>;
//     beforeEnter?: NavigationGuard | NavigationGuard[];
//     fullPath?: string;
// }
