module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

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

						'assets/js/libs/jquery-1.10.2.min.js',
						'assets/js/app/main.js',
						'assets/js/app/form.js',
						'assets/js/app/videoinfo.js',
						'assets/js/app/player.js',
						'assets/js/app/counter.js',
						'assets/js/app/load.js'
					]
				}
			}
		},

		autoprefixer: {
			options: {
				flatten: true,
				browsers: ['last 2 version']
			},

			scss : {
				src: 'assets/css/style.css',
				dest: 'assets/css/style.css'
			}
		},

		cssmin: {
			minify: {
				files: {
					'assets/css/style.min.css': ['assets/css/style.css']
				}
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'assets/js/app/*.js']
		}
		
	});

};