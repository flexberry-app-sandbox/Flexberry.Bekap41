import { Serializer as ПланЗакупокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-bekap4-план-закупок';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПланЗакупокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
