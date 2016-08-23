var tomarkdown = require('jstransformer')(require('jstransformer-to-markdown'))
tomarkdown.render('<h1>Hello World!</h1>').body;
console.log(tomarkdown.render('<h2>Hello World!</h2>'))

var babel = require('jstransformer')(require('jstransformer-babel'))

var src = 'let a = 0;const b = 1'
var transformed = babel.render(src, {presets: ['es2015']})
console.log(transformed)

var coffee = require('jstransformer')(require('jstransformer-coffee-script'))
console.log(coffee.render('n = 42', {bare: true}).body)
