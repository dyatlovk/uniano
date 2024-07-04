
import AppColor from '@common/styles/variables-static';
import InputCommon from '../../inputs/InputCommon';
import styles from './style.module.scss';
import { useRef } from 'react';


const InputBarChat = () => {

    const inputFileRef = useRef(null);

    const handleClickFile = () => {
        if(inputFileRef.current) {
            inputFileRef.current.click();
        }
    }

    return (
      <div style={{position: 'relative'}}>

        <InputCommon
            icon={ <div onClick={handleClickFile} className='cursor' style={{position:'relative'}}>
                    <input ref={inputFileRef} type="file" className={`${styles.input_abs}`} />
                <AppColor.attach />
            </div>}
            callback={() => {}}
            placeholder='Message'
            disableClose={true}
            padding='15px 100px 15px 50px'
            width='100%'
        />
        <div className={styles.right_abs}>
            <AppColor.smile />
            <AppColor.sendEmail />
        </div>
        
      </div>
    );
};

export default InputBarChat;