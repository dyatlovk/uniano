
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import SizeBox from '@common/components/ui/SizeBox/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import React, { useRef, useState } from 'react';
import DateFilter from '../../components/DateFilter';
import styles from './style.module.scss';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import { fakeUserConstant } from '@common/models/user';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';

const AdminSettings = () => {
    return (
        <div className="admin_wrapper">
            <DynamicPadding />
            <div className="center_mobile_text">
                <Typography
                    textTransform="uppercase"
                    variant="titleBig"
                    fontWeight="600">
                    settings
                </Typography>
            </div>
            <DynamicPadding />

            <DateFilter />

            <DynamicPadding />

            <DetailsTable
                title="Logo & favicon"
                node={
                    <div className={styles.logo_grid}>
                        <div className={styles.flex_column}>
                            <Typography
                                variant="body4"
                                fontWeight="500"
                                color={AppColor.transparentBlack}>
                                White background
                            </Typography>
                            <SizeBox height="20px" />
                            <div
                                className="box_shadow"
                                style={{
                                    width: '200px',
                                    height: '100px',
                                }}></div>
                            <SizeBox height="20px" />
                            <div className={styles.logo_bottom_item}>
                                <MyButtonBlack
                                    textTransform="uppercase"
                                    onClick={() => {}}>
                                    Update logo
                                </MyButtonBlack>
                                <AppColor.close
                                    fill={AppColor.red}
                                    width={'15px'}
                                    height={'15px'}
                                />
                            </div>
                        </div>
                        <div className={styles.flex_column}>
                            <Typography
                                variant="body4"
                                fontWeight="500"
                                color={AppColor.transparentBlack}>
                                Dark background
                            </Typography>
                            <SizeBox height="20px" />
                            <div
                                className="box_shadow"
                                style={{
                                    width: '200px',
                                    height: '100px',
                                }}></div>
                            <SizeBox height="20px" />
                            <div className={styles.logo_bottom_item}>
                                <MyButtonBlack
                                    textTransform="uppercase"
                                    onClick={() => {}}>
                                    Update logo
                                </MyButtonBlack>
                                <AppColor.close
                                    fill={AppColor.red}
                                    width={'15px'}
                                    height={'15px'}
                                />
                            </div>
                        </div>
                        <div className={styles.flex_column}>
                            <Typography
                                variant="body4"
                                fontWeight="500"
                                color={AppColor.transparentBlack}>
                                Favicon
                            </Typography>
                            <SizeBox height="20px" />
                            <img
                                src={fakeUserConstant.image}
                                width={'100px'}
                                height={'100px'}
                                alt=""
                            />
                            <SizeBox height="20px" />
                            <div className={styles.logo_bottom_item}>
                                <MyButtonBlack
                                    textTransform="uppercase"
                                    onClick={() => {}}>
                                    Update logo
                                </MyButtonBlack>
                                <AppColor.close
                                    fill={AppColor.red}
                                    width={'15px'}
                                    height={'15px'}
                                />
                            </div>
                        </div>
                    </div>
                }
            />

            <DynamicPadding />

            <DetailsTable
                title="Site name"
                node={
                    <div className={styles.site_grid}>
                        <div style={{ width: '100%' }}>
                            <Typography
                                variant="body4"
                                fontWeight="500"
                                color={AppColor.transparentBlack}>
                                Title
                            </Typography>
                            <SizeBox height="20px" />
                            <InputCommon
                                padding="10px 15px"
                                width="100%"
                                callback={() => {}}
                                placeholder="title site"
                            />
                        </div>
                        <div style={{ width: '100%' }}>
                            <Typography
                                variant="body4"
                                fontWeight="500"
                                color={AppColor.transparentBlack}>
                                Title Position
                            </Typography>
                            <SizeBox height="20px" />
                            <InputDropdown
                                padding="10px 15px"
                                dropdownVariants={['At the end']}
                                initText="At the end"
                                labelIcon={<></>}
                                marginLeft={true}
                            />
                        </div>
                    </div>
                }
            />
            <DynamicPadding />

            <DetailsTable
                title="Site name"
                node={
                    <div className={styles.site_grid}>
                        <div style={{ width: '100%' }}>
                            <Typography
                                variant="body4"
                                fontWeight="500"
                                color={AppColor.transparentBlack}>
                                Zone
                            </Typography>
                            <SizeBox height="20px" />
                            <InputDropdown
                                padding="10px 15px"
                                dropdownVariants={['At the end']}
                                initText="USA, Washington (GMT-4) "
                                labelIcon={<></>}
                                marginLeft={true}
                            />
                        </div>
                        <div style={{ width: '100%' }}>
                            <Typography
                                variant="body4"
                                fontWeight="500"
                                color={AppColor.transparentBlack}>
                                Format
                            </Typography>
                            <SizeBox height="20px" />
                            <InputDropdown
                                padding="10px 15px"
                                dropdownVariants={['At the end']}
                                initText="M D,Y HH:MM (AM/PM)"
                                labelIcon={<></>}
                                marginLeft={true}
                            />
                        </div>
                    </div>
                }
            />

            <DynamicPadding />

            <DetailsTable
                title="Maintenance"
                switchButtons={['Active', 'Debugging', 'Gzip']}
                node={
                    <div style={{ width: '100%' }}>
                        <Typography
                            variant="body4"
                            fontWeight="500"
                            color={AppColor.transparentBlack}>
                            Inactive Text 
                        </Typography>
                        <SizeBox height="20px" />
                        <InputCommon
                            padding="10px 15px"
                            width="100%"
                            callback={() => {}}
                            placeholder="Temporarily Uniano is recharging its creative sparks. Stay tuned for the grand comeback!"
                        />
                    </div>
                }
            />
            <DynamicPadding />

            <DetailsTable
                title="Caching"
                switchButtons={['Active']}
                buttons={['Clear']}
                node={
                    <div style={{ width: '100%' }}>
                        <Typography
                            variant="body4"
                            fontWeight="500"
                            color={AppColor.transparentBlack}>
                            Time (min)
                        </Typography>
                        <SizeBox height="20px" />
                        <InputCommon
                            padding="10px 15px"
                            width="100%"
                            callback={() => {}}
                            placeholder="15"
                        />
                    </div>
                }
            />

            <DynamicPadding />

            <DetailsTable
                title="Session cookies"
                switchButtons={['Active']}
                
                node={
                    <div style={{ width: '100%' }}>
                        <Typography
                            variant="body4"
                            fontWeight="500"
                            color={AppColor.transparentBlack}>
                            Time (min)
                        </Typography>
                        <SizeBox height="20px" />
                        <InputCommon
                            padding="10px 15px"
                            width="100%"
                            callback={() => {}}
                            placeholder="30"
                        />
                    </div>
                }
            />

            <DynamicPadding />

            <DetailsTable
                title="Session cookies"
                switchButtons={['Active']}
                
                node={
                    <div className={styles.social_grid}>
                        <div style={{ width: '100%' }}>
                        <Typography
                            variant="body4"
                            fontWeight="500"
                            color={AppColor.transparentBlack}>
                            Facebook link
                        </Typography>
                        <SizeBox height="20px" />
                        <InputCommon
                            padding="10px 15px"
                            width="100%"
                            callback={() => {}}
                            placeholder="30"
                            initText='https://www.facebook.com/uniano'
                        />
                    </div>
                    <div style={{ width: '100%' }}>
                        <Typography
                            variant="body4"
                            fontWeight="500"
                            color={AppColor.transparentBlack}>
                            Twitter link
                        </Typography>
                        <SizeBox height="20px" />
                        <InputCommon
                            padding="10px 15px"
                            width="100%"
                            initText='https://twitter.com/unianoofficial'
                            callback={() => {}}
                            placeholder="30"
                        />
                    </div>
                    <div style={{ width: '100%' }}>
                        <Typography
                            variant="body4"
                            fontWeight="500"
                            color={AppColor.transparentBlack}>
                            Instagram link
                        </Typography>
                        <SizeBox height="20px" />
                        <InputCommon
                            padding="10px 15px"
                            width="100%"
                            callback={() => {}}
                            placeholder="30"
                            initText='https://instagram.com/unianoofficial'
                        />
                    </div>
                    <div style={{ width: '100%' }}>
                        <Typography
                            variant="body4"
                            fontWeight="500"
                            color={AppColor.transparentBlack}>
                            LinkedIn link
                        </Typography>
                        <SizeBox height="20px" />
                        <InputCommon
                            padding="10px 15px"
                            width="100%"
                            callback={() => {}}
                            placeholder="30"
                            initText='https://linkedin.com/company/uniano'
                        />
                    </div>
                    </div>
                }
            />

            <DynamicPadding />
            <DetailsTableIp
                ips={[
                    {
                        date: '(15 Oct 2023 23:52:11)',
                        flag: <AppColor.UkraineFlagIcon />,
                        ip: '102.215.221.255',
                    },
                    {
                        date: '(15 Oct 2023 23:52:11)',
                        flag: <AppColor.UkraineFlagIcon />,
                        ip: '102.215.221.255',
                    },
                    {
                        date: '(15 Oct 2023 23:52:11)',
                        flag: <AppColor.UkraineFlagIcon />,
                        ip: '102.215.221.255',
                    },
                    {
                        date: '(15 Oct 2023 23:52:11)',
                        flag: <AppColor.UkraineFlagIcon />,
                        ip: '102.215.221.255',
                    },
                    {
                        date: '(15 Oct 2023 23:52:11)',
                        flag: <AppColor.UkraineFlagIcon />,
                        ip: '102.215.221.255',
                    },
                    {
                        date: '(15 Oct 2023 23:52:11)',
                        flag: <AppColor.UkraineFlagIcon />,
                        ip: '102.215.221.255',
                    },
                    {
                        date: '(15 Oct 2023 23:52:11)',
                        flag: <AppColor.UkraineFlagIcon />,
                        ip: '102.215.221.255',
                    }
                ]}
                title='IP block'
            />
        </div>
    )
}
  
  type DetailsTableProps = {
      title: string;
      node: React.ReactNode;
      switchButtons?: string[];
      buttons?: string[];
  }
  export const DetailsTable = ({node,title,switchButtons,buttons}:DetailsTableProps) => {
      return (
          <div className={styles.details_wrapper}>
              <div>
                  <div className={styles.top_part_dropdown}>
                      <Typography variant='body3' fontWeight='500'>{title}</Typography>
                      <div className={styles.buttons_grid}>
                      { buttons && buttons.map(item => <div className='gap_5'>
                            <MyButtonTransparentOrange
                            fontWeight='500'
                            onClick={() => {}}>
                                {item}
                            </MyButtonTransparentOrange>
                        </div>)}
                        { switchButtons && switchButtons.map(item => <div className='gap_5'>
                            <Typography variant='body4'>
                                {item}
                            </Typography>
                            <SwitchButton width='44px' height='24px' />
                        </div>)}
                      </div>
                  </div>
                  <div>
              </div>
              </div>
              <HorizontalLine />
  
              <div style={{padding: '20px 30px'}}>
                  {node}
              </div>
          </div>
      )
  }

  type DetailsTablePropsIp = {
    title: string;
    ips: {
        flag: React.ReactNode;
        ip: string;
        date: string;

    }[];
}
 const DetailsTableIp = ({ips,title}:DetailsTablePropsIp) => {

    const [arrayIp,setArrayIp] = useState<{
        flag: React.ReactNode;
        ip: string;
        date: string;
    }[]>(ips);

    const [newIp,setNewIp] = useState('');

    return (
        <div className={styles.details_wrapper}>
            <div>
                <div style={{flexWrap: 'wrap',gap: '20px'}} className={styles.top_part_dropdown}>
                   <div style={{whiteSpace: 'nowrap'}} className={styles.gap_30_15}>
                        <Typography  variant='body3' fontWeight='500'>{title}</Typography>
                        <InputCommon
                                callback={() => {}}
                                placeholder='Search'
                                padding='10px 15px'
                                width='290px'
                        />
                   </div>
                   <div>
                        <div style={{position: 'relative'}}>
                            <InputCommon
                                 disableClose={true}
                                callback={(item) => {setNewIp(item)}}
                                placeholder='102.215.221.255'
                                padding='10px 90px 10px 20px'
                                rightPadding={90}
                                width='290px'
                            />
                            <div className={styles.absolute_add_button}>
                            <MyButtonBlack padding='3px 14px' fontWeight='500' disabled={newIp.length < 14} onClick={() => {
                                const originalDate = new Date();
                                setArrayIp(prev => [...prev,{
                                    date: `(${originalDate.getDate()} ${originalDate.toLocaleString('en-US', { month: 'short' })} ${originalDate.getFullYear()} ${originalDate.getHours()}:${originalDate.getMinutes()}:${originalDate.getSeconds()})`,
                                    flag: <AppColor.UkraineFlagIcon/>,
                                    ip: newIp,
                                }])
                            }}>
                            ADD
                            </MyButtonBlack>
                            </div>
                        </div>
                   </div>
                </div>
                <div>
            </div>
            </div>
            <HorizontalLine />

            <div className={styles.ips_grid} style={{padding: '20px 30px'}}>
                {arrayIp.map(item =>
                    <div className='gap_10'>
                        {item.flag}
                        <Typography variant='body4'>{item.ip} <span style={{fontSize: '12px',color: AppColor.transparentBlack}}>{item.date}</span></Typography>
                        <div style={{display: 'flex'}}>
                        <AppColor.close width={'14px'} height={'14px'} fill={AppColor.red} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

  type DropdownButtonProps = {
      filters: string[];
  }
  const DropdownButton = ({filters}:DropdownButtonProps) => {
      const [activeItem,setActiveItem] = useState(filters[0]);
      const [showDropdown,setShowDropdown] = useState(false);
      return (
          filters.length > 0 ?
          <div className={styles.dropdown_relative}>
              <MyButtonTransparentOrange onClick={() => {setShowDropdown(prev => !prev)}}>
                  {activeItem}
                  <AppColor.chevronBottom />
              </MyButtonTransparentOrange>
              <div className={styles.dropdown_absolute} style={{display: showDropdown ? 'block' : 'none'}}>
                  <div className={styles.dropdown_grid}>
                      {filters.map(item => <div onClick={() => {setActiveItem(item)}}><Typography variant='body4'>{item}</Typography></div>)}
                  </div>
              </div>
          </div>
          : <></>
      )
  }
export default AdminSettings;