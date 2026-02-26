# angular-aria-3d

A 3D pushable UI component library for Angular, built on top of [Angular Aria](https://angular.dev/guide/aria/overview).

Every interactive element has physical depth -- buttons press down, tabs lift on hover, accordion headers have thickness.

## Install

```bash
# Everything
npm install angular-aria-3d

# Just what you need
npm install @angular-aria-3d/button
npm install @angular-aria-3d/tabs @angular-aria-3d/accordion
```

## Quick Start

```typescript
import { provideAngularAria3d } from '@angular-aria-3d/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideAngularAria3d({ hue: 225 }),
  ],
});
```

```html
<aa3d-button>Push me</aa3d-button>
```

## Theme

Configure globally or per-component:

```typescript
// Global
provideAngularAria3d({
  hue: 345,
  saturation: 100,
  depth: 'medium',
  radius: 12,
  transition: { hover: 250, rest: 600, press: 34 },
})

// Per-component
<aa3d-button [theme]="{ hue: 220, depth: 'deep' }">Save</aa3d-button>
```

## Depth Tiers

| Tier | Used by |
|------|---------|
| **Deep** | Buttons, primary CTAs |
| **Medium** | Accordion headers, menu triggers, toolbar buttons |
| **Subtle** | Tabs, listbox options, tree nodes, grid cells |

## Components

| Package | Component |
|---------|-----------|
| `@angular-aria-3d/button` | 3D pushable button |
| `@angular-aria-3d/accordion` | Collapsible panels |
| `@angular-aria-3d/tabs` | Tabbed interface |
| `@angular-aria-3d/menu` | Dropdown menu |
| `@angular-aria-3d/menubar` | Horizontal menu bar |
| `@angular-aria-3d/toolbar` | Grouped controls |
| `@angular-aria-3d/listbox` | Option list |
| `@angular-aria-3d/select` | Single-select dropdown |
| `@angular-aria-3d/multiselect` | Multi-select dropdown |
| `@angular-aria-3d/combobox` | Filterable dropdown |
| `@angular-aria-3d/autocomplete` | Auto-filtered input |
| `@angular-aria-3d/tree` | Hierarchical list |
| `@angular-aria-3d/grid` | 2D data grid |

## License

MIT
