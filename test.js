var test    = require('tape');
var postcss = require('postcss');
var plugin  = require('./');
var name    = require('./package.json').name;

var tests   = [
    {
        message: 'when use any selector and subtract signal',
        fixture: '#a-abc{ } .abc-def{ }',
        expected: '#myPrefix_a-abc{ } .myPrefix_abc-def{ }',
        options: {prefix: 'myPrefix_'}
    },
    {
        message: 'when use class selector with space',
        fixture: '.a{ } .abc{ }',
        expected: '.myPrefix_a{ } .myPrefix_abc{ }',
        options: {prefix: 'myPrefix_'}
    },
    {
        message: 'when use class selector without space',
        fixture: '.a{ }.abc{ }',
        expected: '.myPrefix_a{ }.myPrefix_abc{ }',
        options: {prefix: 'myPrefix_'}
    },
    {
        message: 'when use id selector with space',
        fixture: '#a{ } #abc{ }',
        expected: '#myPrefix_a{ } #myPrefix_abc{ }',
        options: {prefix: 'myPrefix_'}
    },
    {
        message: 'when use id selector without space',
        fixture: '#a{ }#abc{ }',
        expected: '#myPrefix_a{ }#myPrefix_abc{ }',
        options: {prefix: 'myPrefix_'}
    },
    {
        message: 'when use id and class selector with space',
        fixture: '#a{ } .abc{ }',
        expected: '#myPrefix_a{ } .myPrefix_abc{ }',
        options: {prefix: 'myPrefix_'}
    },
    {
        message: 'when use id and class selector without space',
        fixture: '#a{ }.abc{ }',
        expected: '#myPrefix_a{ }.myPrefix_abc{ }',
        options: {prefix: 'myPrefix_'}
    },
    {
        message: 'when use id and class selector with child combinator',
        fixture: '#a > .abc{ }',
        expected: '#myPrefix_a > .myPrefix_abc{ }',
        options: {prefix: 'myPrefix_'}
    },
    {
        message: 'when use id and class selector with adjacent sibling combinator',
        fixture: '#a + .abc{ }',
        expected: '#myPrefix_a + .myPrefix_abc{ }',
        options: {prefix: 'myPrefix_'}
    },
    {
        message: 'when use id and class selector with general sibling combinator',
        fixture: '#a ~ .abc{ }',
        expected: '#myPrefix_a ~ .myPrefix_abc{ }',
        options: {prefix: 'myPrefix_'}
    },
    {
        message: 'when use id and class selector with general sibling combinator',
        fixture: '#a:hover { }',
        expected: '#myPrefix_a:hover { }',
        options: {prefix: 'myPrefix_'}
    }
];

function process (css, options) {
    return postcss(plugin(options)).process(css).css;
}

test(name, function (t) {
    t.plan(tests.length);

    tests.forEach(function (test) {
        var options = test.options || {};
        t.equal(process(test.fixture, options), test.expected, test.message);
    });

});

test('should use the postcss plugin api', function (t) {
    t.plan(2);
    t.ok(plugin().postcssVersion, 'should be able to access version');
    t.equal(plugin().postcssPlugin, name, 'should be able to access name');
});
