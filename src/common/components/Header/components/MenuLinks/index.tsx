
import Typography from '@common/components/ui/Typography/Typography';
import { CategoryItemProps, LinksType, categorysText, links } from './content';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import {useEffect, useState} from 'react'
import { Link as LinkRouter } from 'react-router-dom';

const mapRoutes = {
      0: '/service/all',
      1: '/orders/all',
      2: '/crowdfreelance/all',
      3: '/partnership',
      4: '/search-master/categor',
}

const MenuLinks = ({hoveredLink}:{hoveredLink?:number}) => {
    const [activeTab,setActiveTab] = useState(hoveredLink ?? 0);
    const [activeCategory,setActiveCategory] = useState<categorysText>(categorysText.Development); 

    
    
    return (
      <div className={styles.wrapper}>
           <div className={styles.links_wrapper}>
         
              
                <Link
                  onClick={() => {setActiveTab(0)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.cart width={'27px'} height={'27px'}  fill={AppColor.text} />}
                  ImageNodeActive={<AppColor.cart  width={'27px'} height={'27px'} fill='white' />}
                  text='Services'
                  index={0}
                />

                <Link
                  onClick={() => {setActiveTab(1)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.orders />}
                  ImageNodeActive={<AppColor.ordersWhite />}
                  text='Orders'
                  index={1}
                />

                <Link
                  onClick={() => {setActiveTab(2)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.caseIcon fill={AppColor.text} />}
                  ImageNodeActive={<AppColor.caseWhite fill='white' width={'30px'} height={'30px'} />}
                  text='Sponsorships'
                  index={2}
                />

                <Link
                  onClick={() => {setActiveTab(3)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.freelancer fill={AppColor.text} />}
                  ImageNodeActive={<AppColor.freelancerWhite fill='white' />}
                  text='Freelancers'
                  index={3}
                />

                <Link
                  onClick={() => {setActiveTab(4)}}
                  activeIndex={activeTab}
                  ImageNode={<AppColor.managers fill={AppColor.text} />}
                  ImageNodeActive={<AppColor.managersWhite fill='white' />}
                  text='Managers'
                  index={4}
                />
                
             
           </div>
           <div className={styles.horizontal_line}></div>
           <div className={styles.content_wrapper}>
              <div className={styles.search_section}>
                <div className={styles.search_block}><input type="text" placeholder='Search' /></div>

                <div className={styles.search_categorys}>
                  <CategoryItem
                  onHover = {() => {setActiveCategory(categorysText.Development)}}
                    icon={<AppColor.development />}
                    title={categorysText.Development}
            
                  />
                  <CategoryItem
                  onHover = {() => {setActiveCategory(categorysText.Design)}}
                    icon={<AppColor.desing />}
                    title={categorysText.Design}
        
                  />
                  <CategoryItem
                  onHover = {() => {setActiveCategory(categorysText.Marketing)}}
                    icon={<AppColor.marketing />}
                    title={categorysText.Marketing}
          
                  />
                  <CategoryItem
                  onHover = {() => {setActiveCategory(categorysText.Writing)}}
                    icon={<AppColor.writing />}
                    title={categorysText.Writing}
         
                  />
                  <CategoryItem
                  onHover = {() => {setActiveCategory(categorysText.Management)}}
                    icon={<AppColor.managment />}
                    title={categorysText.Management}
   
                  />
                  <CategoryItem
                  onHover = {() => {setActiveCategory(categorysText.Consulting)}}
                    icon={<AppColor.consulting />}
                    title={categorysText.Consulting}

                  />
                </div>
              </div>
              <div className={styles.vertical_line}></div>
              <div className={styles.search_result_wrapper}>
                {links[activeCategory].map(item =>
                  <div className={styles.category_link_wrapper}>
                    
                    <LinkRouter to={mapRoutes[activeTab]}>
                      <Typography textLineHeight='100%' variant='body4' fontWeight='500' className={`${styles.color_title} cursor`}>
                          {item.title}
                      </Typography>
                    </LinkRouter>
                 
                      <div className={styles.category_link_children}>
                        {item.content.map(item =>
                          <LinkRouter to={mapRoutes[activeTab]}>
                            <Typography className='underline_appearance' textLineHeight='100%' variant='body4' fontWeight='400' color={AppColor.text}>
                                {item.text}
                            </Typography>
                          </LinkRouter>  
                        )}
                      </div>
                  </div>  
                )}
              </div>
           </div>
      </div>
    );
};

const mapRoutesAuthorized = {
  0: '/service/all',
  1: '/orders/all',
  2: '/partnership',
  3: '/crowdfreelance/all',
  4: '/users/all',
}

export const MenuLinksAuthorized = ({hoveredLink}:{hoveredLink:number}) => {
  const [activeCategory,setActiveCategory] = useState<categorysText>(categorysText.Development); 

  
  return (
    <div className={styles.wrapper}>
       
         <div className={styles.content_wrapper}>
            <div className={styles.search_section}>
              <div className={styles.search_block}><input type="text" placeholder='Search' /></div>

              <div className={styles.search_categorys}>
                <CategoryItem
                onHover = {() => {setActiveCategory(categorysText.Development)}}
                  icon={<AppColor.development />}
                  title={categorysText.Development}
          
                />
                <CategoryItem
                onHover = {() => {setActiveCategory(categorysText.Design)}}
                  icon={<AppColor.desing />}
                  title={categorysText.Design}
      
                />
                <CategoryItem
                onHover = {() => {setActiveCategory(categorysText.Marketing)}}
                  icon={<AppColor.marketing />}
                  title={categorysText.Marketing}
        
                />
                <CategoryItem
                onHover = {() => {setActiveCategory(categorysText.Writing)}}
                  icon={<AppColor.writing />}
                  title={categorysText.Writing}
       
                />
                <CategoryItem
                onHover = {() => {setActiveCategory(categorysText.Management)}}
                  icon={<AppColor.managment />}
                  title={categorysText.Management}
 
                />
                <CategoryItem
                onHover = {() => {setActiveCategory(categorysText.Consulting)}}
                  icon={<AppColor.consulting />}
                  title={categorysText.Consulting}

                />
              </div>
            </div>
            <div className={styles.vertical_line}></div>
            <div className={styles.search_result_wrapper}>
              {links[activeCategory].map(item =>
                <div className={styles.category_link_wrapper}>
                  
                  <LinkRouter to={mapRoutesAuthorized[hoveredLink]}>
                    <Typography textLineHeight='100%' variant='body4' fontWeight='500' className={`${styles.color_title} cursor`}>
                        {item.title}
                    </Typography>
                  </LinkRouter>
               
                    <div className={styles.category_link_children}>
                      {item.content.map(item =>
                        <LinkRouter to={mapRoutesAuthorized[hoveredLink]}>
                          <Typography className='underline_appearance' textLineHeight='100%' variant='body4' fontWeight='400' color={AppColor.text}>
                              {item.text}
                          </Typography>
                        </LinkRouter>  
                      )}
                    </div>
                </div>  
              )}
            </div>
         </div>
    </div>
  );
};

const Link = ({activeIndex,ImageNode,text,index,onClick,ImageNodeActive}:LinksType) => {
  return (
    <div onClick={onClick} className={styles.link_wrapper} style={{backgroundColor: index == activeIndex? AppColor.orange : 'transparent'}}>
      {activeIndex == index ? ImageNodeActive : ImageNode}
      <Typography variant='body7' color={activeIndex == index ? 'white' : AppColor.text} fontWeight='500' textLineHeight='100%'>
        {text}
      </Typography>
    </div>
  );
}


const CategoryItem = ({icon,title,onHover}:CategoryItemProps) => {
  return (
    <div onMouseOver={onHover} className={styles.category_item}>
        {icon}
        <Typography variant='body4' fontWeight='400'>
          {title}
        </Typography>

       <div className={styles.category_chevron}>
       <AppColor.chevronRight fill={AppColor.text} width={9} height={15}/>
       </div>
    </div>
  )
}

export default MenuLinks;