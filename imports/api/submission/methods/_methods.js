import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';
import { Submission } from '../model';

export const createSubmission = new ValidatedMethod({
  name: 'Submission.insert',
  mixins: [CallPromiseMixin],
  validate: Submission.schema.validator(),
  run: doc => Submission.insert(doc),
});
