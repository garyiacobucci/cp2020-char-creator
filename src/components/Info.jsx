import React from 'react';
import { Button } from '@material-ui/core';

const Info = (props) => {
  return (
    <div className="component-wrapper">

      <div className="widget">
        <p>
          Use the controls and fields below to create your character.
          Any radio button can be clicked again (even if already selected) to
          re-roll (random options) or reset selections (manual options).
        </p>
        <h3>Useful Links:</h3>
          <ul>
            <li>Report A Problem</li>
            <li>Generator built by <a href="https://githubhelp.com/garyiacobucci" target="_blank">Giovanni Iacobucci</a>, developed from an earlier <a href="https://github.com/ericdorsey/cp2020" target="_blank">project</a> by Eric Dorsey</li>
            <li>If you find it useful and are so compelled, you can buy me a coffee</li>
            <li>Source code <a href="https://githubhelp.com/garyiacobucci/cp2020-char-creator" target="_blank">available on GitHub</a></li>
          </ul>
      </div>

    </div>

  )
}

export default Info