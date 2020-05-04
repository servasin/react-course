import { hot } from 'react-hot-loader/root';
import * as React from "react";
import styles from './header.less';

function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.title}>
        Hello React!
      </h1>
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