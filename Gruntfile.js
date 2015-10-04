'use strict';

module.exports = function(grunt) {

  // Load all tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  require('time-grunt')(grunt);

  grunt.initConfig({

    clean: ['src/assets/'],

    copy: {
      main: {
        expand: true,
        cwd: 'src/_assets/fonts/',
        src: '**',
        dest: 'src/assets/',
        flatten: true,
        filter: 'isFile',
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      dist: {
        files: {
          'src/assets/app.min.js': [
            'src/_assets/scripts/plugins.js',
            'src/_assets/scripts/main.js'
          ]
        }
      }
    },

    concat: {
      dist: {
        files: {
          'src/assets/app.min.js': [
            'src/_assets/scripts/plugins.js',
            'src/_assets/scripts/main.js'
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
          cwd: 'src/_assets/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'src/assets/'
        }],
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['src/_assets/scripts/*.js']
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'src/assets/screen.css': 'src/_assets/styles/screen.scss'
        }
      }
    },

    watch: {
      imagemin: {
        files: [
          'src/_assets/images/**/*'
        ],
        tasks: ['imagemin']
      },
      js: {
        files: 'src/_assets/scripts/**/*.js',
        tasks: ['concat:dist']
      },
      sass: {
        files: ['src/_assets/styles/**/*.scss'],
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
    'clean',
    'copy',
    'sass',
    'uglify:dist',
    'imagemin:dist'
  ]);
};
