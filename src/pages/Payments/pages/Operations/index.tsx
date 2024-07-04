
import Header from '@common/components/Header/Header/index';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import PageDetails from '@common/components/ui/PageDetails/index';
import { developmentDropdown } from '@common/models/constants';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import NavigationBar, { NavigationBarCustom } from '@common/components/NavigationBar/index';
import Typography from '@common/components/ui/Typography/Typography';
import SizeBox from '@common/components/ui/SizeBox/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import DetailsTableMultiNodes from '@common/components/ui/DetailsTable/DetailsTableMultiNodes/index';
import { fakeUserConstant } from '@common/models/user';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';

const PaymentsOperations = () => {

    return (
        <div>
        <Header />

        <NavigationBarCustom
            icon={<AppColor.paymentsWhite />}
            text="Payments"
            parentRoute="payments"
            activeIndex={0}
            buttonsLink={[
                {
                    title: "operations",
                    link: "/operations",
                }
            ]}
        />

        <div className={styles.wrapper}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={['Payments']}
                    />
                }
                endNode={
                    <div className={styles.details_items_grid}>
                        <DetailsItem color={AppColor.green} icon={<AppColor.wallet />} text='$35 032.93' title='Avaliable Balance'/>
                        <div className={styles.vertical_line}></div>
                        <DetailsItem color='#B6DE59' icon={<AppColor.withdraw />} text='$35 032.93' title='Withdrawal Balance'/>
                        <div className={styles.vertical_line}></div>
                        <DetailsItem color='#EB5757' icon={<AppColor.lockIcon />} text='$35 032.93' title='Locked Balance'/>
                        <div className={styles.vertical_line}></div>
                        <DetailsItem color={AppColor.orange} icon={<AppColor.caseWhite />} text='$35 032.93' title='Sponsorhip Balance'/>
                    </div>
                }
                pageTitle="Operations"
            />

            <DynamicPadding />
            <SearchFilterBar date='10/29/22 - 11/29/22' />
            <DynamicPadding />

            <DetailsTableMultiNodes
            titles={['Operation', 'Date', 'Type', 'Amount', 'Status']}
            elements={[
                {
                    nodes: [
                        <div style={{maxWidth: '360px'}} className='gap_10'>
                            <img src={fakeUserConstant.image} width={'38px'} height={'38px'} alt="" />
                            <Typography variant='body4' fontWeight='500'>Convert an Indicator Signal and an EA Signal into a Metatrader 5 Expert Advisor</Typography>
                        </div>,
                        <Typography variant='body4'>Feb 26, 2021 16:32 </Typography>,
                        <Typography variant='body4'>Service</Typography>,
                        <div className='gap_10'>
                            <AppColor.lock />
                            <Typography variant='body4'>$10 353.54</Typography>
                        </div>,
                        <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Progress</Typography>
                    ]
                },
                {
                    nodes: [
                        <div style={{maxWidth: '360px'}} className='gap_10'>
                            <img src={fakeUserConstant.image} width={'38px'} height={'38px'} alt="" />
                            <Typography variant='body4' fontWeight='500'>Convert an Indicator Signal and an EA Signal into a Metatrader 5 Expert Advisor</Typography>
                        </div>,
                        <Typography variant='body4'>Feb 26, 2021 16:32 </Typography>,
                        <Typography variant='body4'>Service</Typography>,
                        <div className='gap_10'>
                            <AppColor.lock />
                            <Typography variant='body4'>$10 353.54</Typography>
                        </div>,
                        <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Progress</Typography>
                    ]
                }
            ]}

            />

        </div>
           <div className="wrapper_page">
            <AskedQuestion />
           </div>

           <Footer />
      </div>
    );
};

type DetailsItemProps = {
    title: string;
    text: string;
    icon: React.ReactNode;
    color: string;
}
const DetailsItem = ({color,icon,text,title}:DetailsItemProps) => {
    return (
        <div className='gap_10'>
            <div style={{backgroundColor: color}} className={styles.color_circle}>
                {icon}
            </div>
            <div>
                <Typography variant='body5' color={AppColor.transparentBlack}>
                    {title}
                </Typography>
                <SizeBox height='5px'/>
                <Typography variant='body4' fontWeight='500'>
                    {text}
                </Typography>
            </div>
        </div>
    )
}
export default PaymentsOperations;