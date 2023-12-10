import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицаИзмер: DS.attr('string'),
  тЧЗаказ: DS.belongsTo('i-i-s-bekap4-т-ч-заказ', { inverse: 'единицыИзмер', async: false })
});

export let ValidationRules = {
  единицаИзмер: {
    descriptionKey: 'models.i-i-s-bekap4-единицы-измер.validations.единицаИзмер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тЧЗаказ: {
    descriptionKey: 'models.i-i-s-bekap4-единицы-измер.validations.тЧЗаказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЕдиницыИзмерE', 'i-i-s-bekap4-единицы-измер', {
    
  });

  modelClass.defineProjection('ЕдиницыИзмеренияE', 'i-i-s-bekap4-единицы-измер', {
    
  });

  modelClass.defineProjection('ЕдиницыИзмеренияL', 'i-i-s-bekap4-единицы-измер', {
    
  });
};
