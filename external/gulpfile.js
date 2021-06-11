const { src, dest, watch } = require('gulp');

const targetSpfxFolder = "spfx";

// Copies SP2016 resources into the local folders
function copyLocalizedResources() {
    return src(`../${targetSpfxFolder}/src/webparts/**/loc/*.d.ts`)
        .pipe(dest('./src/webparts'));
}
exports['copy-loc'] = copyLocalizedResources;

// Handles forcing the workbench to reload if changes are made in external files
function triggerTargetWebPartReload() {
    return src(`../${targetSpfxFolder}/src/index.ts`)
        .pipe(dest(`../${targetSpfxFolder}/src/`))
}
exports.watch = function () {
    watch(`../${targetSpfxFolder}/src/webparts/**/loc/*.d.ts`, {
        ignoreInitial: false
    }, copyLocalizedResources);

    watch('./dist/*.js', triggerTargetWebPartReload);
}
