import {FC, ReactNode} from 'react';

type CardProps = {
  title: string;
  img: string;
  img2?: string;
  list?: string[];
  text?: ReactNode;
};

const Card: FC<CardProps> = ({img, img2, text, list, title}) => {
  return (
    <div className='flex w-full rounded-lg bg-white duration-200 hover:shadow'>
      {img2 ? (
        <div className='flex h-full min-w-[183px] flex-col gap-1 rounded-s-lg'>
          <img src={img} className='h-1/2 rounded-tl-lg' />
          <img src={img2} className='h-1/2 rounded-bl-lg' />
        </div>
      ) : (
        <div className='flex min-w-[183px] flex-col gap-1 rounded-s-lg'>
          <img src={img} className='h-full rounded-bl-lg' />
        </div>
      )}

      <div className='flex flex-col gap-4 p-8'>
        <h3 className='text-main-900 text-xl font-bold'>{title}</h3>
        {list?.length && (
          <ul className='marker:text-secondary-100 list-disc pl-4'>
            {list.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className='text-main-900 text-m font-bold'>
                {item}
              </li>
            ))}
          </ul>
        )}
        {text}
      </div>
    </div>
  );
};

export default Card;
