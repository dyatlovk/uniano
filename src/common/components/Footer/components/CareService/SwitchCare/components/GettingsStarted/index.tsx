
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { CareServiceChildProps } from '../..';
import { TopicsComponent } from '@common/components/ui/ContactUsSteps/Steps/index';

const GettingsStarted = ({setActiveSwitch}:CareServiceChildProps) => {

    return (
      <div>
           <InputCommon callback={() => {}} placeholder='Search' />

           <DynamicPadding desktop='30px' mobile='20px' />

            <TopicsComponent title='Registration' />
            <TopicsComponent title='Password recovery' />
            <TopicsComponent title='Verification' />
            <TopicsComponent title='Changing my username' />
      </div>
    );
};

export default GettingsStarted;