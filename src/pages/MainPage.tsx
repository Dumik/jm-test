import floorPlansSrc from '../assets/img/floorPlans.png';
import horseVideoSrc from '../assets/img/horseVideo.png';
import interactiveToursSrc from '../assets/img/interactiveTours.png';
import photography2Src from '../assets/img/photography2.png';
import photographySrc from '../assets/img/photography.png';
import renderingsSrc from '../assets/img/renderings.png';
import virtualStagingSrc from '../assets/img/virtualStaging.png';
import {Card, MainLayout} from '../components';
import {Button} from '../legos';

const mockData = [
  {
    title: 'Photography',
    img: photographySrc,
    img2: photography2Src,
    list: ['Drone Photography', 'Interiors', 'Exteriors / Architectural'],
    text: 'Every photograph we produce finds the beauty in your property while serving as a profitable asset.',
  },
  {
    title: 'Virtual Staging',
    img: virtualStagingSrc,
    text: (
      <div>
        <span className='text-main-900 text-m font-semibold leading-6'>
          Our staging will help you sell the potential of your space.
        </span>
        <span className='text-main-900 text-m font-semibold leading-6'>
          We can work off of our own photography or photos you provide.
        </span>
      </div>
    ),
  },
  {
    title: 'Renderings',
    img: renderingsSrc,
    list: ['Interiors', 'Exteriors'],
    text: 'Renderings are the gold standard in pre-construction marketing.',
  },
  {
    title: 'Interactive Tours',
    img: interactiveToursSrc,
    list: ['Matterport', 'Video Walkthroughs'],
    text: 'Give your audience the ability to explore your property without requiring in-person travel.',
  },
  {
    title: 'Floor Plans',
    img: floorPlansSrc,
    list: ['On-site Measure', '2D Floor Plans', '3D Floor Plans'],
    text: 'We produce laser-precise floor plans faster than any other service.',
  },
  {
    title: 'Video',
    img: horseVideoSrc,
    list: ['Drone Photography', 'Interiors', 'Exteriors / Architectural'],
    text: 'Video content has higher engagement and will help your property stand out online.',
  },
];

const MainPage = () => {
  return (
    <MainLayout>
      <div className='flex flex-col items-center gap-10'>
        <div className='w-full max-w-[700px]'>
          <h1 className='text-primary-700 font-poppins text-center text-3xl font-bold'>
            We make creative media that{' '}
            <span className='text-primary-300'>adds value</span>
          </h1>
        </div>
        <div className='flex w-full flex-wrap items-stretch justify-center'>
          {mockData.map((card, index) => (
            <div
              key={index}
              className='flex w-full p-4 tablet:w-1/2 desktop:w-1/3'>
              <Card
                title={card.title}
                img={card.img}
                img2={card.img2}
                list={card.list}
                text={
                  <span className='text-main-900 text-m font-semibold leading-6'>
                    {card.text}
                  </span>
                }
              />
            </div>
          ))}
        </div>
        <div className='flex w-full justify-center'>
          <Button title='GET STARTED' className='w-full max-w-[315px]' />
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
