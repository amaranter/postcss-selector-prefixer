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

test('should return prefix with 1 class selector', t => {
    return run(t, '.a{ }', 'testPrefix_.a{ }', { prefix: 'testPrefix_' });
});


