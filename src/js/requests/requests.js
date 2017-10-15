/* #############################################################################
    DATA REQUESTS
############################################################################# */

/*  PRODUCT REQUEST     ##################################################### */

    function getProducts() {

        return new Promise( function (resolve, reject) {
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", "./data/products.json", true);
            xhttp.onload = resolve;
            xhttp.onerror = reject;
            xhttp.send();
        });

    };

    export {getProducts}
