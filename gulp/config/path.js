// Получаем имя папки проекта
import * as nodePath from 'path'; //подключаем модули
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./docs`; // папка с результатом
const srcFolder = `./src`; // папка с исходниками

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		// files: `${buildFolder}/js/`       //!---------------
		// files: `${buildFolder}/files/` //!---------------
	},
	src: {
		// js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`, //!---------------
		// svg: `${srcFolder}/img/**/*.svg`, //!---------------
		scss: `${srcFolder}/scss/style.scss`,
		css: `${srcFolder}/css/**/*.*`, //!---------------
		js: `${srcFolder}/js/**/*.*`,   //!---------------
		html: `${srcFolder}/*.html`, //.pug
		
		// files: `${srcFolder}/files/**/*.*`, //!---------------
		// svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: { //слежка
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		css: `${srcFolder}/css/**/*.css`,  //!---------------
		html: `${srcFolder}/**/*.html`, //.pug
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		// files: `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}