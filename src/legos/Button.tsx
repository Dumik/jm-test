import {FC} from 'react';

import classNames from 'classnames';

type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
};
const Button: FC<ButtonProps> = ({title, onClick, className}) => {
  return (
    <button
      className={classNames(
        'bg-primary-700 font-poppins rounded-xl px-4 text-center duration-200 hover:opacity-80',
        className,
      )}
      onClick={onClick}>
      <span className='text-l font-bold tracking-widest text-white'>
        {title}
      </span>
    </button>
  );
};

export default Button;
