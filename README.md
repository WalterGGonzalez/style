# crowdint-style

This repo is the source for the ```crowdint-styles``` [bower](http://bower.io) package.

# Bower package

## installation

to install the bower package simply run
```bower install crowdint-styles``` on your site.

## Dependencies

You will need to update your sass gem above 3.3

```
  gem 'sass-rails', '>= 5'
  gem 'sass', '>= 3.3'
```

## Sass precompiler

```sass --watch --sourcemap=none --load-path bower_components/   assets/stylesheets/main.scss:public/stylesheets/main.css``` will watch and precompile
your scss files into css for publishing via the bower package manager.

