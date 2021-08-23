import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { makeIcon } from '@apollosproject/ui-kit';

const Icon = makeIcon(({ size = 32, fill } = {}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.0992 24C4.49225 24 4 23.508 4 22.9008V5.09914C4 4.49188 4.49236 4 5.0992 4H22.9008C23.5076 4 24 4.49187 24 5.09914V22.9008C24 23.508 23.5077 24 22.9008 24H5.0992ZM5.60094 5.60095V22.3991H22.3991V5.60095H5.60094ZM13.5313 20.2611C13.5615 20.2205 13.5877 20.1782 13.6099 20.1346C13.6486 20.0918 13.6837 20.0447 13.7144 19.9933L20.4528 8.72544C20.7049 8.30387 20.5675 7.75773 20.146 7.50562C19.7244 7.25351 19.1783 7.39089 18.9262 7.81246L12.5705 18.4403L8.83756 15.6698C8.44312 15.377 7.88604 15.4595 7.59329 15.8539C7.30053 16.2483 7.38296 16.8054 7.77739 17.0981L12.2871 20.4452C12.6815 20.738 13.2386 20.6555 13.5313 20.2611ZM12.7088 16.826C12.6951 16.8543 12.6785 16.8818 12.6591 16.9081C12.4931 17.1315 12.1774 17.1781 11.9539 17.0122L9.00819 14.8248C8.78471 14.6588 8.73809 14.3432 8.90406 14.1197C9.07003 13.8963 9.38573 13.8497 9.6092 14.0156L12.1145 15.876L16.1985 9.00907C16.3407 8.76984 16.65 8.69123 16.8893 8.8335C17.1285 8.97577 17.2071 9.28504 17.0649 9.52428L12.7742 16.7388C12.7552 16.7708 12.7332 16.7999 12.7088 16.826Z"
      fill={fill}
    />
  </Svg>
));

Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
