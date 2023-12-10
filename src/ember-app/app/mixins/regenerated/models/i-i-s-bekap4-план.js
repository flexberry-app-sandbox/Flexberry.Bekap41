import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  этоУслуга: DS.attr('boolean'),
  планЗакупок: DS.belongsTo('i-i-s-bekap4-план-закупок', { inverse: 'план', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-bekap4-план.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этоУслуга: {
    descriptionKey: 'models.i-i-s-bekap4-план.validations.этоУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  планЗакупок: {
    descriptionKey: 'models.i-i-s-bekap4-план.validations.планЗакупок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланE', 'i-i-s-bekap4-план', {
    этоУслуга: attr('Это услуга', { index: 0 }),
    количество: attr('Количество', { index: 1 })
  });
};
