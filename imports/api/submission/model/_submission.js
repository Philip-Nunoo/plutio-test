import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Submission = new Mongo.Collection('Submission');

// TODO: Finish the schema
Submission.schema = new SimpleSchema({
  firstName: String,
  lastName: String,
  age: Number,
});

Submission.attachSchema(Submission.schema);
