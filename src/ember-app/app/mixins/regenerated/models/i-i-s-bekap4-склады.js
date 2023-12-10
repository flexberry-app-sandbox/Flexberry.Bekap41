import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  склад: DS.attr('string'),
  заказПост: DS.belongsTo('i-i-s-bekap4-заказ-пост', { inverse: 'склады', async: false })
});

export let ValidationRules = {
  склад: {
    descriptionKey: 'models.i-i-s-bekap4-склады.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказПост: {
    descriptionKey: 'models.i-i-s-bekap4-склады.validations.заказПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладыE', 'i-i-s-bekap4-склады', {
    склад: attr('Склад', { index: 0 })
  });
};
