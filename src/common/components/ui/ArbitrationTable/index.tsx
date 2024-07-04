
import { fakeUserConstant, userModel } from '@common/models/user';
import DynamicPadding from '../DynamicPadding';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';
import UserAvatar from '../UserAvatar';
import AppColor from '@common/styles/variables-static';
import HorizontalLine from '../Lines/HorizontalLine';

const ArbitrationTable = () => {

    return (
      <div>
        <ComparisionItem
            customer={fakeUserConstant}
            freelancer={fakeUserConstant}
            customerDetails={{
                bonusEarned: '+$95',
                discount: '-$95',
                earned: '+$95',
            }}
            freelancerDetails={{
                bonusEarned: '+$95',
                discount: '-$95',
                earned: '+$95',
            }}
            detailsText='Freelancer didn’t do the project properly. Also on screenshots he wasted my time.'
            requestFrom='Customer'
        />
           <DynamicPadding desktop='20px' mobile='15px'/>

        <ComparisionItem
            customer={fakeUserConstant}
            freelancer={fakeUserConstant}
            customerDetails={{
                bonusEarned: '+$95',
                discount: '-$95',
                earned: '+$95',
            }}
            freelancerDetails={{
                bonusEarned: '+$95',
                discount: '-$95',
                earned: '+$95',
            }}
            detailsText='Customer asks to do extra his previous requirements and doesn’t add a surcharge.'
            requestFrom='Freelancer'
        />

           <DynamicPadding desktop='20px' mobile='15px'/>
            <HorizontalLine />

      </div>
    );
};

type ComparisionItemProps = {
    customer: userModel;
    freelancer: userModel;
    freelancerDetails: FinanceDetails;
    customerDetails: FinanceDetails;
    detailsText: string;
    requestFrom: 'Customer' | 'Freelancer';
}

type FinanceDetails = {
    earned: string;
    bonusEarned: string;
    discount: string;
}
const ComparisionItem = ({customer,customerDetails,freelancer,freelancerDetails,detailsText,requestFrom}:ComparisionItemProps) => {
    return (
        <div>
             <Typography variant='body4' fontWeight='500'>
            {requestFrom} request
            </Typography>

            <DynamicPadding desktop='20px' mobile='15px'/>

            <div className='text_box'>
                    <Typography variant='body4'>{detailsText}</Typography>
            </div>

            <DynamicPadding desktop='20px' mobile='15px'/>

            <div className={styles.details_part}>
                <div>
                    <UserAvatar preventMobileNone={true} active={true} name={fakeUserConstant.name} flag={<AppColor.UkraineFlagIcon />} role={requestFrom == 'Customer' ? 'Customer' : 'Freelancer'} url={fakeUserConstant.image} 
                    width='38px' height='38px'
                    />
                    <DynamicPadding desktop='15px' mobile='10px'/>

                    <div className='gap_10'>
                        <div className='gap_5'>
                            <AppColor.earn />
                            <Typography variant='body4' fontWeight='500' color={AppColor.green}>{freelancerDetails.earned}</Typography>
                            <div style={{backgroundColor: AppColor.green}} className={styles.colored_box}>
                                <Typography variant='body5' color='white'>95%</Typography>
                            </div>
                        </div>
                        <div className='gap_5'>
                            <AppColor.moneyHummer />
                            <Typography variant='body4' fontWeight='500' color={AppColor.green}>{freelancerDetails.bonusEarned}</Typography>
                            <div style={{backgroundColor: AppColor.green}} className={styles.colored_box}>
                                <Typography variant='body5' color='white'>95%</Typography>
                            </div>
                        </div>
                        <div className='gap_5'>
                            <AppColor.discount />
                            <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{freelancerDetails.discount}</Typography>
                            <div style={{backgroundColor: AppColor.transparentBlack}} className={styles.colored_box}>
                                <Typography variant='body5' color='white'>12%</Typography>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.end_item}>
                    <div>
                    <UserAvatar preventMobileNone={true} active={true} name={fakeUserConstant.name} flag={<AppColor.UkraineFlagIcon />} role={requestFrom != 'Customer' ? 'Customer' : 'Freelancer'} url={fakeUserConstant.image} 
                    width='38px' height='38px'
                    />
                    </div>
                    <DynamicPadding desktop='15px' mobile='10px'/>

                    <div className='gap_10'>
                        <div className='gap_5'>
                            <AppColor.earn />
                            <Typography variant='body4' fontWeight='500' color={AppColor.green}>{customerDetails.earned}</Typography>
                            <div style={{backgroundColor: AppColor.green}} className={styles.colored_box}>
                                <Typography variant='body5' color='white'>95%</Typography>
                            </div>
                        </div>
                        <div className='gap_5'>
                            <AppColor.moneyHummer />
                            <Typography variant='body4' fontWeight='500' color={AppColor.green}>{customerDetails.bonusEarned}</Typography>
                            <div style={{backgroundColor: AppColor.green}} className={styles.colored_box}>
                                <Typography variant='body5' color='white'>95%</Typography>
                            </div>
                        </div>
                        <div className='gap_5'>
                            <AppColor.discount />
                            <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{customerDetails.discount}</Typography>
                            <div style={{backgroundColor: AppColor.transparentBlack}} className={styles.colored_box}>
                                <Typography variant='body5' color='white'>12%</Typography>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ArbitrationTable;