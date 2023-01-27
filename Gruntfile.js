module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("./package.json"),
    eslint: {
      target: ["Standards/**/*.js"],
    },
    uglify: {
      debug: {
        options: {
          compress: false,
          mangle: false,
          beautify: true,
          preserveComments: false,
          banner: grunt.file.read("Contrib/Build/umd-header.js"),
          footer: grunt.file.read("Contrib/Build/umd-footer.js"),
        },
        files: {
          "build/HTMLCS.js": [
            "Translations/*.js",
            "dist/Standards/**/*.js",
            "dist/HTMLCS.js",
            "dist/HTMLCS.Util.js",
          ],
        },
      },
      dist: {
        options: {
          banner: grunt.file.read("Contrib/Build/umd-header.js"),
          footer: grunt.file.read("Contrib/Build/umd-footer.js"),
          preserveComments: false,
        },
        files: {
          "build/HTMLCS.js": [
            "dist/Translations/*.js",
            "dist/Standards/**/*.js",
            "dist/HTMLCS.js",
            "dist/HTMLCS.Util.js",
          ],
        },
      },
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            flatten: true,
            src: "licence.txt",
            dest: "build",
            filter: "isFile",
          },
        ],
      },
    },
  });

  grunt.file.setBase("./");
  require("load-grunt-tasks")(grunt);

  grunt.registerTask("default", ["eslint"]);
  grunt.registerTask("build", ["uglify:dist", "copy:dist"]);

  return grunt.registerTask("build-debug", ["uglify:debug", "copy:dist"]);
};
