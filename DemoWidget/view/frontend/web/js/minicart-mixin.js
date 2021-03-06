define([
    'jquery',
    'uiComponent'
], function($, Component) {
    'use strict';
    return function(target) {

        var sidebarInitialized = false,
            addToCartCalls = 0,
            miniCart;

        miniCart = $('[data-block=\'minicart\']');

        /**
         * @return {Boolean}
         */
        function initSidebar() {
            if (miniCart.data('mageSidebar')) {
                miniCart.sidebar('update');
            }

            if (!$('[data-role=product-item]').length) {
                return false;
            }
            miniCart.trigger('contentUpdated');

            if (sidebarInitialized) {
                return false;
            }
            sidebarInitialized = true;
            miniCart.sidebar({
                'targetElement': 'div.block.block-minicart',
                'url': {
                    'checkout': window.checkout.checkoutUrl,
                    'update': window.checkout.updateItemQtyUrl,
                    'remove': window.checkout.removeItemUrl,
                    'loginUrl': window.checkout.customerLoginUrl,
                    'isRedirectRequired': window.checkout.isRedirectRequired
                },
                'button': {
                    'checkout': '#top-cart-btn-checkout',
                    'remove': '#mini-cart a.action.delete',
                    'close': '#btn-minicart-close'
                },
                'showcart': {
                    'parent': 'span.counter',
                    'qty': 'span.counter-number',
                    'label': 'span.counter-label'
                },
                'minicart': {
                    'list': '#mini-cart',
                    'content': '#minicart-content-wrapper',
                    'qty': 'div.items-total',
                    'subtotal': 'div.subtotal span.price',
                    'maxItemsVisible': window.checkout.minicartMaxItemsVisible
                },
                'item': {
                    'qty': ':input.cart-item-qty',
                    'button': ':button.update-cart-item'
                },
                'confirmMessage': $.mage.__('test?')
            });
        }

            miniCart.on('dropdowndialogopen', function () {
            initSidebar();
            });
        }
    });
