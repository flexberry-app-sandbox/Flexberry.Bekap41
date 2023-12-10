import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bekap4-план', 'Unit | Serializer | i-i-s-bekap4-план', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-bekap4-план',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-bekap4-сост-оплаты',
    'transform:i-i-s-bekap4-сост-поставок',

    'model:i-i-s-bekap4-единицы-измер',
    'model:i-i-s-bekap4-заказ-пост',
    'model:i-i-s-bekap4-контрагенты',
    'model:i-i-s-bekap4-номенклатура',
    'model:i-i-s-bekap4-организации',
    'model:i-i-s-bekap4-отчет-о-закупках',
    'model:i-i-s-bekap4-план-закупок',
    'model:i-i-s-bekap4-план',
    'model:i-i-s-bekap4-склады',
    'model:i-i-s-bekap4-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
