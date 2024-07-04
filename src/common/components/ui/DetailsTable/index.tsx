
import { useEffect, useState } from 'react';
import DynamicPadding from '../DynamicPadding';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import { useScreenSize } from '@common/helpers/useScreenSize';
import SizeBox from '../SizeBox';
import HorizontalLine from '../Lines/HorizontalLine';
import MyCheckbox from '../inputs/Checkbox';
import PopUpBottom from '../../ModalPopUps/PopUpBottom';
import { ThreeLinesPopUpCustom } from '../ThreeLinesPopUp';


type DetailsTableProps = {
  details: DetailsTableItem[];
  page?: number;
  filters: string[];
  callbackNav: (item:number) => void;
  showUsers?: boolean;
  users?: any[];
  maxWidth?: string;
  dropdownNode?: React.ReactNode;
  removeNavBar?: boolean;
  removeThreeLines?: boolean;
  projectsCount?: string;
  titleEnd?: string;
  group?: string;
  endIcon?: React.ReactNode;
  modalDropdown?: React.ReactNode;
}

type DetailsTableItem = {
  title: string;
  child: React.ReactNode;
  selecrable?: boolean;
  maxWidth?: string;
}
const DetailsTable = ({endIcon,titleEnd,modalDropdown,group,details,page,projectsCount,filters,callbackNav,showUsers,users,maxWidth,dropdownNode,removeNavBar=false,removeThreeLines=false}:DetailsTableProps) => {

    const [currentFilter,setCurrentFilter] = useState('All');
    const {width,height} = useScreenSize();
    const [showDropdown,setShowDropdown] = useState(false);

    const [selectAll,setSelectAll] = useState(false);

    return (
      <div>
            <div className={styles.filter_text_wrapper}>
                  {group &&
                  <div className='gap_10'>
                    <Typography variant='body4' fontWeight='500'>{group}</Typography>
                    <AppColor.chevronBottom fill={AppColor.text} />
                    <div className={styles.vertical_line_item}></div>
                  </div>
                  }
                  {filters.map((item) => (
                      <div onClick={() => { setCurrentFilter(item)}} className={styles.filter_text}>
                          <Typography
                          textLineHeight='80%'
                              variant="body4"
                              color={
                                  item == currentFilter
                                      ? AppColor.orange
                                      : AppColor.text
                              }
                              fontWeight={
                                  item == currentFilter
                                      ? '500'
                                      : '400'
                              }>
                              {item}
                          </Typography>
                      </div>
                  ))}
                </div>
                {filters.length > 0 && <>
                  <DynamicPadding mobile='15px' desktop='15px' />
                <div className={styles.vertical_line}></div>
                <DynamicPadding mobile='20px' desktop='30px' />
                </>}
              <div>
                {
                  width < 768
                  ? <div className={styles.mobile_wrapper_all}>
                     {details.map((item,index) => 
                        <div className={styles.mobile_wrapper}>
                          <div className={styles.mobile_text}>
                         <div className='gap_10'>
                            {item.selecrable && <MyCheckbox callback={(item) => [setSelectAll(item)]} width='20px' height='20px' />}
                              <Typography textLineHeight='1' variant='body4' fontWeight='500'>
                                  {item.title} <AppColor.trianleDown fill={item.title != ' ' ? AppColor.text : 'transparent'} />
                              </Typography>
                         </div>
                          </div>
                          <div className={styles.mobile_child}>
                          {
                                dropdownNode && index == 0 
                                ? <div style={{cursor: 'pointer'}} onClick={() => {setShowDropdown(prev => !prev)}} className={styles.gap_20}>
                                  {
                                    showDropdown
                                    ? <AppColor.chevronTop width={'20px'} fill={AppColor.text}/>
                                    : <AppColor.chevronBottom width={'20px'} fill={AppColor.text}/>
                                  }
                                   {item.selecrable && <MyCheckbox basicValue={selectAll} width='20px' height='20px' />}
                                  {item.child}
                                </div>
                                : <div className='gap_10'>
                                {item.selecrable && <MyCheckbox basicValue={selectAll} width='20px' height='20px' />}
                                 { item.child}
                               </div>
                              }
                          </div>
                          {index == 0 && dropdownNode
                            ? <div>
                              <SizeBox height='15px'/>
                              <HorizontalLine/>
                              <SizeBox height='15px'/>
                              <div style={{display: showDropdown ? 'block' : 'none'}}>
                                {dropdownNode}
                                </div>
                              </div>
                            : <></>}
                        </div>
                      )}
                   </div>
                  : <div className={styles.desktop_wrapper}>
                    <div className={styles.absolute_background}></div>
                      <div className={styles.desktop_items_wrapper}>
                        {details.map((item,index) =>
                          <div className={styles.dessktop_item_shell} style={{maxWidth: item.maxWidth != null ? item.maxWidth : maxWidth,}}>
                           <div className={styles.title_wrapper_desktop}>
                             <div style={{display: 'flex',gap: '10px',whiteSpace: 'nowrap'}}>
                             {dropdownNode && index == 0
                                ? <SizeBox width='25px'/>
                                : <></>
                                }
                              {item.selecrable && <MyCheckbox width='20px' height='20px' callback={(item) => [setSelectAll(item)]} />}
                               
                                <Typography variant='body4' fontWeight='500'>
                                {item.title} <AppColor.trianleDown fill={item.title != ' ' ? AppColor.text : 'transparent'} />
                                </Typography>
                             </div>
                           </div>
                            <div className={styles.child_wrapper_desktop}>
                              {
                                dropdownNode && index == 0
                                ? <div style={{cursor: 'pointer'}} onClick={() => {setShowDropdown(prev => !prev)}} className={styles.gap_20}>
                                  {
                                    showDropdown
                                    ? <AppColor.chevronTop width={'20px'} fill={AppColor.text}/>
                                    : <AppColor.chevronBottom width={'20px'} fill={AppColor.text}/>
                                  }
                                  {item.selecrable && <MyCheckbox basicValue={selectAll}  width='20px' height='20px' />}
                                  {item.child}
                                </div>
                                : <div className='gap_20'>
                                 {item.selecrable && <MyCheckbox basicValue={selectAll}  width='20px' height='20px' />}
                                  { item.child}
                                </div>
                              }
                            </div>
                          </div>
                          
                        
                        )}
                        {endIcon &&  <div className={styles.dessktop_item_shell} style={{maxWidth: maxWidth}}>
                          <div className={styles.title_wrapper_desktop}>
                            <Typography color='transparent'>a</Typography>
                          </div>
                          <div className={styles.child_wrapper_desktop}>
                            {endIcon}
                          </div>
                        </div>}
                        {!removeThreeLines && <div className={styles.dessktop_item_shell} style={{maxWidth: maxWidth}}>
                          <div className={styles.title_wrapper_desktop}>
                            <Typography color='transparent'>a</Typography>
                          </div>
                          <div className={styles.child_wrapper_desktop}>
                          <PopUpBottom
                            positionRight='-100%'
                                    showBackgroundHover={true}
                                    showNodeHover={
                                     <div className='cursor'> <AppColor.threeLinesActive /></div>
                                    }
                                   showNode={
                                    <div className='cursor'><AppColor.threeLines /></div>
                                   }
                                   popUpNode={modalDropdown ?? <ThreeLinesPopUpCustom
                                    positionRight='45%'
                                     items={[
                                    {
                                      icon: <AppColor.share />,
                                      title: 'Share'
                                    },
                                    {
                                      icon: <AppColor.report />,
                                      title: 'Report'
                                    }
                                   ]} />}
                                   topPaddingFromNode='27px'
                               />
                          </div>
                        </div>}
                      </div>
                  </div>
                }
              </div>
              <DynamicPadding mobile='20px' desktop='30px' />
              <div className={styles.vertical_line}></div>

              {showUsers
              ? 
              <>
              <DynamicPadding mobile='20px' desktop='20px' />
                  <div className={styles.users_wrapper}>
                    {...users}
                  </div>
                  <DynamicPadding mobile='20px' desktop='20px' />
                <div className={styles.vertical_line}></div>
                <DynamicPadding mobile='20px' desktop='20px' />
              </>
              : <></>}
               {showDropdown && dropdownNode && width > 768
              ? <div className={styles.desktop_dropdown_item}>
                {dropdownNode}
                </div>
              : <></>}
              {!removeNavBar && <> <DynamicPadding mobile='20px' desktop='20px' />
              <div className={styles.flex_space}>
                <Typography variant='body4'>
                 <span style={{fontWeight: '500'}}> 11 841</span> missions
                </Typography>
                <NavBarLine maxCountPage={11841} callback={(item) => {callbackNav(item)}} />
              </div>
              </>
              }
              {projectsCount && <DynamicPadding mobile='20px' desktop='20px' />}
              {projectsCount &&
                 <Typography variant='body4'>
                 <span style={{fontWeight: '500'}}>{projectsCount}</span> {titleEnd != null ? titleEnd : parseInt(projectsCount) > 1 ?'projects' : 'project'}
               </Typography>
              }
      </div>
    );
};

export const NavBarLine = ({callback,maxCountPage}: {callback: (item:number) => void,maxCountPage:number}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = Math.max(1, currentPage - 3);

  const endIdx = startIdx + 6;

  const numberBoxes = [];

  useEffect(() => {
    callback(currentPage)
  }, [currentPage])

  for (let i = startIdx; i <= endIdx; i++) {
    numberBoxes.push(
        <div
            onClick={() => {
                if(i <= maxCountPage) {
                  setCurrentPage(i)
                }
            }}
            key={i}
            className={styles.box}
            style={{
                backgroundColor:
                    i === currentPage
                        ? AppColor.orange
                        : 'transparent',
                  opacity: i < maxCountPage+1 ? 1 : 0.3
            }}>
            <Typography
                variant="body4"
                color={i === currentPage ? 'white' : AppColor.text}>
                {i}
            </Typography>
        </div>
    )
  }

  function prevFunction() {
    if(currentPage - 7 > 0) {
      setCurrentPage(prev => prev - 7)
    }
  }

  function nextFunction() {
    if(currentPage + 7 <= maxCountPage) {
      setCurrentPage(prev => prev + 7)
    }
  }


  return (
    <div className={styles.navbar_wrapper}>
      <div onClick={prevFunction}  className={styles.flex_navbar}>
        <AppColor.doubleChevronLeft />
  
        <Typography variant='body4' textTransform='uppercase' textLineHeight='100%'>PREV</Typography>
      </div>

      {numberBoxes}

     <div onClick={nextFunction} className={styles.flex_navbar}>
        <Typography variant='body4' textTransform='uppercase' textLineHeight='100%'>NEXT</Typography>
  
        <AppColor.doubleChevronRight />
     </div>
    </div>
  )
}

export default DetailsTable;