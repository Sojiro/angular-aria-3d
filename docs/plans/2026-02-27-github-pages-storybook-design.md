# GitHub Pages Storybook Deployment Design

**Date:** 2026-02-27
**Status:** Approved

## Overview

Deploy Storybook to GitHub Pages showcasing all 13 angular-aria-3d components. Stories for every component with Default, AllDepths, and ColorPresets variants. Auto-deploys on push to main via GitHub Actions.

## Scope

1. Add Storybook stories for all 12 remaining components (accordion, tabs, menu, menubar, toolbar, listbox, select, multiselect, combobox, autocomplete, tree, grid)
2. Configure composite Storybook to discover stories across all packages
3. Add GitHub Actions workflow: build Storybook → deploy to GitHub Pages
4. Site URL: https://sojiro.github.io/angular-aria-3d/

## Story Pattern

Each component gets 2-3 stories:
- **Default** — component with default theme
- **AllDepths** — deep, medium, subtle side by side
- **ColorPresets** — red, blue, green, purple, orange variants
- Additional interactive stories where applicable (accordion expand, tabs switch, etc.)

## Storybook Config

Update stories glob to scan all packages:
```
stories: ['../../packages/**/*.stories.@(ts|tsx)']
```

## GitHub Actions

Standard Storybook → GitHub Pages deployment on push to main.
