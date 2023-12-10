import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтчетОЗакупкахMixin
} from '../mixins/regenerated/models/i-i-s-bekap4-отчет-о-закупках';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчетОЗакупкахMixin, Validations, {
});

defineProjections(Model);

export default Model;
