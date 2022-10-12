import React from 'react';
import Popup from '../components/contentPopup';
import DisplayArea from '../components/display';
import NavigationPanel from '../components/navigation';

const Home=() => {
      return (
            <div className='flex flex-col relative w-full items-center'>
                  <NavigationPanel />
                  <DisplayArea />
                  <Popup />
            </div>
      );
}

export default Home;
