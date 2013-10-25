module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({

		watch : {

			scss : {
				files: ['assets/css/src/*.scss'],
				tasks: ['sass:scss']
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
		}
		
	});

};