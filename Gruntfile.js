module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.initConfig({

		watch : {

			scss : {
				files: ['assets/css/src/**/*.scss'],
				tasks: ['sass:scss', 'autoprefixer:scss']
			}
		},

		sass : {

			scss : {
				files : {
					'assets/css/style.css' : ['assets/css/src/style.scss']
				}
			}
		},

		uglify: {
			scripts: {
				files: {
					'assets/js/scripts.min.js': [

						'assets/js/app/main.js'

					]
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 version']
			},

			scss : {
				src: 'assets/css/style.css',
				dest: 'assets/css/style.css'
			}
		}
		
	});

};