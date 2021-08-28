import React from 'react';

import { UTC2 } from '@components';

const Profile = ({ type }) => (
  <>
    { type === 'schools' ? <UTC2 /> : null }
  </>
);

export default Profile;
