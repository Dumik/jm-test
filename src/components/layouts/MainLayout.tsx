import {ReactNode} from 'react';

const MainLayout = ({children}: {children: ReactNode}) => {
  return <div className='bg-main-300 min-h-screen px-10'>{children}</div>;
};

export default MainLayout;
