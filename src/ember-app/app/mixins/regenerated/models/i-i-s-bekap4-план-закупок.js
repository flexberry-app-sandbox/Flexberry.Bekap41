import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  план: DS.hasMany('i-i-s-bekap4-план', { inverse: 'планЗакупок', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-bekap4-план-закупок.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  план: {
    descriptionKey: 'models.i-i-s-bekap4-план-закупок.validations.план.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланЗакупокE', 'i-i-s-bekap4-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 }),
    план: hasMany('i-i-s-bekap4-план', 'План', {
      этоУслуга: attr('Это услуга', { index: 0 }),
      количество: attr('Количество', { index: 1 })
    })
  });

  modelClass.defineProjection('ПланЗакупокL', 'i-i-s-bekap4-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 })
  });
};
