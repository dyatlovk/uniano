
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationBar from '@common/components/NavigationBar/index';
import Header from '@common/components/Header/Header/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import VerificationCard from './components/VerificationCard';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import InputBorderText from '@common/components/ui/inputs/InputBorderText/index';
import InputBorderTextDropdown from '@common/components/ui/inputs/InputBorderTextDropdown/index';
import ModalPersonal from './components/ModalPersonal';
import ProofModal from './components/ProofModal';
import AdressModal from './components/AdressModal';


const VerificationFinal = () => {
    const [personalInfo, setPersonalInfo] = useState(false);
    const [proofIdentity, setProofIdentity] = useState(false);
    const [proofAddress, setProofAddress] = useState(false);

    
    
    return (
        <div>
            {
                personalInfo && <ModalCenterBasic bottomPartPadding='30px' callbackClose={() => {setPersonalInfo(false)}} title='Personal details'
                    desktopMaxWidth='690px'
                >
                    <ModalPersonal />
                </ModalCenterBasic>
            }
             {
                proofIdentity && <ModalCenterBasic bottomPartPadding='30px' callbackClose={() => {setProofIdentity(false)}} title='Personal details'
                    desktopMaxWidth='690px'
                >
                    <ProofModal />
                </ModalCenterBasic>
            }
            {
                proofAddress && <ModalCenterBasic bottomPartPadding='30px' callbackClose={() => {setProofAddress(false)}} title='Personal details'
                    desktopMaxWidth='690px' desktopMinWidth='690px'
                >
                    <AdressModal />
                </ModalCenterBasic>
            }
            <Typography variant='body4'>KYC is a one-time process required by international regulators and is implemented for the safety of your assets. </Typography>
            <DynamicPadding desktop='30px' mobile='20px' />
            <div className={styles.cards_wrapper}>
                <VerificationCard
                    icon={<AppColor.personalInfo />}
                    buttonText='Change personal information'
                    onClick={() => {
                        setPersonalInfo(true);
                    }}
                    text='Verified on 23 Feb 2022 13:35'
                    title='Personal Information'
                    isSolved={false}
                    color={AppColor.green}
                    coloredWord='Change'
                />
                <VerificationCard
                    icon={<AppColor.passportYellow />}
                    buttonText='Change personal information'
                    onClick={() => {
                        setProofIdentity(true);
                    }}
                    text='Was sent on 23 Feb 2022 13:35. Average check time 3 days'
                    title='Proof Identity'
                    isSolved={false}
                    color={AppColor.orange}
                    coloredWord='Waiting.'
                />
                <VerificationCard
                    icon={<AppColor.location fill={AppColor.text} width={'28px'} height={'38px'} />}
                    buttonText='Change personal information'
                    onClick={() => {
                        setProofAddress(true);
                    }}
                    text='on 23 Feb 2022 13:35.'
                    title='Proof Address'
                    isSolved={false}
                    color={AppColor.red}
                    coloredWord='Rejected'
                />
            </div>
        </div>
    );
};

export default VerificationFinal;