/* 
 * @Author: Admin
 * @Date:   2016-01-21 02:24:19
 * @Last Modified by:   Gunjan
 * @Last Modified time: 2016-02-28 11:37:25
 */

'use strict';
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'styles/common.css': 'styles/common.scss'
				}
			}
		}

	});

	// Load the plugin that provides the "linting" task.
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task(s).
	grunt.registerTask('default', ['sass:dist']);

};