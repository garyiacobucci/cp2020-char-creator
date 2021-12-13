import React from 'react';
import {Button} from '@material-ui/core';

const Info = () => {
  return (
    <div className="widget">
      <p>Use the controls and fields below to create your character. Any radio button can be clicked again (even if already selected) to re-roll (random options) or reset selections (manual options). Once you've finished choosing all your character details below, you can:</p>
      <Button variant="contained">Copy Character To Clipboard	</Button> Copy text version of your character to the clipboard<br/>
      <Button variant="contained">Save Character Sheet as Image</Button> Save image of character sheet (only works in Mozilla Firefox)<br/>
      <p>Useful Links:
        Report A Problem
        Generator created by Eric Dorsey
        If you find it useful and are so compelled you can buy me a coffee
      </p>
    </div>
  )
}

export default Info