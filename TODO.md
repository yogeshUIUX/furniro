# Fix: Header & Footer Not Showing

## Steps
- [x] 1. `app.routes.ts` — Set LayoutComponent as parent route with children
- [x] 2. `app.component.html` — Replace `<router-outlet />` with `<app-layout></app-layout>`
- [x] 3. `layout.component.html` — Remove hardcoded `<app-home>`
- [x] 4. `layout.component.ts` — Remove HomeComponent import
- [x] 5. `home.component.ts` — Remove unused HeaderComponent & FooterComponent imports
- [x] 6. `shop.component.ts` — Remove unused HeaderComponent & FooterComponent imports
- [x] 7. Test: Run `ng serve` to verify

