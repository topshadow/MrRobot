module.exports = function(grunt) {
  // 配置
  grunt.initConfig({
    jsdoc : {
      dist : {
        src: ['src/*.js'],
        options: {
          destination: 'doc'
        }
      }
    }
  });

  // 载入jsdoc插件，生成JS文档
  grunt.loadNpmTasks('grunt-jsdoc');
  // 注册任务
  grunt.registerTask('default', ['jsdoc']);
};
