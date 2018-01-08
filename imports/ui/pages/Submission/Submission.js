import React, { Component } from 'react';
import SubmissionForm from '/imports/ui/components/SubmissionForm';
import { createSubmission } from '/imports/api/submission/methods';

class Submission extends Component {
  createSubmission = (doc) => {
    createSubmission
      .callPromise(doc)
      .then(id => this.props.router.push(`/submission/${id}`))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div id="Submission">
        <div id="page-header">
          <div className="content">
            <div className="content-block">
              <div className="page-title">
                <h1>Form</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="section">
            <div className="section-body">
              <div className="section-body-block content">
                <SubmissionForm onSubmit={this.createSubmission} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Submission;
