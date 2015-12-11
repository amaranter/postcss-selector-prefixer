import postcss from 'postcss';
import test    from 'ava';

import plugin from './index.js';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

test('should return prefix with 1 selector class', t => {
    return run(t, '.a{ }', '.a{ }', { prefix: 'testPrefix_' });
});


