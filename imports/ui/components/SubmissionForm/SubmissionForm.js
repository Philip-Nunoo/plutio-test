import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AutoForm,
  AutoField,
  SubmitField,
  ErrorsField,
} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

const SubmissionSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  age: Number,
});

class SubmissionForm extends Component {
  state = { haveReadReadMe: false, isEditable: true };

  componentWillReceiveProps(nextProps) {
    const { model } = nextProps;

    this.setState({ isEditable: !model, haveReadReadMe: !!model });
  }

  onSubmit = doc => this.props.onSubmit(doc);

  render() {
    return (
      <AutoForm
        label={false}
        placeholder
        schema={SubmissionSchema}
        onSubmit={this.onSubmit}
        model={this.props.model}
      >
        <div className="fieldset">
          <AutoField
            name="firstName"
            className="fieldset-content"
            disabled={!this.state.isEditable}
          />
        </div>
        <div className="fieldset">
          <AutoField
            name="lastName"
            className="fieldset-content"
            disabled={!this.state.isEditable}
          />
        </div>
        <div className="fieldset">
          <AutoField
            name="age"
            className="fieldset-content"
            disabled={!this.state.isEditable}
          />
        </div>
        {this.state.isEditable && (
          <div className="fieldset">
            <label className="checkbox" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                value={this.state.haveReadReadMe}
                onChange={() =>
                  this.setState({ haveReadReadMe: !this.state.haveReadReadMe })
                }
              />
              <span className="checkbox-toggle" />
              <p className="checkbox-inner-label">I have read the readme!</p>
            </label>
          </div>
        )}
        {this.state.isEditable && <ErrorsField />}

        {this.state.isEditable && (
          <div className="popup-body-block content">
            <SubmitField
              disabled={!this.state.haveReadReadMe}
              className="button button-green button-fullwidth"
            />
          </div>
        )}
      </AutoForm>
    );
  }
}

SubmissionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  model: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
  })
};

export default SubmissionForm;
