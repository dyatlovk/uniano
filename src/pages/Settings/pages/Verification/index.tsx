import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import NavigationBar, { NavigationBarCustom } from '@common/components/NavigationBar/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import FirstStep from './components/FirstStep'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import SecondStep from './components/SecondStep'
import ThirdStep from './components/ThirdStep'
import { useState } from 'react'
import VerificationFinal from './components/VerificationFinal'

const Verification = () => {

    const [stepsSolved,setStepsSolved] = useState(1);
    const [formData1, setFormData1] = useState({
        firstName: '',
        lastName: '',
        country: '',
        stateProvince: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        postCode: '',
    });

    const map = {
        1: <FirstStep  formData1={formData1} updateFormData1={setFormData1} callback={() => {setStepsSolved(prev => prev+1)}}/>,
        2: <SecondStep callbackOn={() => {setStepsSolved(prev => prev+1)}} callbackUndo={() => {setStepsSolved(prev => prev-1)}}/>,
        3: <ThirdStep callbackOn={() => {setStepsSolved(prev => prev+1)}} callbackUndo={() => {setStepsSolved(prev => prev-1)}}/>,
        4: <VerificationFinal />
    }

    return (
        <div>
            <Header />
            <NavigationBarCustom
            icon={<AppColor.settings />}
            text="settings"
            parentRoute="settings"
            activeIndex={2}
            buttonsLink={[
                    {
                        title: "profile",
                        link: "/profile",
                    },
                    {
                        title: "password-security",
                        link: "/password-security",
                    },
                    {
                        title: "verification",
                        link: "/verification",
                    },
                    {
                        title: "notifications",
                        link: "/notifications",
                    }
                ]}
            />
            <div className={styles.wrapper}>
                <PageDetails
                    historyNode={
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Settings']}
                        />
                    }
                    pageTitle="verification"
                    endNode={
                    
                        stepsSolved != 3 
                        ? <div className={styles.unverified_wrapper}>
                            <AppColor.closeRed/> <Typography textTransform='uppercase' variant='body4' fontWeight='500'>unverified</Typography>
                        </div>
                        : <></>
                    }
                />

                <DynamicPadding />

                {map[stepsSolved]}

                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
}


export default Verification
