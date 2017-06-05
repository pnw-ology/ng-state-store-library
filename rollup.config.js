import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@angular/http': 'ng.http',
    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx'
};

export default {
    entry: './dist/modules/state-store-library.es5.js',
    dest: './dist/bundles/state-store-library.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.StateStoreLibrary',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}