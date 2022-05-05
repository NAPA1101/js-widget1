/*var config = {
    map: {
        '*': {
            catalogAddToCart:'Perspective_DemoWidget/js/CatalogAddToCart'
        }
    }
};*/



var config = {
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Perspective_DemoWidget/js/catalog-add-to-cart-mixin': true
            },
            'Magento_Checkout/js/sidebar': {
                'Perspective_DemoWidget/js/minicart-mixin': true
            }
        }
    }
};


