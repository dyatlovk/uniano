
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import DropdownList from '@pages/Community/components/DropdownList/index';
import { useState } from 'react';
import { CareServiceChildProps } from '../..';

const CommunityCare = ({setActiveSwitch}:CareServiceChildProps) => {
    const [currentActiveTitle, setCurrentActiveTitle] = useState('');
    
    return (
      <div>
           <InputCommon width='100%' placeholder='Search' callback={() => {}}/>
           <DynamicPadding desktop='30px' mobile='20px' />
           <div className={styles.grid_30}>
           <DropdownList 
                    title='Getting Started'
                    callback={(item) => {setCurrentActiveTitle(item);setActiveSwitch('main.community.getting started')}}
                    items={['Registration', 'Password recovery', 'Verification', 'Changing my username']}
                />
                <DropdownList 
                    title='Subscription'
                    callback={(item) => setCurrentActiveTitle(item)}
                    items={[]}
                />
                <DropdownList 
                    title='Services'
                    callback={(item) => setCurrentActiveTitle(item)}
                    items={[]}
                />
                <DropdownList 
                    title='Orders'
                    callback={(item) => setCurrentActiveTitle(item)}
                    items={[]}
                />
                <DropdownList 
                    title='Crowdfreelance'
                    callback={(item) => setCurrentActiveTitle(item)}
                    items={[]}
                />
                <DropdownList 
                    title='Partnership'
                    callback={(item) => setCurrentActiveTitle(item)}
                    items={[]}
                />
                <DropdownList 
                    title='Missions'
                    callback={(item) => setCurrentActiveTitle(item)}
                    items={[]}
                />
                <DropdownList 
                    title='Payments'
                    callback={(item) => setCurrentActiveTitle(item)}
                    items={[]}
                />
           </div>
      </div>
    );
};

export default CommunityCare;