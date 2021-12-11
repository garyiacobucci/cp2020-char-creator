import React from 'react';

const Info = (props) => {
  return (
    <div className="component-wrapper">

      <div className="widget">
        <h4>
        <i>As a Cyberpunk, you grab technology by the throat and hang on. You've got interface plugs in your wrists,
        weapons in your arms, lasers in your eyes. biochip programs in your brain. You become the car you drive, 
        the gun you shoot...With cyborged fingers you pick computer locks; with enhanced senses, you see into the Future.</i>
        <p>- Introduction to <a href="https://talsorianstore.com/products/cyberpunk-2020" target="_blank">Cyberpunk 2020, 2nd Ed. (1990)</a></p>
        </h4>
        <span className="callout">Use this cyberdeck application to assist in developing your Player Character for R. Talsorian Games' iconic
          tabletop roleplaying game of the dark future. //
        </span>
        <ul>
          <li>Source code <a href="https://githubhelp.com/garyiacobucci/cp2020-char-creator" target="_blank">available on GitHub</a></li>
          <li>Generator built by <a href="https://githubhelp.com/garyiacobucci" target="_blank">Giovanni Iacobucci</a>, developed from an earlier <a href="https://github.com/ericdorsey/cp2020" target="_blank">project</a> by Eric Dorsey</li>
        </ul>
      </div>

    </div>

  )
}

export default Info