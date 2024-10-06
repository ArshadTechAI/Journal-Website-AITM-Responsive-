import React from 'react';
import './AuthorDesk.css';

function AuthorsDesk() {
  return (
    <div>
        <div className="authors_desk">
        Author's Desk
        <hr />
        <a href="">Current Issue</a><br />
        <a href="">Indexing</a><br />
        <a href="">Open Access</a><br />
        <a href="">Author's Guidelines</a><br />
        <a href="">Call For Paper</a><br />
        <a href="">Online Submission</a><br />
        <a href="">Reviewer Policy</a><br />
        <a href="">Reviewer Guidelines</a><br />
        <a href="">Plagiarism Policies</a><br />
        <a href="">Withdrawal Policies</a><br />

        <div style={{ height: '10px'}}></div>

      <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <button className="submit_button">Submit Article</button>

      </div>
      </div>
    </div>
  )
}

export default AuthorsDesk