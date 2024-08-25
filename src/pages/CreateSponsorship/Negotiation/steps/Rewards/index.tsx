import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import {
  DragList,
  DragListManager,
} from '@common/components/ui/DragnDrop/DragList/index'
import {
  DropDownBase,
  DropDownContext,
  DropDownSimpleItem,
} from '@common/components/ui/Dropdown/Base/index'
import CountryItem from '@common/components/ui/Dropdown/Base/variants/Countries/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import DropdownNumber from '@common/components/ui/SearchFilterBar/components/DropdownNumber/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import Typography from '@common/components/ui/Typography/Typography'
import useUpdater from '@common/helpers/useUpdater'
import AppColor from '@common/styles/variables-static'
import { ReactNode, useEffect, useState } from 'react'
import styles from './style.module.scss'

interface Props {
  onReady: (title: string) => void
}

const dragListMgr = new DragListManager()

const Rewards = ({ onReady }: Props): JSX.Element => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false)
  const [showSelectedReward, setSelectedReward] = useState<boolean>(false)

  return (
    <>
      <ResponsiveLayoutTwo
        item1={
          <div className={styles.items}>
            <CancelReward
              onClick={() => {
                onReady('Select Rewards')
              }}
            />
            {showSelectedReward && <SelectedReward onClick={() => {}} />}
            <div className={styles.add_item}>
              <MyButtonOrange
                width="fit-content"
                textTransform="uppercase"
                fontWeight="500"
                padding="5px 10px"
                onClick={() => {
                  setShowAddModal(true)
                }}
              >
                <AppColor.plusCircle
                  width={12}
                  height={12}
                  fill={AppColor.white}
                />
                Add Reward
              </MyButtonOrange>
            </div>
          </div>
        }
        item2={<Help />}
        gap="80px"
        item1MaxWidth="692px"
        item2MaxWidth="388px"
      />

      {showAddModal && (
        <AddModal
          onSave={() => {
            setShowAddModal(false)
            setSelectedReward(true)
            onReady('Select Rewards')
          }}
          onClose={() => {
            setShowAddModal(false)
          }}
        />
      )}
    </>
  )
}

const Help = (): JSX.Element => {
  return (
    <div className={styles.right_text_box}>
      <Typography variant="body3" fontWeight="500">
        Title examples
      </Typography>
      <DynamicPadding desktop="18px" mobile="20px" />
      <ul className={styles.ul_wrapper}>
        <li>
          <Typography variant="body4">
            Build responsive WordPress site with booking/payment functionality
          </Typography>
        </li>
        <li>
          <Typography variant="body4">
            Graphic designer needed to design ad creative for multiple campaigns
          </Typography>
        </li>
        <li>
          <Typography variant="body4">
            Facebook ad specialist needed for product launch
          </Typography>
        </li>
      </ul>
    </div>
  )
}

interface CancelProps {
  onClick: () => void
}
const CancelReward = ({ onClick }: CancelProps): JSX.Element => {
  return (
    <div
      className={styles.item}
      onClick={() => {
        onClick()
      }}
    >
      <div>
        <Typography>Without A Reward</Typography>
      </div>
      <div>
        <Typography variant="body4">
          Negotiate all technical and financial questions in private messages
          and start the project.
        </Typography>
      </div>
    </div>
  )
}

interface AddModalProps {
  onClose: () => void
  onSave: () => void
}
const AddModal = ({ onClose, onSave }: AddModalProps): JSX.Element => {
  const [descriptionCounter, setDescriptionCounter] = useState<number>(0)
  const descriptionMaxSymbols = 3000

  const [dragItemNeedUpdate, setDragItemNeedUpdate] = useState<boolean>(false)
  const update = useUpdater()

  useEffect(() => {
    if (dragListMgr.count() === 0) update()
    dragListMgr.append({
      id: 1,
      body: (
        <>
          <InputCommon
            width="100%"
            padding="15.5px"
            placeholder={'Digital copy of game'}
            callback={() => {}}
          />
          <div className={styles.dropDownNumbers}>
            <DropdownNumber />
          </div>
          <div>
            <AppColor.close
              fill={AppColor.red}
              width={15}
              height={15}
              onClick={() => {
                dragListMgr.remove(1)
                setDragItemNeedUpdate(prev => !prev)
                update()
              }}
            />
          </div>
        </>
      ),
    })
    dragListMgr.append({
      id: 2,
      body: (
        <>
          <InputCommon
            width="100%"
            padding="15.5px"
            placeholder={'Your name in credits'}
            callback={() => {}}
          />
          <div className={styles.dropDownNumbers}>
            <DropdownNumber />
          </div>
          <div>
            <AppColor.close
              fill={AppColor.red}
              width={15}
              height={15}
              onClick={() => {
                dragListMgr.remove(2)
                setDragItemNeedUpdate(prev => !prev)
                update()
              }}
            />
          </div>
        </>
      ),
    })

    return () => {
      dragListMgr.clear()
    }
  }, [])

  return (
    <ModalCenterBasic
      desktopMinWidth="428px"
      desktopMaxWidth="428px"
      title={'Add a reward'}
      callbackClose={() => {
        onClose()
      }}
      bottomPartPadding={'30px'}
    >
      <div>
        <Typography>Image</Typography>
        <DynamicPadding desktop="20px" />
        <img src="/src/assets/images/advertisment.png" width={'328px'} />
        <DynamicPadding desktop="20px" />
      </div>

      <div className={styles.img}>
        <div className={styles.update_img}>
          <MyButtonBlack
            textTransform="uppercase"
            fontWeight="500"
            onClick={() => {}}
          >
            Update reward picture
          </MyButtonBlack>
          <AppColor.close width={15} height={15} fill={AppColor.red} />
        </div>
        <DynamicPadding desktop="20px" />
        <Typography fontWeight="400">
          Must be JPEG, PNG, or GIF and cannot exceed 10MB.
        </Typography>
      </div>

      <DynamicPadding desktop="20px" />

      <div>
        <Typography>Title</Typography>
        <DynamicPadding desktop="20px" />
        <InputCommon
          padding="15.5px"
          placeholder={'Easy start'}
          callback={() => {}}
        />
      </div>

      <DynamicPadding desktop="30px" />

      <div>
        <Typography>Description</Typography>
        <DynamicPadding desktop="20px" />
        <div className={styles.textarea}>
          <InputCommon
            padding="20px"
            placeholder={'Easy start'}
            boxShadowNone={false}
            multiLine={true}
            maxSymbolCount={descriptionMaxSymbols}
            type={'text'}
            callback={item => {
              setDescriptionCounter(item.length)
            }}
          />
          <DynamicPadding desktop="10px" />
          <div className={styles.description_counter}>
            <Typography color={AppColor.transparentBlack} variant="body4">
              {descriptionCounter}
            </Typography>
            <span>/</span>
            <Typography color={AppColor.transparentBlack} variant="body4">
              {descriptionMaxSymbols}
            </Typography>
          </div>
        </div>
      </div>

      <DynamicPadding desktop="30px" />

      <div>
        <Typography>Includes</Typography>
        <DynamicPadding desktop="30px" />
        <div className={styles.include_list}>
          <DragList
            afterDrop={() => {}}
            items={dragListMgr.getAll()}
            forceUpdate={dragItemNeedUpdate}
          />
        </div>
        <DynamicPadding desktop="30px" />
        <div>
          <Typography variant="body4" fontWeight="500" color={AppColor.orange}>
            Add Inclusion
          </Typography>
        </div>
      </div>

      <DynamicPadding desktop="30px" />

      <CountriesSection />
      <DynamicPadding desktop="30px" />

      <DeliverySection />
      <DynamicPadding desktop="30px" />

      <LeftSection />
      <DynamicPadding desktop="30px" />

      <div className={styles.add_footer}>
        <div className={styles.add_cancel}>
          <MyButtonTransparent
            fontWeight="500"
            textTransform="uppercase"
            onClick={() => {
              onClose()
            }}
          >
            Cancel
          </MyButtonTransparent>
        </div>
        <MyButtonOrange
          fontWeight="500"
          textTransform="uppercase"
          onClick={() => {
            onSave()
          }}
        >
          Save
        </MyButtonOrange>
      </div>
    </ModalCenterBasic>
  )
}

const DeliverySection = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Value')

  return (
    <div>
      <Typography>Delivery</Typography>
      <DynamicPadding desktop="30px" />

      <DropDownContext.Provider
        value={{
          isVisible,
          setVisible,
          selectedItem,
          setSelectedItem,
          setSelectedNode,
          selectedNode,
          placeholder,
          setPlaceholder,
        }}
      >
        <DropDownBase>
          <DropDownSimpleItem
            key={1}
            data={{
              id: 1,
              listNode: <span>35 days</span>,
            }}
          />
          <DropDownSimpleItem
            key={2}
            data={{
              id: 2,
              listNode: <span>25 days</span>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </div>
  )
}

const CountriesSection = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Country')

  return (
    <div>
      <Typography>Shipping</Typography>
      <DynamicPadding desktop="30px" />

      <DropDownContext.Provider
        value={{
          isVisible,
          setVisible,
          selectedItem,
          setSelectedItem,
          setSelectedNode,
          selectedNode,
          placeholder,
          setPlaceholder,
        }}
      >
        <DropDownBase>
          <div style={{ borderBottom: `1px solid #5151511a` }}>
            <InputCommon
              callback={() => {}}
              placeholder="Search"
              padding="20px 15px"
              rightPadding={15}
              borderRadius="0px"
              boxShadowNone={true}
              icon={<AppColor.search height={'16px'} />}
            />
          </div>
          <CountryItem
            data={{
              id: 1,
              listNode: 'USA',
              flag: <AppColor.usaFlag />,
            }}
          />
          <CountryItem
            data={{
              id: 2,
              listNode: 'Ukraine',
              flag: <AppColor.ukraineFlag />,
            }}
          />
          <CountryItem
            data={{
              id: 3,
              listNode: 'Francais',
              flag: <AppColor.franchFlag />,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </div>
  )
}

const LeftSection = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Value')

  return (
    <div>
      <Typography>Left</Typography>
      <DynamicPadding desktop="30px" />

      <DropDownContext.Provider
        value={{
          isVisible,
          setVisible,
          selectedItem,
          setSelectedItem,
          setSelectedNode,
          selectedNode,
          placeholder,
          setPlaceholder,
        }}
      >
        <DropDownBase>
          <DropDownSimpleItem
            data={{
              id: 1,
              listNode: 1000,
            }}
          />
          <DropDownSimpleItem
            data={{
              id: 2,
              listNode: 2000,
            }}
          />
          <DropDownSimpleItem
            data={{
              id: 3,
              listNode: 3000,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </div>
  )
}

interface SelectedRewardProps {
  onClick: () => void
}
const SelectedReward = ({ onClick }: SelectedRewardProps): JSX.Element => {
  return (
    <div
      className={styles.item}
      onClick={() => {
        onClick()
      }}
    >
      <div>
        <img src="/src/assets/images/advertisment.png" width={'328px'} />
        <DynamicPadding desktop="20px" />

        <Typography variant="body3">Easy start</Typography>
        <DynamicPadding desktop="20px" />

        <Typography variant="body4">
          Negotiate all technical and financial questions in private messages
          and start the project.
        </Typography>

        <DynamicPadding desktop="20px" />

        <TextDotted
          text={'Digital copy of game'}
          endNode={1}
          fontWeightEndText="500"
          startTextColor={AppColor.transparentBlack}
        />
        <DynamicPadding desktop="10px" />
        <TextDotted
          text={'Your name in credits'}
          endNode={1}
          fontWeightEndText="500"
          startTextColor={AppColor.transparentBlack}
        />
        <DynamicPadding desktop="10px" />
        <TextDotted
          text={'Shipping'}
          endNode={'Worldwide'}
          fontWeightEndText="500"
          startTextColor={AppColor.transparentBlack}
        />
        <DynamicPadding desktop="10px" />
        <TextDotted
          text={'Delivery'}
          endNode={'30 days'}
          fontWeightEndText="500"
          startTextColor={AppColor.transparentBlack}
        />
        <DynamicPadding desktop="10px" />
        <TextDotted
          text={'Left'}
          endNode={'14/1000'}
          fontWeightEndText="500"
          startTextColor={AppColor.transparentBlack}
        />
      </div>
    </div>
  )
}

export default Rewards
