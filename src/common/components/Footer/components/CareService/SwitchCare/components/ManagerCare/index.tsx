
import InputBorderText from '@common/components/ui/inputs/InputBorderText/index';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import { CareServiceChildProps } from '../..';
import { useState } from 'react';

const ManagerCare = ({setActiveSwitch}:CareServiceChildProps) => {
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
        borderText='Project ' labelIcon={<></>} placeholderText='' emptyChangeColor={true}/>
        <DynamicPadding desktop='20px' mobile='15px' />
        <Typography variant='body4'>
        I agree to have my personal data processed by Uniano for chat support. <span className='underline_appearance' style={{fontWeight: '500'}}>Full policy</span>
        </Typography>
        <DynamicPadding desktop='20px' mobile='15px' />
        <MyButtonOrange
        onClick={() => {
            setActiveSwitch('main.managerchat showuser');
        }}
        padding='15px'
        disabled={name == '' || email == '' || project == ''}
        fontWeight='500' width='100%'>
        Search New Manager
        </MyButtonOrange>
        <DynamicPadding desktop='20px' mobile='15px' />     
        <MyButtonTransparent
        onClick={() => {
           
        }}
        padding='15px'
        fontWeight='500' width='100%'>
        All Managers
        </MyButtonTransparent>
      </div>
    );
};

export default ManagerCare;