import React from 'react';
import { Button } from '@material-ui/core';

const Info = (props) => {
  return (
    <div className="widget">
      <p>
        Use the controls and fields below to create your character.
        Any radio button can be clicked again (even if already selected) to
        re-roll (random options) or reset selections (manual options).
        Once you've finished choosing all your character details below,
        you can:
      </p>
      <div>
        <Button variant="contained">Copy Character To Clipboard</Button>
        <span>Copy text version of your character to the clipboard</span>
      </div>
      <div>
        <Button variant="contained">Save Character Sheet as Image</Button>
        Save image of character sheet (only works in Mozilla Firefox)
      </div>
      <h3>Useful Links:</h3>
        <ul>
          <li>Report A Problem</li>
          <li>Generator created by Eric Dorsey</li>
          <li>If you find it useful and are so compelled, you can buy me a coffee</li>
          <li>Source code available on GitHub here</li>
        </ul>
    </div>
  )
}

export default Info