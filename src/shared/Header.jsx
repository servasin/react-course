import { hot } from 'react-hot-loader/root';
import * as React from "react";

function HeaderComponent() {
  return (
    <header>
      <h1>Reddit for our own !</h1>
      <p>Hello there !</p>
    </header>
  );
}

export const Header = hot(HeaderComponent);

/**
 *  settings.json
 * 
 * {
 *  "volume": 13,
 *  "mute": false,
 * }
 * 
 *  import settings from 'settings.json'
 * 
 *  settings.volime => 13
 * 
 */