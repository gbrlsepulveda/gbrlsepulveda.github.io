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
                        'app/assets/scripts/plugins.js',
                        'app/assets/scripts/main.js'
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
                    '_siteassets/scripts/app.min.js': [
                        'app/assets/scripts/plugins.js',
                        'app/assets/scripts/main.js'
                    ]
                }
            },
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/',
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
                    cwd: 'app/',
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
            all: ['app/assets/scripts/*.js']
        },

        jekyll: {
            options: {
                config: 'app/src/_config.yml',
                layouts: 'app/src/_layouts/'
            },
            dist: {
                options: {
                    src: 'app/src/',
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
                    '_site/assets/styles/screen.css': 'app/assets/styles/screen.scss'
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8001,
                    hostname: '*',
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
                    'app/assets/fonts/**/*',
                    'app/assets/images/**/*'
                ],
                tasks: ['newer:copy']
            },
            js: {
                files: 'app/assets/scripts/**/*',
                tasks: ['newer:concat:dist']
            },
            jekyll: {
                files: [
                    'app/src/**/*'
                ],
                tasks: ['build']
            },
            sass: {
                files: ['app/assets/styles/**/*'],
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
