import React from 'react';

const TaskPage = () => (
  <div>
    <div className="content">
      <div className="section">
        <div className="section-body">
          <div className="section-body-block content">
            <p>It is a very simple test and should not take more than 1 hour. This project is a basic Meteor app and what
              we would like you to do is:
            </p>
            <ol>
              <li>
                1. Create a new route pointing to /submission and a new menu item linking to it
              </li>
              <li>
                2. HTML for newly created page is below:
                <pre>
                  {`
                  <div id="page-header">
                    <div class="content">
                      <div class="content-block">
                        <div class="page-title"><h1>Form</h1></div>
                      </div>
                    </div>
                  </div>
                  <div class="content">
                    <div class="section">
                      <div class="section-body">
                        <div class="section-body-block content">
                          <form>
                            <div class="fieldset">
                              <div class="fieldset-content">
                                <input type="text" placeholder="First Name*" />
                              </div>
                            </div>
                            <div class="fieldset">
                              <div class="fieldset-content">
                                <input type="text" placeholder="Last Name" />
                              </div>
                            </div>
                            <div class="fieldset">
                              <div class="fieldset-content">
                                <input type="number" placeholder="Age" />
                              </div>
                            </div>
                            <div class="fieldset">
                              <label class="checkbox">
                                <input type="checkbox"/>
                                <span class="checkbox-toggle"></span>
                                <p class="checkbox-inner-label">I like pizza.</p>
                              </label>
                            </div>
                            <div class="popup-body-block content">
                              <button type="submit" class="button button-green button-fullwidth">Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  `}
                </pre>
              </li>
              <li>
                3. Create form methods to save a form data to DB
              </li>
              <li>
                4. On form submission, redirect to new page which simply shows inputted data (preferably reactively)
                with a similar look like a form page, just replace form with static HTML.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-body">
          <div className="section-body-block content">
            <h2>
              A few tips:
            </h2>
            <ul>
              <li>
                Plutio is using React Uniforms (https://github.com/vazco/uniforms) package to save forms.
                It is not required for this test but it would be really cool if you at least tried to implement it.
              </li>
              <li>You can use any npm or Meteor modules</li>
              <li>Modularity and reusability is <b>extremely important</b></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TaskPage;
