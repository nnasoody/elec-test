module.exports = function(grunt) {

  grunt.initConfig({
    'create-windows-installer': {
      ia32: {
        outputDirectory: 'dist/win/installer',
        appDirectory: 'dist/win/everalbum-win32-ia32',
        authors: 'Everalbum Inc.',
        title: 'Everalbum',
        description: 'Everalbum DropZone',
        exe: 'Everalbum.exe',
        version: '1.0.0',
        loadingGif: './assets/win/install.gif',
        setupIcon: './assets/win/icon.ico',
        noMsi: true,
        certificateFile: null,
        certificatePassword: null,
        signWithParams: null
      }
    }
  });

  grunt.loadNpmTasks('grunt-electron-installer');

  grunt.registerTask('build', ['create-windows-installer']);
};