var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

// gulp.task("default", function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest("./dist"));
// });
gulp.task('watch', () => {
  gulp.watch('**/*', {cwd: './src/'}, ['scripts']);
});

gulp.task('scripts', () => {
  return tsProject.src()
      .pipe(tsProject())
      .js.pipe(gulp.dest("./dist"));
});

gulp.task('default', ['scripts', 'watch']);