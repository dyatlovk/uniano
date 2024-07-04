
import { NavBarLine } from '..';
import DynamicPadding from '../../DynamicPadding';
import HorizontalLine from '../../Lines/HorizontalLine';
import SizeBox from '../../SizeBox';
import Typography from '../../Typography/Typography';
import MyCheckbox from '../../inputs/Checkbox';
import styles from './style.module.scss';

type DetailsTableMultiNodesProps = {
    elements: DetailsTableMultiNodesItem[];
    titles: string[];
    selectableColumn?: number;
    removeNavBar?: boolean
}

type DetailsTableMultiNodesItem = {
    nodes: React.ReactNode[];

}
const DetailsTableMultiNodes = ({elements,removeNavBar,titles,selectableColumn}:DetailsTableMultiNodesProps) => {

    return (
    <div>
        <div className='mobile'>
            {elements.map((nodeElement) =>
                <div className={styles.mobile_grid}>
                {titles.map((title,index) =>
                    <div className={styles.mobile_item}>
                        
                        <div className='text_box'>
                            {selectableColumn != null && index == selectableColumn && <MyCheckbox height='20px' width='20px' />}
                            <Typography variant='body4' fontWeight='500'>{title}</Typography>
                        </div>
                        <SizeBox height='15px'/>
                        <div style={{paddingLeft: '15px'}}>
                        {nodeElement.nodes[index]}
                        </div>
                        <SizeBox height='15px'/>
                    </div>    
                )}
                </div>)}
        </div>
         <div className='desktop'>
              <div className={styles.table}>
                <div className={styles.table_absolute}></div>
                   <table style={{width: '100%'}}>
                        <thead>
                            <tr>
                                {titles.map((item,index) => <th className={styles.column_title} scope="col">
                                    <div style={{display: 'flex',gap: '10px'}}>
                                    {index == 0 && <SizeBox width='10px'/>}
                                    {selectableColumn != null && index == selectableColumn && <MyCheckbox height='20px' width='20px' />}
                                    <Typography variant='body4' fontWeight='500'>{item}</Typography>
                                    </div>
                                </th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {elements.map(item =>
                                <tr className={styles.row_item} style={{maxWidth: '100px'}}>
                                    {item.nodes.map((item,index) => 
                                        index == 0 
                                        ? <th scope='row'>
                                        <div style={{display: 'flex'}}>
                                            <SizeBox width='20px'/>
                                        {item}
                                        </div>
                                    </th>   
                                    : <th>
                                        <div>
                                        {item}
                                        </div>
                                    </th>     
                                        )}
                                        
                                    </tr>    
                                    
                            )}
                            
                        </tbody>
                   </table>
        
                   <DynamicPadding desktop='20px' mobile='15px'/>
                   {!removeNavBar && <div className='flex_space_between'>
                       <Typography variant='body4'><span style={{fontWeight: '500'}}>11 841</span> Complaints</Typography>
                       <NavBarLine callback={() => {}} maxCountPage={100}   />
                   </div>}
              </div>
         </div>
    </div>
    );
};

export default DetailsTableMultiNodes;