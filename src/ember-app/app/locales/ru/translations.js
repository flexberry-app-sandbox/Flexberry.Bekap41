import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Bekap4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Bekap4',
          title: 'Bekap4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
