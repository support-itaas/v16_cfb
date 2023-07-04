odoo.define('bi_pos_category_layout.ProductsWidget', function(require) {
    'use strict';

    const ProductsWidget = require('point_of_sale.ProductsWidget');
    const Registries = require('point_of_sale.Registries');
    const { useListener } = require("@web/core/utils/hooks");
    const { onMounted,useState } = owl;

    const PosProductScreen = ProductsWidget =>
        class extends ProductsWidget {
            setup() {
                super.setup();
                // $(".right-button").hide();
                // $(".left-button").show();
                this.state1 = useState({ toggle: false });
                useListener('left-button', this._onClickLeftBtn);

                onMounted(() => {
                    $(".right-button").hide();
                    $(".left-button").show();
                });
            }
            
			_onClickLeftBtn(){
                if (this.state1.toggle == true) {
                    $(".right-button").hide();
                    $(".left-button").show();
                    this.state1.toggle = false
                }else{
                    $(".left-button").hide();
                    $(".right-button").show();
                    this.state1.toggle = true
                }
            }

        };

    Registries.Component.extend(ProductsWidget, PosProductScreen);

    return ProductsWidget;
});
