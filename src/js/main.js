require.config({
    baseUrl: './js/',
    paths: {
        'flex': './libs/flexible'
    }
})
require('./init/init', function(init) {
    init: init;
})