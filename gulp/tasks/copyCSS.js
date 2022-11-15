export const copyCSS = () => { //!---------------
	return app.gulp.src(app.path.src.css) //.files
		.pipe(app.gulp.dest(app.path.build.css)) //.files
		.pipe(app.plugins.browsersync.stream());
}