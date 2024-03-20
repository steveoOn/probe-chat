import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

const Header = memo(() => {
  return <MobileNavBar center={<h2>InspireHub</h2>} />;
});

export default Header;
