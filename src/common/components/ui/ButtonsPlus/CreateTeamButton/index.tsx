
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import { useState } from 'react';
import ModalCenterBasic from '../../../ModalPopUps/ModalCenter/components/ModalCenterBasic';
import { StepItem, StepItemSolving } from '../../../StepsOfPreparing';
import InputCommon from '../../inputs/InputCommon';
import DynamicPadding from '../../DynamicPadding';
import MyButtonTransparent from '../../MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '../../MyButton/variants/MyButtonOrange';
import Typography from '../../Typography/Typography';
import InfoBox from '../../InfoBox';
import SizeBox from '../../SizeBox';


type CreateTeamButtonProps = {
    callbackOpen: () => void;
    size?: string;
    callbackClick?: () => void;
}

export const PlusButton = ({callbackOpen,callbackClick,size}:CreateTeamButtonProps) => {
    return (
        <div style={{width: size,height: size}} onClick={() => {
            callbackOpen()
            if(callbackClick) {
                callbackClick();
            }
        }} className={styles.orange_plus}>
                <AppColor.plus width={20} height={20} stroke='white' />
            </div>
    )
}

const CreateTeamButton = () => {

    

    const [showModal,setShowModal] = useState(false);

    const [name,setName] = useState('');
    const [username,setUsername] = useState('');

    const [errorNameLength,setErrorNameLength] = useState(false);


    return (
        <>
            <PlusButton callbackOpen={() => {setShowModal(true)}} />
             {showModal && <ModalCenterBasic
              desktopMinWidth='360px' bottomPartPadding='30px' callbackClose={() => {setShowModal(false)}} title='Add team'
                nodesBeforeClose={[<AppColor.template />]} 
             >

                    <div className='gap_5'>
                        <Typography variant='body3' fontWeight='500'>Team name</Typography>
                        <InfoBox />
                    </div>
                    <DynamicPadding desktop='30px' mobile='20px' />
                    {errorNameLength && <Typography variant='body5' fontWeight='500' color={AppColor.red}>
                    * Minimum 5 letters
                        </Typography>}
                    {errorNameLength && <SizeBox height='15px'/>}
                    <InputCommon maxSymbolCount={18} callback={(item) => {
                        setName(item)
                        if(item.length >= 5 && errorNameLength) {
                            setErrorNameLength(false);
                        }
                        }} placeholder='Type...' padding='15px 20px' />
                    <SizeBox height='5px'/>
                    <div className={styles.flex_end}>
                        <Typography variant='body4' color={AppColor.transparentBlack}>{name.length} / 18</Typography>
                    </div>
                    <SizeBox height='5px'/>
                    
                    <div className='gap_5'>
                        <Typography variant='body3' fontWeight='500'>Team username</Typography>
                        <InfoBox />
                    </div>
                    <DynamicPadding desktop='30px' mobile='20px' />
                    <InputCommon maxSymbolCount={18} callback={(item) => {setUsername(item)}} placeholder='Type...' padding='15px 20px' />
                    <SizeBox height='5px'/>
                    <div className={styles.flex_end}>
                        <Typography variant='body4' color={AppColor.transparentBlack}>{username.length} / 18</Typography>
                    </div>
                    <SizeBox height='5px'/>
                    <DynamicPadding desktop='30px' mobile='20px' />
                    <div>
    
                        <div className={styles.flex_end}>
                            <MyButtonTransparent
                            fontWeight='500' textTransform='uppercase'
                            onClick={() => {setShowModal(false)}}>Cancel</MyButtonTransparent>
                            <MyButtonOrange
                            fontWeight='500' textTransform='uppercase'
                            onClick={() => {
                                if(name.length < 5) {
                                    setErrorNameLength(true)
                                    return;
                                } 
                                setShowModal(false)
                                
                                }}>Create</MyButtonOrange>
                        </div>  
                    </div>
                </ModalCenterBasic>}
        </>
    );
};


export default CreateTeamButton;