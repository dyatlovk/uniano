import Typography from "@common/components/ui/Typography/Typography";
import { userModel, fakeUserConstant } from "@common/models/user";
import AppColor from "@common/styles/variables-static";
import { useState } from "react";
import DetailsTable from "../..";
import DynamicPadding from "../../../DynamicPadding";
import UserAvatar from "../../../UserAvatar";

type DetailsTexFormProps = {
    information: DetailsTexFormPropsItem[];
}

export type DetailsTexFormPropsItem = {
  user: userModel;
  date: string;
  expired: string;
  taxForm: 'W-8BEN';
  status: string;
}

const DetailsTaxForm = ({information}:DetailsTexFormProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        titleEnd='form'
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All', 'Request', 'Valid', 'Expired', 'Cancelled']}
        page={currentPage}
        details={
            currentItem != null ? [
                {
                    title: 'User',
                    selecrable: true,
        
                    child:<UserAvatar width='22px' height='22px' active={true} url={fakeUserConstant.image} preventMobileNone={true} name={fakeUserConstant.name}/>
                },
                {
                    title: 'Date',
                    child: <Typography variant='body4'>{currentItem.date}</Typography>
                },
                {
                    title: 'Expired Date',
                    child: <AppColor.minus />
                },
                {
                    title: 'Tax Form',
                    child: <Typography color={AppColor.transparentBlack} fontWeight="500" variant='body4'>{currentItem.taxForm}</Typography>
                },
                {
                    title: 'Status',
                    child: <Typography variant='body4' color={AppColor.orange} fontWeight="500">{currentItem.status}</Typography>
                },
            ] : [
                {
                    title: 'User',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Date',
                    child: <></>
                },
                {
                    title: 'Expired Date',
                    child: <></>
                },
                {
                    title: 'Tax Form',
                    child: <></>
                },
                {
                    title: 'Status',
                    child: <></>
                },
               
            ]
        }
      />
    );
};

export default DetailsTaxForm;