odoo.define('bi_pos_category_layout.CategoryPanel', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');

    class CategoryPanel extends PosComponent {
        setup() {
            super.setup();
        }
    }
    CategoryPanel.template = 'CategoryPanel';

    Registries.Component.add(CategoryPanel);

    return CategoryPanel;
});
