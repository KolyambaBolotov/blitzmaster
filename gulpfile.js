
/* 
 * Для сборки проекта должна быть следующая структура папок:
 * src/main.html - основной html файл
 * src/img/ - 
 * src/js/ - 
 * src/less/ - 
 * 
 * Собирается проект в папку build
 * 
 * Библиотеки:
 * http://dimsemenov.com/plugins/magnific-popup/documentation.html#including-files
 * https://daneden.github.io/animate.css/
 * 
 * Определяем переменные 
 */

var   gulp = require('gulp'),
      less = require('gulp-less'), // Компилятор less
      concat = require('gulp-concat'),  // Склейка файлов
      rename = require('gulp-rename'), // Переименовывание
      notify  = require('gulp-notify'),
      prefix  = require('gulp-autoprefixer'), // Автопрефиксер
      browsersync = require('browser-sync'); // Минификация JS;

/* Создаем задачи */	

 
/* Задача less. Запускается командой "gulp less" */ 
gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(concat("bundle.css"))
    .pipe(prefix('last 5 versions'))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./build/'))
    .pipe(browsersync.reload({stream: true})) // Обновляем 
    .pipe(notify('gulp less -> done!'));
          
}); 

 
/* Задача js. Запускается командой "gulp js" */	
gulp.task('js', function () {
  return gulp.src('./src/js/*.js')
    .pipe(concat('common.min.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(browsersync.reload({stream: true})) // Обновляем 
    .pipe(notify('gulp common js -> done!'));
         
});

// Задача "html". Запускается командой "gulp html"
gulp.task('html', function() {
    gulp.src('./src/*.html') // берем любые файлы в папке и ее подпапках
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./build/')) // результат пишем по указанному адресу
    .pipe(browsersync.reload({stream: true})) // Обновляем 
    .pipe(notify('gulp html -> done!'));

});

// Задача "img". Запускается командой "gulp img"
gulp.task('img', function() {
    gulp.src('./src/img/**/*') // берем любые файлы в папке и ее подпапках
    .pipe(gulp.dest('./build/img')) // результат пишем по указанному адресу
    .pipe(browsersync.reload({stream: true})) // Обновляем 
    .pipe(notify('gulp img -> done!'));

});


gulp.task('vendor', function() {
    gulp.src('./src/js/vendor/**/*') // берем любые файлы в папке и ее подпапках
    .pipe(gulp.dest('./build/js/vendor/')) // результат пишем по указанному адресу
    .pipe(browsersync.reload({stream: true})) // Обновляем 
    .pipe(notify('gulp vendor -> done!'));

});

// Задача "fonts". Запускается командой "gulp fonts"
gulp.task('fonts', function() {
    gulp.src('./src/fonts/**/*') // берем любые файлы в папке и ее подпапках
    .pipe(gulp.dest('./build/fonts')) // результат пишем по указанному адресу
    .pipe(browsersync.reload({stream: true})) // Обновляем 
    .pipe(notify('gulp fonts -> done!'));

});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browsersync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'build' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('watch', ['browser-sync', 'html', 'img', 'js', 'vendor', 'less', 'fonts'], function() {
	// При изменение файлов *.less в папке "less" и подпапках запускаем задачу less
  gulp.watch('./src/less/**/*.less', ['less'])
	// При изменение файлов *.js папке "javascripts" и подпапках запускаем задачу js
	gulp.watch('./src/js/*.js', ['js']) 
  // При изменение любых файлов .html в папке "src" и подпапках запускаем задачу html
  gulp.watch('./src/*.html', ['html']);
  // При изменение любых файлов .img в папке "src" и подпапках запускаем задачу html
  gulp.watch('./src/img/**/*.*', ['img']);
  // При изменение любых файлов .img в папке "src" и подпапках запускаем задачу html
  gulp.watch('./src/js/vendor/**/*.*', ['vendor']);
	// При изменение любых файлов .fonts в папке "src" и подпапках запускаем задачу html
	gulp.watch('./src/fonts/**/*', ['fonts']);
})