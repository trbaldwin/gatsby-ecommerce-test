import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SYDNEY</h4> */}

        
<svg width="136" height="32" viewBox="0 0 136 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8 9V25C8 25 8 28 11 28C14 28 14 25 14 25V13C14 13 14 11.5 15 10.5C16 9.5 17 9.5 17 9.5H20H23C23 9.5 24 9.5 25 10.5C26 11.5 26 13 26 13V25C26 25 26 28 29 28C32 28 32 25 32 25V9C32 9 32 7 30.5 5.5C29 4 26 4 26 4H14C14 4 12 4 10 5.5C8 7 8 9 8 9Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
<path d="M64 7V23C64 23 64 25 62 26.5C60 28 58 28 58 28L46 28C46 28 43 28 41.5 26.5C40 25 40 23 40 23V7C40 7 40 4 43 4C46 4 46 7 46 7V19C46 19 46 20.5 47 21.5C48 22.5 49 22.5 49 22.5H52H55C55 22.5 56 22.5 57 21.5C58 20.5 58 19 58 19V7C58 7 58 4 61 4C64 4 64 7 64 7Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
<path d="M91 4L75 4C75 4 72 4 72 7C72 10 75 10 75 10H87C87 10 88.5 10 89.5 11C90.5 12 90.5 13 90.5 13V16V19C90.5 19 90.5 20 89.5 21C88.5 22 87 22 87 22H75C75 22 72 22 72 25C72 28 75 28 75 28H91C91 28 93 28 94.5 26.5C96 25 96 22 96 22V10C96 10 96 8 94.5 6C93 4 91 4 91 4Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
<path d="M109 28H125C125 28 128 28 128 25C128 22 125 22 125 22H113C113 22 111.5 22 110.5 21C109.5 20 109.5 19 109.5 19V16V13C109.5 13 109.5 12 110.5 11C111.5 10 113 10 113 10H125C125 10 128 10 128 7C128 4 125 4 125 4H109C109 4 107 4 105.5 5.5C104 7 104 10 104 10V22C104 22 104 24 105.5 26C107 28 109 28 109 28Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
</svg>

    </div>
  );
};

export default Brand;
