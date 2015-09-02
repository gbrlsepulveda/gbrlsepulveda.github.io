"use strict";

module.exports = function(grunt) {

  // Load all tasks
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  require('time-grunt')(grunt);

  grunt.initConfig({

    // Concat and minify javascripts
    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      dist: {
        files: {
          'assets/app.min.js': [
            'src/assets/scripts/plugins.js',
            'src/assets/scripts/main.js'
          ]
        }
      }
    },

    concat: {
      dist: {
        files: {
          'assets/app.min.js': [
            'src/assets/scripts/plugins.js',
            'src/assets/scripts/main.js'
          ]
        }
      },
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'src/assets/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/'
        }],
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['src/assets/scripts/*.js']
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'assets/screen.css': 'src/assets/styles/screen.scss'
        }
      }
    },

    watch: {
      imagemin: {
        files: [
          'src/assets/images/**/*'
        ],
        tasks: ['imagemin']
      },
      js: {
        files: 'src/assets/scripts/**/*',
        tasks: ['concat:dist']
      },
      sass: {
        files: ['src/assets/styles/**/*'],
        tasks: ['sass']
      },
      grunt: {
        files: ['Gruntfile.js']
      }
    }
  });

  /* Tasks */

  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('dev', ['build', 'watch']);

  grunt.registerTask('lint', ['jshint:all']);

  grunt.registerTask('build', [
    'sass',
    'uglify:dist',
    'imagemin:dist'
  ]);
};
