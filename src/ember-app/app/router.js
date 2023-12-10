import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-bekap4-заказ-пост-l');
  this.route('i-i-s-bekap4-заказ-пост-e',
  { path: 'i-i-s-bekap4-заказ-пост-e/:id' });
  this.route('i-i-s-bekap4-заказ-пост-e.new',
  { path: 'i-i-s-bekap4-заказ-пост-e/new' });
  this.route('i-i-s-bekap4-отчет-о-закупках-l');
  this.route('i-i-s-bekap4-отчет-о-закупках-e',
  { path: 'i-i-s-bekap4-отчет-о-закупках-e/:id' });
  this.route('i-i-s-bekap4-отчет-о-закупках-e.new',
  { path: 'i-i-s-bekap4-отчет-о-закупках-e/new' });
  this.route('i-i-s-bekap4-план-закупок-l');
  this.route('i-i-s-bekap4-план-закупок-e',
  { path: 'i-i-s-bekap4-план-закупок-e/:id' });
  this.route('i-i-s-bekap4-план-закупок-e.new',
  { path: 'i-i-s-bekap4-план-закупок-e/new' });
});

export default Router;
