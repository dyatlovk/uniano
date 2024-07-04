import Typography from "@common/components/ui/Typography/Typography";
import { userModel, fakeUserConstant } from "@common/models/user";
import AppColor from "@common/styles/variables-static";
import { useState } from "react";
import DetailsTable from "../..";
import DynamicPadding from "../../../DynamicPadding";
import UserAvatar from "../../../UserAvatar";

type DetailsUsersProps = {
    information: DetailsUsersPropsItem[];
}

export type DetailsUsersPropsItem = {
  user: userModel;
  memberSince: string;
  roles: string;
  status: string;
}

const DetailsUsers = ({information}:DetailsUsersProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        titleEnd='user'
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All', 'Active', 'Limited', 'Blocked', 'Deleted']}
        page={currentPage}
        details={
            currentItem != null ? [
                {
                    title: 'Name',
                    selecrable: true,
        
                    child:<UserAvatar flag={<AppColor.UkraineFlagIcon />} activeAgo="1 min ago" width='38px' height='38px' active={true} url={fakeUserConstant.image} preventMobileNone={true} name={fakeUserConstant.name}/>
                },
                {
                    title: 'Member Since',
                    maxWidth: '100px',
                    child: <Typography variant='body4'>{currentItem.memberSince}</Typography>
                },
                {
                    title: 'Roles',
                    child: <Typography variant='body4'>
                        {currentItem.roles}
                    </Typography>
                },
                
                {
                    title: 'Status',
                    child: <Typography variant='body4' color={AppColor.green} fontWeight="500">{currentItem.status}</Typography>
                },
            ] : [
                {
                    title: 'Name',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Member Since',
                    child: <></>
                },
                {
                    title: 'Roles',
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


export default DetailsUsers;