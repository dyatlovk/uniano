import AnimateHeight from '@common/components/AnimateHeight/index'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import { DropdownCustomNodesCenter } from '../../pages/AdminPartnerships'
import styles from './style.module.scss'

interface Props {
  onClose: () => void
}
const WithdrawModal = ({ onClose }: Props): JSX.Element => {
  return (
    <ModalCenterBasic
      desktopMinWidth="800px"
      desktopMaxWidth="800px"
      bottomPartPadding="29px"
      callbackClose={() => {
        onClose()
      }}
      title="Withdraw settings"
    >
      <>
        <Typography textLineHeight="1" variant="body3" fontWeight="500">
          Payment system
        </Typography>
        <DynamicPadding desktop="30px" mobile="20px" />
        <DropdownCustom
          nodes={[
            <AppColor.visa />,
            <AppColor.visa />,
            <AppColor.visa />,
            <AppColor.visa />,
          ]}
        />
        <DynamicPadding desktop="20px" mobile="15px" />
        <div className="gap_20">
          <div className="gap_10">
            <Typography variant="body4">Active</Typography>
            <SwitchButton width="44px" height="24px" />
          </div>
          <div className="gap_10">
            <Typography variant="body4">Withdrawal with SMS</Typography>
            <SwitchButton width="44px" height="24px" />
          </div>
          <div className="gap_10">
            <Typography variant="body4">Withdrawal with PIN</Typography>
            <SwitchButton width="44px" height="24px" />
          </div>
        </div>
        <DynamicPadding desktop="20px" mobile="15px" />

        <div className={styles.grid_3_row}>
          <div>
            <Typography variant="body3" fontWeight="500">
              Min amount
            </Typography>
            <DynamicPadding desktop="22px" mobile="20px" />
            <InputCommon
              callback={() => {}}
              placeholder=""
              padding="15px 20px"
            />
          </div>
          <div>
            <Typography variant="body3" fontWeight="500">
              Max amount
            </Typography>
            <DynamicPadding desktop="22px" mobile="20px" />
            <InputCommon
              callback={() => {}}
              placeholder=""
              padding="15px 20px"
            />
          </div>
          <div>
            <Typography variant="body3" fontWeight="500">
              Max per day
            </Typography>
            <DynamicPadding desktop="22px" mobile="20px" />
            <InputCommon
              callback={() => {}}
              placeholder=""
              padding="15px 20px"
            />
          </div>
        </div>
        <DynamicPadding desktop="23px" mobile="20px" />

        <div className={styles.grid_2_row}>
          <div>
            <Typography variant="body3" fontWeight="500">
              Payment fee percent
            </Typography>
            <DynamicPadding desktop="23px" mobile="20px" />
            <InputCommon
              callback={() => {}}
              placeholder=""
              padding="15px 20px"
            />
          </div>
          <div>
            <Typography variant="body3" fontWeight="500">
              Payment fee amount
            </Typography>
            <DynamicPadding desktop="23px" mobile="20px" />
            <InputCommon
              callback={() => {}}
              placeholder=""
              padding="15px 20px"
            />
          </div>
        </div>

        <DynamicPadding desktop="23px" mobile="20px" />

        <div className={styles.grid_2_row}>
          <div>
            <Typography variant="body3" fontWeight="500">
              Time to withdraw
            </Typography>
            <DynamicPadding desktop="20px" mobile="20px" />
            <DropdownCustomNodesCenter
              nodes={Array.from({ length: 300 }, (_, index) => ({
                id: (index + 1).toString(),
                item: (
                  <Typography variant="body4">{index + 1} of 300</Typography>
                ),
              }))}
            />
          </div>
          <div>
            <Typography variant="body3" fontWeight="500">
              Withdrawal type
            </Typography>
            <DynamicPadding desktop="20px" mobile="20px" />
            <DropdownCustomNodesCenter
              nodes={Array.from({ length: 300 }, (_, index) => ({
                id: (index + 1).toString(),
                item: (
                  <Typography variant="body4">{index + 1} of 300</Typography>
                ),
              }))}
            />
          </div>
        </div>

        <DynamicPadding desktop="25px" mobile="20px" />

        <div className="flex_end">
          <MyButtonTransparent
            onClick={() => {}}
            fontWeight="500"
            textTransform="uppercase"
          >
            Cancel
          </MyButtonTransparent>
          <MyButtonOrange
            onClick={() => {}}
            fontWeight="500"
            textTransform="uppercase"
          >
            Save
          </MyButtonOrange>
        </div>
      </>
    </ModalCenterBasic>
  )
}

type DropdownCustomProps = {
  nodes: React.ReactNode[]
}
const DropdownCustom = ({ nodes }: DropdownCustomProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showDropdown, setShowDropdown] = useState(false)

  const borderStyles = {
    borderTopLeftRadius: showDropdown ? '20px' : '20px',
    borderTopRightRadius: showDropdown ? '20px' : '20px',
    borderBottomLeftRadius: showDropdown ? '0px' : '20px',
    borderBottomRightRadius: showDropdown ? '0px' : '20px',
  }

  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={styles.dropdown_wrapper_custom}
      style={{ position: 'relative' }}
    >
      <div
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
        style={{ ...borderStyles }}
        onClick={() => {
          setShowDropdown(prev => !prev)
        }}
        className={`${styles.custom_dropdown} cursor ${hovered || showDropdown ? styles.dropdown_hover : ''}`}
      >
        {nodes[activeIndex]}
        {showDropdown ? (
          <AppColor.chevronTop fill={AppColor.transparentBlack} />
        ) : (
          <AppColor.chevronBottom fill={AppColor.transparentBlack} />
        )}
      </div>

      <div
        style={
          !showDropdown
            ? {
                boxShadow: 'none',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
              }
            : {}
        }
        className={styles.abs_dropdown}
      >
        <AnimateHeight show={showDropdown}>
          <div className={styles.dropdown_styles_children}>
            {nodes.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setActiveIndex(index)
                    setShowDropdown(false)
                  }}
                  className={`${styles.dropdown_item} cursor`}
                >
                  {item}
                </div>
              )
            })}
          </div>
        </AnimateHeight>
      </div>
    </div>
  )
}

export default WithdrawModal
