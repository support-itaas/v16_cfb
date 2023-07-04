# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

{
    'name': 'POS Category Layouts',
    'version': '16.0.0.0',
    'category': 'Point of Sale',
    'summary': 'point of sale product category list view pos category grid view layout pos category list view layout pos multi category layout point of sale category layout point of sale category list layout point of sale category list grid layout pos categories layouts',
    'description': """ This odoo app helps user to show point of sale product category in multiple view like list view or grid view, User can see category layout in list view or grid view as per configuration. User can change category layout from list to grid view as per need. """,
    'author': 'BrowseInfo',
    'website': 'https://www.browseinfo.in',
    "price": 15,
    "currency": 'EUR',
    'depends': ['base', 'point_of_sale'],
    'data': [
        'views/pos_config_views.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'bi_pos_category_layout/static/src/css/custom.css',
            'bi_pos_category_layout/static/src/js/ProductScreen/ProductsWidget.js',
            'bi_pos_category_layout/static/src/js/ProductScreen/HomeCategory.js',
            'bi_pos_category_layout/static/src/js/ProductScreen/CategoryPanel.js',
            'bi_pos_category_layout/static/src/xml/ProductScreen/ProductsWidget.xml',
            'bi_pos_category_layout/static/src/xml/ProductScreen/HomeCategory.xml',
            'bi_pos_category_layout/static/src/xml/ProductScreen/ProductsWidgetControlPanel.xml',
            'bi_pos_category_layout/static/src/xml/ProductScreen/CategoryPanel.xml',
        ],
    },
    'auto_install': False,
    'installable': True,
    'application': True,
    'live_test_url': 'https://www.youtube.com/watch?v=yV84x4DCe_Y',
    'images': ["static/description/Banner.gif"],
    'license': 'OPL-1',
}
