
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import ModalCenter from '../..';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import SizeBox from '@common/components/ui/SizeBox/index';
import { useScreenSize } from '@common/helpers/useScreenSize';

type ModalCenterBasicProps = {
    title: string;
    children: React.ReactNode;
    nodesBeforeClose?: React.ReactNode[];
    callbackClose: () => void;
    bottomPartPadding: string;
    topPartPadding?: string;
    prevClose?: boolean;
    nodeAfterTitle?: React.ReactNode;
    callbackPrev?: () => void;

    desktopMinWidth?: string;
    mobileMinWidth?: string;
    desktopMinHeight?: string;

    desktopMaxWidth?: string;
    mobileMaxWidth?: string;
}
const ModalCenterBasic = ({prevClose,desktopMinHeight,nodeAfterTitle,desktopMinWidth,desktopMaxWidth,mobileMaxWidth,mobileMinWidth,callbackClose,topPartPadding,bottomPartPadding,children,title,nodesBeforeClose,callbackPrev}:ModalCenterBasicProps) => {
    const {height,width} = useScreenSize();

    const stylePass = {
        '--desktopWidthMin': desktopMinWidth,
        '--mobileMinWidth': mobileMinWidth,
        '--desktopMinHeight': desktopMinHeight,
        '--desktopMaxWidth':desktopMaxWidth,
        '--mobileMaxWidth':mobileMaxWidth,
        borderRadius: '20px',
    }

    const modalWidth = (width+20) <= parseInt(desktopMinWidth) ? 'calc(100vw - 20px)' : 'auto';
    const minWidthGetted = (width+20) <= parseInt(desktopMinWidth) ? 'calc(100vw - 20px)'  : desktopMinWidth;
    const maxWidthGetter = (width+20) <= parseInt(desktopMaxWidth) ? 'calc(100vw - 20px)'  : desktopMaxWidth;

    return (
      <ModalCenter onClickHandler={callbackClose}>
        <div style={{...stylePass,width: modalWidth,minWidth: minWidthGetted,maxWidth: maxWidthGetter}} className={styles.modal_center_basic}>
            <div className={styles.top_part} style={{padding: topPartPadding ?? '20px 30px'}}>
                {prevClose && <div style={{display: 'flex',alignItems: 'center'}}>
                    <AppColor.longChevronLeft className='cursor' fill={AppColor.text} onClick={() => {
                        if(callbackPrev) {
                            callbackPrev()
                        } else {
                            callbackClose()
                        }
                    }} />
                    <SizeBox width='15px'/>
                    {title != '' && <Typography textLineHeight='1' style={{whiteSpace: 'nowrap'}} variant='body3' fontWeight='500'>{title}</Typography>}
                    {nodeAfterTitle && <SizeBox width='15px'/>}
                    {nodeAfterTitle && nodeAfterTitle}
                    </div>}
                {!prevClose &&  <div className='gap_15' style={{width: '100%'}}>
                {title != '' && <Typography textLineHeight='1' style={{whiteSpace: 'nowrap'}} variant='body3' fontWeight='500'>{title}</Typography>}
                    {nodeAfterTitle && nodeAfterTitle}
                    </div>}

                <div className='gap_10'>
                    {nodesBeforeClose && nodesBeforeClose.map(item => item)}
                    <AppColor.close onClick={callbackClose} className='cursor'  width={'15px'} height={'15px'} fill={AppColor.text}/>
                </div>
            </div>
            <HorizontalLine />
            <div className={styles.bottom_part} style={{padding: bottomPartPadding}}>
                {children}
            </div>
        </div>
      </ModalCenter>
    );
};

export default ModalCenterBasic;