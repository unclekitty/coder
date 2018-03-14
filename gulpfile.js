const gulp = require('gulp');
const ejs = require("gulp-ejs")
const rename = require("gulp-rename");
const esformatter = require('gulp-esformatter');
const uglify = require('gulp-uglify-es').default;
const prettier = require('gulp-plugin-prettier');
const removeLines = require('gulp-remove-lines');
const removeEmptyLines = require('gulp-remove-empty-lines');
const docs = require('./data/zygl.postman_collection.json')

const requests = docs.requests;
var modules = {}

requests.forEach((item, i) => {
  let url = item.url
  let path = url.split('api')[1]
  let module = path.split('/')[1]
  let action = path.split('/')[2]
  if (!action || action == '{{mobile}}' || action == '{{mobile}' || module == 'reset') {
    module = 'com'
  }
  modules[module] = {}
})

requests.forEach((item, i) => {
  let url = item.url
  let path = url.split('api')[1]
  let module = path.split('/')[1]
  let action = path.split('/')[2]
  if (!action || action == '{{mobile}}' || action == '{{mobile}'|| module == 'reset') {
    action = module
    module = 'com'
  }
  if(action.length == 32 || action == '{{userId}}' || action == '23234234') {
    action = 'info'
  }
  modules[module][action] = {
    path,
    description: item.name,
    parameters: JSON.parse(item.description)
  }
})

gulp.task('url', function() {
  gulp.src("./templates/url.ejs")
  .pipe(ejs({
    modules
  }))
  .pipe(removeEmptyLines())
  .pipe(esformatter({indent: {value: '  '}}))
  .pipe(rename({
    extname: '.js'
  }))
  .pipe(gulp.dest("./dist"))
});

gulp.task('module', function() {
  gulp.src("./templates/module.ejs")
  .pipe(ejs({
    modules
  }))
  .pipe(esformatter({indent: {value: '  '}}))
  // .pipe(prettier.format({ singleQuote: true }))
  // .pipe(removeLines({'filters': [/(^\s*|\s*|\s*$)/]}))
  .pipe(removeEmptyLines())
  .pipe(rename({
    extname: '.js'
  }))
  .pipe(gulp.dest("./dist"))
});

gulp.task('default', ['module']);