
    //IMPORTS
        let mix = require('laravel-mix');
        let ImageminPlugin = require( 'imagemin-webpack-plugin' ).default;

    //CONFIGURATION
        mix.webpackConfig( {
            plugins: [
                new ImageminPlugin( {
                    // disable: process.env.NODE_ENV !== 'production', // Disable during development
                    pngquant: {
                        quality: '95-100',
                    },
                    test: /\.(jpe?g|png|gif|svg)$/i,
                } ),
            ],
        } );

    //BUILD
        mix.js('src/js/app.js', 'dist/assets/js')
           .sass('src/scss/app.scss', 'dist/assets/css')
           .copy( 'src/img', 'dist/assets/img', false )
           .copy( 'src/*.html', 'dist/', false );
