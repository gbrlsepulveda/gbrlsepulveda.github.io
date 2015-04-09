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
                    '_site/assets/scripts/app.min.js': [
                        'src/vendor/respondJs/dest/respond.min.js',
                        'src/assets/scripts/plugins.js',
                        'src/assets/scripts/main.js'
                    ]
                }
            }
        },

        clean: {
            dist: {
                src: ["_site/"]
            }
        },

        concat: {
            dist: {
                files: {
                    '_site/assets/scripts/app.min.js': [
                        'src/vendor/respondJs/dest/respond.min.js',
                        'src/assets/scripts/plugins.js',
                        'src/assets/scripts/main.js'
                    ]
                }
            },
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/',
                    src: [
                        'fonts/**/*',
                        'images/**/*',
                    ],
                    dest: '_site/assets/',
                    dot: true
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '*.html',
                    dest: '_site',
                }],
            }
        },

        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['*.{png,jpg,gif}'],
                    dest: '_site'
                }],
            }
        },

        // concurrent: {
        //     dev: ['watch', 'connect']
        // },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: ['_siteassets/styles/*.css']
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['src/assets/scripts/*.js']
        },

        jekyll: {
            options: {
                config: 'src/jekyll/_config.yml',
                layouts: 'src/jekyll/_layouts/'
            },
            dist: {
                options: {
                    src: 'src/jekyll/',
                    dest: '_site/'
                }
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    '_site/assets/styles/screen.css': 'src/assets/styles/screen.scss'
                }
            }
        },

        connect: {
            server: {
                options: {
                    open: true,
                    port: 8001,
                    hostname: '0.0.0.0',
                    base: '_site',
                    livereload: true
                }
            }
        },

        // Watch
        watch: {
            options: {
                livereload: true
            },
            copy: {
                files: [
                    'src/assets/fonts/**/*',
                    'src/assets/images/**/*'
                ],
                tasks: ['newer:copy']
            },
            js: {
                files: 'src/assets/scripts/**/*',
                tasks: ['concat:dist']
            },
            jekyll: {
                files: [
                    'src/jekyll/**/*'
                ],
                tasks: ['build']
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

    grunt.registerTask('dev', ['build', 'connect:server', 'watch']);

    grunt.registerTask('lint', ['csslint', 'jshint:all']);

    // grunt.registerTask('deploy', ['']);

    grunt.registerTask('build', [
        'clean',
        'jekyll',
        'sass',
        'copy:dist',
        'uglify:dist',
        'htmlmin:dist',
        'imagemin:dist'
    ]);
};
