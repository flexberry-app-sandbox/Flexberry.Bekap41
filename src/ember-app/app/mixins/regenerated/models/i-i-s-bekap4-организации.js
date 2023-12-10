import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  организация: DS.attr('string'),
  заказПост: DS.belongsTo('i-i-s-bekap4-заказ-пост', { inverse: 'организации', async: false })
});

export let ValidationRules = {
  организация: {
    descriptionKey: 'models.i-i-s-bekap4-организации.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказПост: {
    descriptionKey: 'models.i-i-s-bekap4-организации.validations.заказПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацииE', 'i-i-s-bekap4-организации', {
    организация: attr('Организация', { index: 0 })
  });
};
