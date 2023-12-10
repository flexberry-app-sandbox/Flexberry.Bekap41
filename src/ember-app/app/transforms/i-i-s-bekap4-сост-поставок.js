import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостПоставокEnum from '../enums/i-i-s-bekap4-сост-поставок';

export default FlexberryEnum.extend({
  enum: СостПоставокEnum,
  sourceType: 'IIS.Bekap4.СостПоставок'
});
