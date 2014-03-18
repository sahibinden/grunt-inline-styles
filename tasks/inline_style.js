/*
 * grunt-inline-styles
 * http://sahibinden.github.io/grunt-inline-styles/
 *
 * Copyright (c) 2014 sahibinden.com
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('inline_style', 'Inject external styles to your HTMLs.', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      verbose: false
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        if (options.verbose) {
          grunt.log.writeln(filepath);
        }

        var html = grunt.file.read(filepath),
          destination = file.dest || filepath;

        var parts = filepath.split('/');
        parts.pop();

        html = html.replace(/<link[^>]* href="([^"]*)"[^>]?>/g, function (match, styleUrl) {
          if (options.verbose) {
            grunt.log.writeln(styleUrl);
          }

          var cssUrl = parts.join('/') + '/' + styleUrl;

          if (!grunt.file.exists(cssUrl)) {
            grunt.log.warn('CSS file "' + cssUrl + '" not found.');
            return '<!-- css file couldnt found: ' + cssUrl + ' -->';
          } else {
            var css = grunt.file.read(cssUrl);

            return '<style>'+css+'</style>';
          }
        });

        // Write the destination file.
        grunt.file.write(destination, html);

        // Print a success message.
        if (options.verbose) {
          grunt.log.writeln('File "' + destination + '" processed.');
        }

        return html;
      });

    });
  });

};
