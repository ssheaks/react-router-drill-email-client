import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';

// 

export default function Email() {
    return (
        <div className="email">
            <Sidebar />
            <main>
                <EmailList folderId="inbox" />
                {/* <SingleEmail folderId="inbox" emailId="1" /> */}
            </main>
        </div>
    );
}


//What we want:
// When you visit /:folderId you should see a list of emails in that folder.
// You can use the <EmailList> component to display the list of emails in a particular folder.
// For example, when visiting /inbox it should show the list of emails from the inbox part of the state
// When you visit /:folderId/:emailId you should see the contents of a single email.
// You can use the <SingleEmail> component to displays the contents of an email.
// For example, when visiting /spam/0 it should show the email with an id of 0 in the spam section of the state.
// When you visit / you should be redirected to /inbox.
// You can use React Router's Redirect and Switch components to perform redirects.
// The sidebar should always be displayed, no matter which route you are on.
// Your app should also contain appropriate links between the different sections of content:

// The menu items in the sidebar should link to /inbox and /spam respectively.
// The titles of the emails in EmailList should link to the corresponding page for that email. For example, clicking on the title of the first email in the spam folder should take you to /spam/0.