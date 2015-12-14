var postcss = require('postcss');

function prepare( str, selectors, prefix ){
	for(var i = 0; i < selectors.length; i++){
		var idx = str.indexOf(selectors[i]);
		if( idx > -1 ){
			str = str.substr(0, idx +1) + prefix + str.substr(idx +1);
		}
	}

	return str;
}

module.exports = postcss.plugin('postcss-selector-prefixer', function (opts) {
    opts = opts || {};
    prefix = opts.prefix || "";
    selectors = ["#", "."];

    return function (css, result) {

        css.walkRules(function (rule) {
        	var selector = rule.selector,
        		matches = selector.match( /(\s*?[#\.][-\w\d\s,\>\~]+\s*?)/g );

        	for(var i = 0; i < matches.length; i++){
        		matches[i] = prepare(matches[i], selectors, prefix);
        	}

        	rule.selector = matches.join("");

        });

    };

});
