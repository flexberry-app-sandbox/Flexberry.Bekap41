import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номенклатура: DS.attr('string'),
  тЧЗаказ: DS.belongsTo('i-i-s-bekap4-т-ч-заказ', { inverse: 'номенклатура', async: false })
});

export let ValidationRules = {
  номенклатура: {
    descriptionKey: 'models.i-i-s-bekap4-номенклатура.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тЧЗаказ: {
    descriptionKey: 'models.i-i-s-bekap4-номенклатура.validations.тЧЗаказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-bekap4-номенклатура', {
    номенклатура: attr('Номенклатура', { index: 0 })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-bekap4-номенклатура', {
    номенклатура: attr('Номенклатура', { index: 0 })
  });
};
