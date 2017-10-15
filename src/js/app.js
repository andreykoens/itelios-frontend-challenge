/* #############################################################################
    ITELIOS FRONT END CHALLENGE
############################################################################# */

/*  IMPORTS     ############################################################# */

    import * as requests from "./requests/requests.js";

/*  VARIABLES   ############################################################# */

    let dataProduct;

/*  GET DATA    ############################################################# */

    requests.getProducts()
        .then(function (e) {
            dataProduct = e.target.response;
        }, function (e) {
            // handle errors
            console.log(e);
        }
    );
