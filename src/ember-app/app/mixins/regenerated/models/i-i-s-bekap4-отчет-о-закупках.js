import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОЗакупкахE', 'i-i-s-bekap4-отчет-о-закупках', {
    
  });

  modelClass.defineProjection('ОтчетОЗакупкахL', 'i-i-s-bekap4-отчет-о-закупках', {
    
  });
};
