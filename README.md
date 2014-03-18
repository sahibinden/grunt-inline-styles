# grunt-inline-styles

> Inject external styles to your HTMLs.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-inline-styles --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-inline-styles');
```

## The "inline_style" task

### Overview
In your project's Gruntfile, add a section named `inline_style` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  inline_style: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.verbose
Type: `Boolean`
Default value: `false`

Set true to see more logs about what is happenning.

### Usage Examples

`test.css` file:

```css
/* This is from test.css file */
h1 {
    color:red;
}
```

`test.html` file:

```html
<link href="test.css">

<h1>This should be red</h1>
```

Result is:

```html
<style>/* This is from test.css file */
h1 {
    color:red;
}
</style>

<h1>This should be red</h1>
```

## Release History
- 1.0.0 - Initial release

## License
Copyright (c) 2014 sahibinden.com. Licensed under the MIT license.
