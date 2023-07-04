odoo.define('bi_pos_category_layout.HomeCategory', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');
    const { useListener } = require("@web/core/utils/hooks");

    class HomeCategory extends PosComponent {
        setup() {
            super.setup();
            useListener('categ-popup', this._categPopup);
        }
        get selectedCategoryId() {
            return this.env.pos.get('selectedCategoryId');
        }
        async _categPopup() {
            let selectionList = [{
                id: 0,
                label:'All Items',
                isSelected: 0 === this.env.pos.get('selectedCategoryId'),
                item: {id:0,name:'All Items'},
            }];
            let subs = this.props.subcategories.map(category => ({
                id: category.id,
                label: category.name,
                isSelected: category.id === this.env.pos.get('selectedCategoryId'),
                item: category,
            }));
            selectionList = selectionList.concat(subs);
            const { confirmed, payload: selectedCategory } = await this.showPopup(
                'SelectionPopup',
                {
                    title: this.env._t('Select the category'),
                    list: selectionList,
                }
            );
            if (confirmed) {
                this.trigger('switch-category', selectedCategory.id);
            }
        }
    }
    HomeCategory.template = 'HomeCategory';

    Registries.Component.add(HomeCategory);

    return HomeCategory;
});
