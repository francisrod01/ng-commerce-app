/// <reference types="jasmine" />
/// <reference types="node" />

// File included by `tsconfig.spec.json` to ensure Jasmine types are available to unit tests in the editor.
// Ensure the global `expect` used in unit tests resolves to Jasmine's Matchers (avoids Chai/Cypress
// conflicts in the editor where both Chai and Jasmine types may be present).
declare function expect<T = any>(actual?: T): jasmine.Matchers<T>;

export {};
