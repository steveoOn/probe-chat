import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return <MobileNavBar center={<h2>InspireHub</h2>} right={<ShareAgentButton mobile />} />;
});

export default Header;
