import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot, PRIMARY_OUTLET } from '@angular/router';
export class ReuseStrategy implements RouteReuseStrategy {
    handlers: { [key: string]: DetachedRouteHandle } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {

        return !!this.getBreadcrumbs(route.root).join('.');
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {

        let url = this.getBreadcrumbs(route.root).join('.');

        this.handlers[url] = handle;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {

        let url = this.getBreadcrumbs(route.root).join('.');

        return !!this.handlers[url];
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {

        let url = this.getBreadcrumbs(route.root).join('.');

        // tslint:disable-next-line:curly
        if (!url) return null;

        return this.handlers[url];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // tslint:disable-next-line:no-console
        console.debug('CustomReuseStrategy:shouldReuseRoute', future, curr);
        console.log(future.root);
        console.log(curr.root)

        return future.routeConfig === curr.routeConfig;
    }

    private getBreadcrumbs(route: ActivatedRouteSnapshot, url: string = '', breadcrumbs: string[] = []): string[] {

        let children: ActivatedRouteSnapshot[] = route.children;

        if (children.length === 0) {
            return breadcrumbs;
        }

        // tslint:disable-next-line:prefer-const
        for (let child of children) {
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }

            let routeURL: string = child.url.map(segment => segment.path).join('/');

            url += `/${routeURL}`;

            breadcrumbs.push(url);

            return this.getBreadcrumbs(child, url, breadcrumbs);
        }

        return breadcrumbs;
    }

}
