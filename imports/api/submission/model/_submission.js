import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Submission = new Mongo.Collection('Submission');

// TODO: Finish the schema
Submission.schema = new SimpleSchema({

});


Submission.attachSchema(Submission.schema);
