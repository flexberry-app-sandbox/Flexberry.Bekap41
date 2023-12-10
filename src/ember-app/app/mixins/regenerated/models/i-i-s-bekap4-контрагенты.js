import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  контрагент: DS.attr('string'),
  заказПост: DS.belongsTo('i-i-s-bekap4-заказ-пост', { inverse: 'контрагенты', async: false })
});

export let ValidationRules = {
  контрагент: {
    descriptionKey: 'models.i-i-s-bekap4-контрагенты.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказПост: {
    descriptionKey: 'models.i-i-s-bekap4-контрагенты.validations.заказПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентыE', 'i-i-s-bekap4-контрагенты', {
    контрагент: attr('Контрагент', { index: 0 })
  });

  modelClass.defineProjection('КонтрагентыL', 'i-i-s-bekap4-контрагенты', {
    контрагент: attr('Контрагент', { index: 0 })
  });
};
