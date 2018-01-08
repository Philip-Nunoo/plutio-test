import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { MainLayout } from '/imports/ui/layouts';
import { TaskPage, Submission, SubmissionView } from '/imports/ui/pages';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={TaskPage} />
        <Route path="/submission" component={Submission} />
        <Route path="/submission/:id" component={SubmissionView} />
      </Route>
    </Router>,
    document.getElementById('react-root'),
  );
});
