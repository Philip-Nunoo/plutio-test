import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Submission } from '/imports/api/submission/model';
import SubmissionForm from '/imports/ui/components/SubmissionForm';

class SubmissionView extends Component {
  render() {
    return (
      <div id="SubmissionDetail">
        <div id="page-header">
          <div className="content">
            <div className="content-block">
              <div className="page-title">
                <h1>Submission Form ~ {this.props.params.id}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="section">
            <div className="section-body">
              <div className="section-body-block content">
                <SubmissionForm
                  onSubmit={this.createSubmission}
                  model={this.props.submission}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(({ params: { id } }) => {
  Meteor.subscribe('submissions.findOne', id);
  return {
    submission: Submission.findOne(id),
  };
})(SubmissionView);
