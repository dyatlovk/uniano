
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import Typography from '@common/components/ui/Typography/Typography';
import InputBorderText from '@common/components/ui/inputs/InputBorderText/index';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import { CareServiceChildProps } from '../..';

const GeneralHelpCreate = ({setActiveSwitch}:CareServiceChildProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');
    return (
      <div>
        <InputBorderText callback={(item) => {setName(item)}} padding='20px' borderText='Name' labelIcon={<AppColor.passportSvg fill={AppColor.text} height={'20px'} />} placeholderText='' emptyChangeColor={true}/>
        <DynamicPadding desktop='20px' mobile='15px' />
        <InputBorderText callback={(item) => {setEmail(item)}} padding='20px' borderText='Email ' labelIcon={<AppColor.gmail height={'20px'} />} placeholderText='' emptyChangeColor={true}/>
        <DynamicPadding desktop='20px' mobile='15px' />
        <InputBorderText callback={(item) => {setProject(item)}} padding='20px' multiline={true} 
        borderText='Subject ' labelIcon={<></>} placeholderText='' emptyChangeColor={true}/>
        <DynamicPadding desktop='20px' mobile='15px' />
        <Typography variant='body4'>
        I agree to have my personal data processed by Uniano for chat support. <span style={{fontWeight: '500'}}>Full policy</span>
        </Typography>
        <DynamicPadding desktop='20px' mobile='15px' />
        <MyButtonOrange
        onClick={() => {
            setActiveSwitch('main.general help');
        }}
        padding='15px'
        disabled={name == '' || email == '' || project == ''}
        fontWeight='500' textTransform='uppercase' width='100%'>
        Create New Question
        </MyButtonOrange>
        
      </div>
    );
};

export default GeneralHelpCreate;