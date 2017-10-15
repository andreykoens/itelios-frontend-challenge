/* #############################################################################
    CARD PRODUCT
############################################################################# */

/*  POPULATE TEMPLATE    #################################################### */

    function populate(productsList, parent, template) {
        parent.getElementsByClassName("js__template")[0].remove();
        productsList.map(function(product){
            let item = document.createElement('div');
            item.innerHTML = template;
            item.classList.add("card-product");

            item.getElementsByClassName("card-product__image")[0].src = "./assets/img/" + product.imageName;
            item.getElementsByClassName("card-product__name")[0].innerHTML = product.name.trunc(100, true);
            item.getElementsByClassName("card-product__pricing")[0].querySelectorAll("span")[0].innerHTML = product.price;
            item.getElementsByClassName("card-product__installment")[0].innerHTML = product.productInfo.paymentConditions;

            item.setAttribute("businessId", product.businessId);

            parent.appendChild(item);
        });
    }

    export {populate}
