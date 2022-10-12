import React from 'react';
import Popup from '../components/contentPopup';
import DisplayArea from '../components/display';
import NavigationPanel from '../components/navigation';
import RecordTable from '../components/table';

const Home=() => {
      return (
            <div className='flex flex-col relative w-full items-center'>
                  <NavigationPanel />
                  <DisplayArea />
                  <Popup />
                  <RecordTable />
            </div>
      );
}

export default Home;
