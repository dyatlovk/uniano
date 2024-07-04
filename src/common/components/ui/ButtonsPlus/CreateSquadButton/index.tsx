
import { useState } from 'react';
import { PlusButton } from '../CreateTeamButton';
import styles from './style.module.scss';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import Typography from '../../Typography/Typography';
import DynamicPadding from '../../DynamicPadding';
import InputCommon from '../../inputs/InputCommon';
import AppColor from '@common/styles/variables-static';
import MyButtonTransparent from '../../MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '../../MyButton/variants/MyButtonOrange';
import SizeBox from '../../SizeBox';

const CreateSquadButton = () => {

    const [showCreateSquad, setShowCreateSquad] = useState(false);
    const [name, setName] = useState('')
    return (
      <div>
            {showCreateSquad && <ModalCenterBasic desktopMinWidth='360px' bottomPartPadding='30px' callbackClose={() => {setShowCreateSquad(false)}}
                title='Create squad'
            >
                <Typography variant='body3' fontWeight='500'>Squad name</Typography>

                <DynamicPadding desktop='25px' mobile='15px'/>
                <InputCommon padding='15px 20px' callback={(item) => {setName(item)}} placeholder='Write squad name' maxSymbolCount={18} />
                <SizeBox height='5px'/>
                <div className='flex_end'>
                    <Typography variant='body4' color={AppColor.transparentBlack}>{name.length} / 18</Typography>
                </div>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <div className='flex_end'>
                    <MyButtonTransparent onClick={() => {setShowCreateSquad(false)}} fontWeight='500' textTransform='uppercase' >
                    Cancel
                    </MyButtonTransparent>
                    <MyButtonOrange onClick={() => {setShowCreateSquad(false)}} fontWeight='500' textTransform='uppercase' >
                    Create
                    </MyButtonOrange>
                </div>

                </ModalCenterBasic>}
           <PlusButton callbackOpen={() => {setShowCreateSquad(true)}} />
      </div>
    );
};

export default CreateSquadButton;