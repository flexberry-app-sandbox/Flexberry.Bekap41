import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBekap4ЗаказПостLForm from './forms/i-i-s-bekap4-заказ-пост-l';
import IISBekap4ОтчетОЗакупкахLForm from './forms/i-i-s-bekap4-отчет-о-закупках-l';
import IISBekap4ПланЗакупокLForm from './forms/i-i-s-bekap4-план-закупок-l';
import IISBekap4ЗаказПостEForm from './forms/i-i-s-bekap4-заказ-пост-e';
import IISBekap4ОтчетОЗакупкахEForm from './forms/i-i-s-bekap4-отчет-о-закупках-e';
import IISBekap4ПланЗакупокEForm from './forms/i-i-s-bekap4-план-закупок-e';
import IISBekap4ЕдиницыИзмерModel from './models/i-i-s-bekap4-единицы-измер';
import IISBekap4ЗаказПостModel from './models/i-i-s-bekap4-заказ-пост';
import IISBekap4КонтрагентыModel from './models/i-i-s-bekap4-контрагенты';
import IISBekap4НоменклатураModel from './models/i-i-s-bekap4-номенклатура';
import IISBekap4ОрганизацииModel from './models/i-i-s-bekap4-организации';
import IISBekap4ОтчетОЗакупкахModel from './models/i-i-s-bekap4-отчет-о-закупках';
import IISBekap4ПланЗакупокModel from './models/i-i-s-bekap4-план-закупок';
import IISBekap4ПланModel from './models/i-i-s-bekap4-план';
import IISBekap4СкладыModel from './models/i-i-s-bekap4-склады';
import IISBekap4ТЧЗаказModel from './models/i-i-s-bekap4-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-bekap4-единицы-измер': IISBekap4ЕдиницыИзмерModel,
    'i-i-s-bekap4-заказ-пост': IISBekap4ЗаказПостModel,
    'i-i-s-bekap4-контрагенты': IISBekap4КонтрагентыModel,
    'i-i-s-bekap4-номенклатура': IISBekap4НоменклатураModel,
    'i-i-s-bekap4-организации': IISBekap4ОрганизацииModel,
    'i-i-s-bekap4-отчет-о-закупках': IISBekap4ОтчетОЗакупкахModel,
    'i-i-s-bekap4-план-закупок': IISBekap4ПланЗакупокModel,
    'i-i-s-bekap4-план': IISBekap4ПланModel,
    'i-i-s-bekap4-склады': IISBekap4СкладыModel,
    'i-i-s-bekap4-т-ч-заказ': IISBekap4ТЧЗаказModel
  },

  'application-name': 'Bekap4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Bekap4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Bekap4',
          title: 'Bekap4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        bekap4: {
          caption: 'Bekap4',
          title: 'Bekap4',
          'i-i-s-bekap4-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-bekap4-отчет-о-закупках-l': {
            caption: 'Отчет о закупках',
            title: ''
          },
          'i-i-s-bekap4-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-bekap4-заказ-пост-l': IISBekap4ЗаказПостLForm,
    'i-i-s-bekap4-отчет-о-закупках-l': IISBekap4ОтчетОЗакупкахLForm,
    'i-i-s-bekap4-план-закупок-l': IISBekap4ПланЗакупокLForm,
    'i-i-s-bekap4-заказ-пост-e': IISBekap4ЗаказПостEForm,
    'i-i-s-bekap4-отчет-о-закупках-e': IISBekap4ОтчетОЗакупкахEForm,
    'i-i-s-bekap4-план-закупок-e': IISBekap4ПланЗакупокEForm
  },

});

export default translations;
