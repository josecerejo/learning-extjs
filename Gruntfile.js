module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                    keepalive: true
                }
            }
        }
    });


    grunt.registerTask('default',['connect']);

};
