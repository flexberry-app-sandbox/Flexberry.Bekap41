import { Serializer as ОтчетОЗакупкахSerializer } from
  '../mixins/regenerated/serializers/i-i-s-bekap4-отчет-о-закупках';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтчетОЗакупкахSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
