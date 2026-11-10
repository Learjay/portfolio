# Testing and Verification

## Current checks

- `npm run build` runs TypeScript project checks and creates the Vite production bundle.
- `npm run dev` starts the local app for interactive and responsive verification.

There is currently no unit, integration, or end-to-end test runner configured. Do not describe the production build as a substitute for behavioral tests.

## Before completing a change

1. Run the smallest relevant available check; run `npm run build` for application code changes.
2. Verify affected behavior in the development server when it is interactive or visual.
3. Check responsive layouts and keyboard interaction for affected UI.
4. Report commands actually run and any validation not available.

When adding a test framework, choose one that fits the changed behavior and document the new commands here.
