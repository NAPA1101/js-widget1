define([
        'jquery',
        'mage/translate',
        'jquery/ui'
    ],
    function ($, $t) {
        'use strict';

        return function (target) {
            $.widget('mage.catalogAddToCart', target, {
                options: {
                    addToCartButtonTextWhileAdding: $t('Item in Cart'),
                    addToCartButtonTextAdded: $t('Item in Cart'),
                }
            });

            return $.mage.catalogAddToCart;
        };
    });

