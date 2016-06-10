var grunt= require("grunt")
require("grunt-jsdoc");
grunt.loadNpmTasks('grunt-jsdoc');

grunt.initConfig({
  jsdoc : {
    dist : {
      src: ['src/*.js', 'test/*.js'],
      options: {
        destination: 'doc'
      }
    }
  }
});
