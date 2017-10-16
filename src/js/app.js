/* #############################################################################
    ITELIOS FRONT END CHALLENGE
############################################################################# */

/*  IMPORTS     ############################################################# */

    import * as requests from "./requests/requests.js";
    import * as cardProduct from "./components/c__card-product.js";
    import CPSlider from "./components/c__card-product--slider.js";
    import "./helpers/trunc.js";

/*  VARIABLES   ############################################################# */


    var dataProduct;

/*  GET DATA    ############################################################# */

    requests.getProducts()
        .then(function (e) {
            dataProduct = JSON.parse(e.target.response);
            productRecomendationInit(dataProduct);
        }, function (e) {
            // handle errors
            console.log(e);
        }
    );

/*  PRODUCT RECOMMENDATIONS    ############################################## */

    function productRecomendationInit(dataProduct){
        cardProduct.populate(
            [dataProduct[0].data.item],
            document.getElementsByClassName("product-recommendation__viewed")[0],
            document.getElementsByClassName("product-recommendation__viewed")[0].querySelectorAll(".card-product")[0].innerHTML
        )
        cardProduct.populate(
            dataProduct[0].data.recommendation,
            document.getElementsByClassName("product-recommendation__featured")[0].querySelectorAll(".card-product--slider")[0],
            document.getElementsByClassName("product-recommendation__featured")[0].querySelectorAll(".card-product")[0].innerHTML
        )
        const cardSlider = new CPSlider(
            document.getElementsByClassName('card-product--slider-wrap')[0],
            {slideTimeout: 10000}
        );
        window.onresize = function(){cardSlider.reinit();}
    };
