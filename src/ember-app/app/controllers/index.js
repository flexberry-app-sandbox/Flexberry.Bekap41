import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.bekap4.caption'),
          title: i18n.t('forms.application.sitemap.bekap4.title'),
          children: [{
            link: 'i-i-s-bekap4-заказ-пост-l',
            caption: i18n.t('forms.application.sitemap.bekap4.i-i-s-bekap4-заказ-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.bekap4.i-i-s-bekap4-заказ-пост-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-bekap4-отчет-о-закупках-l',
            caption: i18n.t('forms.application.sitemap.bekap4.i-i-s-bekap4-отчет-о-закупках-l.caption'),
            title: i18n.t('forms.application.sitemap.bekap4.i-i-s-bekap4-отчет-о-закупках-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-bekap4-план-закупок-l',
            caption: i18n.t('forms.application.sitemap.bekap4.i-i-s-bekap4-план-закупок-l.caption'),
            title: i18n.t('forms.application.sitemap.bekap4.i-i-s-bekap4-план-закупок-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})