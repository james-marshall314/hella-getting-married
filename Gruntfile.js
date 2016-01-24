module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compile SASS files into minified CSS.
    sass: {
      options: {
        includePaths: ['scss','bootstrap/scss/', 'bootstrap/scss/mixins/'],
        precision: 6,
        sourceComments: false,
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dist: {
        files: {
            'css/styles.css': 'scss/main.scss',
            'css/test.css': 'scss/test.scss'
        }
      }
    },

    // Watch these files and notify of changes.
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: [
            'scss/**/*.scss'
        ],
        tasks: ['sass']
      }
    },

    //postcss plugins
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')
        ]
      },
      src: 'css/*.css'
    },
  });

  // Load externally defined tasks. 
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // Establish tasks we can run from the terminal.
  grunt.registerTask('build', ['sass', 'postcss']);
  grunt.registerTask('default', ['build', 'watch']);
};