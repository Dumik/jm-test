import {ReactNode} from 'react';

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='bg-main-300 min-h-screen w-full px-4 py-20 desktop:px-20'>
      {children}
    </div>
  );
};

export default MainLayout;
