import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  состОтгрузки: DS.attr('i-i-s-bekap4-сост-поставок'),
  состояниеОплаты: DS.attr('i-i-s-bekap4-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number'),
  организации: DS.hasMany('i-i-s-bekap4-организации', { inverse: 'заказПост', async: false }),
  заказ: DS.hasMany('i-i-s-bekap4-т-ч-заказ', { inverse: 'заказПост', async: false }),
  склады: DS.hasMany('i-i-s-bekap4-склады', { inverse: 'заказПост', async: false }),
  контрагенты: DS.hasMany('i-i-s-bekap4-контрагенты', { inverse: 'заказПост', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-bekap4-заказ-пост.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-bekap4-заказ-пост.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-bekap4-заказ-пост.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-bekap4-заказ-пост.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-bekap4-заказ-пост.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-bekap4-заказ-пост.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-bekap4-заказ-пост.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-bekap4-заказ-пост.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-bekap4-заказ-пост.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-bekap4-заказ-пост.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказПостE', 'i-i-s-bekap4-заказ-пост', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    суммаДокумента: attr('Сумма документа', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 3 }),
    организации: hasMany('i-i-s-bekap4-организации', 'Организации', {
      организация: attr('Организация', { index: 0 })
    }),
    контрагенты: hasMany('i-i-s-bekap4-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 0 })
    }),
    склады: hasMany('i-i-s-bekap4-склады', 'Склады', {
      склад: attr('Склад', { index: 0 })
    }),
    заказ: hasMany('i-i-s-bekap4-т-ч-заказ', 'Заказ', {
      цена: attr('Цена', { index: 0 }),
      этоУслуга: attr('Это услуга', { index: 1 }),
      суммаНДС: attr('Сумма НДС', { index: 2 }),
      количество: attr('Количество', { index: 3 }),
      сумма: attr('Сумма', { index: 4 })
    })
  });

  modelClass.defineProjection('ЗаказПостL', 'i-i-s-bekap4-заказ-пост', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    суммаДокумента: attr('Сумма документа', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 3 })
  });

  modelClass.defineProjection('ЗаказПоставщикуE', 'i-i-s-bekap4-заказ-пост', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    суммаДокумента: attr('Сумма документа', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    заказ: hasMany('i-i-s-bekap4-т-ч-заказ', 'Заказ', {
      цена: attr('Цена', { index: 0 }),
      этоУслуга: attr('Это услуга', { index: 1 }),
      суммаНДС: attr('Сумма НДС', { index: 2 }),
      количество: attr('Количество', { index: 3 }),
      сумма: attr('Сумма', { index: 4 })
    }),
    склады: hasMany('i-i-s-bekap4-склады', 'Склады', {
      склад: attr('Склад', { index: 0 })
    })
  });

  modelClass.defineProjection('ЗаказПоставщикуL', 'i-i-s-bekap4-заказ-пост', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    суммаДокумента: attr('Сумма документа', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 })
  });
};
