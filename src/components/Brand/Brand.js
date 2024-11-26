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

        <svg width="116" height="51" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.5022 50.3866C48.5713 45.7178 54 36.9929 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 36.9929 5.42867 45.7178 13.4978 50.3866L27 27L40.5022 50.3866Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M75.4978 0.000137329C67.4287 4.66888 62 13.3938 62 23.3867C62 38.2984 74.0883 50.3867 89 50.3867C103.912 50.3867 116 38.2984 116 23.3867C116 13.3938 110.571 4.66888 102.502 0.000137329L89 23.3867L75.4978 0.000137329Z" fill="currentColor"/>
</svg>
        


    </div>
  );
};

export default Brand;
