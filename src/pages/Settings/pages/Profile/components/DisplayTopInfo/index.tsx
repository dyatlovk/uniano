import { userModel } from "@common/models/user";
import styles from './style.module.scss';
import AppColor from "@common/styles/variables-static";
import Typography from "@common/components/ui/Typography/Typography";
import MyButtonBlack from "@common/components/ui/MyButton/variants/MyButtonBlack";
import { useState } from "react";
import ModalCenterBasic from "@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index";
import DynamicPadding from "@common/components/ui/DynamicPadding/index";
import InputCommon from "@common/components/ui/inputs/InputCommon/index";
import SizeBox from "@common/components/ui/SizeBox/index";
import MyButtonTransparent from "@common/components/ui/MyButton/variants/MyButtonTransparent";
import MyButtonOrange from "@common/components/ui/MyButton/variants/MyButtonOrange";

type DisplayTopInfoProps = {
    user: userModel;
}
const DisplayTopInfo = ({user}:DisplayTopInfoProps) => {
    const [editUserName, setEditUserName] = useState(false);

    const [newName, setNewName] = useState('');
    
    return (
        <div className={styles.top_item_wrapper}>
            {editUserName && <ModalCenterBasic bottomPartPadding="30px" callbackClose={() => {setEditUserName(false)}} title="Change username"
            desktopMinWidth="360px"
            >
                <Typography variant="body3" fontWeight="500">New username</Typography>
                <DynamicPadding desktop="25px" mobile="15px"/>
                <InputCommon callback={(item) => {setNewName(item)}} maxSymbolCount={18} placeholder=""  padding="15px 20px"/>
                <SizeBox height="5px"/>
                <div className="flex_end">
                    <Typography variant="body4" color={AppColor.transparentBlack}>
                        {newName.length} / 18
                    </Typography>
                </div>
                <DynamicPadding desktop="25px" mobile="15px"/>
                <div className="flex_end">
                    <MyButtonTransparent onClick={() => {setEditUserName(false)}} fontWeight="500" textTransform="uppercase">
                    Cancel
                    </MyButtonTransparent>
                    <MyButtonOrange onClick={() => {setEditUserName(false)}} fontWeight="500" textTransform="uppercase">
                    change
                    </MyButtonOrange>
                </div>
                </ModalCenterBasic>}
            <div className={styles.top_wrapper_first_content}>
                {
                    user.image != null
                    ? <img src={user.image} width={'124px'} height={'124px'} alt="" />
                    : <AppColor.freelancer width={'124px'} height={'124px'} />
                }
            </div>
            <div className={styles.top_wrapper_second_content}>
                <div className={styles.top_item_flex}>
                    <Typography textLineHeight='1' variant='body3' fontWeight='500'>{user.name} <AppColor.edit className="cursor" onClick={() => {setEditUserName(true)}} fill={AppColor.text}/></Typography>
                </div>
                <div className={styles.top_item_flex}>
                    <MyButtonBlack textTransform="uppercase" onClick={() => {}}>Update Profile Picture</MyButtonBlack> <AppColor.close fill={AppColor.red} />
                </div>
                <div className={styles.top_item_flex}>
                    <Typography textLineHeight='1' variant='body4'>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</Typography>
                </div>
            </div>
        </div>
    )
}

export default DisplayTopInfo;