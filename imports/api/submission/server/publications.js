import { Meteor } from 'meteor/meteor';
import { Submission } from '../model';

Meteor.publish('submissions.find', () => Submission.find());
Meteor.publish('submissions.findOne', _id => Submission.find(_id));
