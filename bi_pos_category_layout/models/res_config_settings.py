# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

from odoo import fields, models, api, _


class Company(models.Model):
    _inherit = 'res.company'

    custom_layout = fields.Selection([("1", "List View"), ("2", 'Grid View')], default='1')


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    custom_layout = fields.Selection(related='company_id.custom_layout', readonly=False)


class Pos_Session(models.Model):
    _inherit = 'pos.session'


    def _loader_params_res_company(self):
        res = super(Pos_Session, self)._loader_params_res_company()
        fields = res.get('search_params').get('fields')
        fields.extend(['custom_layout'])
        res['search_params']['fields'] = fields
        return res