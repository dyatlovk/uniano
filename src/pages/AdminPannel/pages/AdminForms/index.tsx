import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DarkBox from '@common/components/ui/DarkBox/index'
import DetailsTableFormsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableFormsAdmin/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index'
import ModalButtonsSetup from '@common/components/ui/ModalButtons/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import Preloader from '@common/components/ui/Preloader/index'
import RadioButton from '@common/components/ui/RadioButton/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState, useTransition } from 'react'
import {
  ButtonsRemoveList,
  DropdownCustomNodesCenter,
  SkillLevel,
  StarItem,
  YesNoTable
} from '../AdminPartnerships'
import styles from './style.module.scss'

const AdminForms = () => {
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false)
  const [selectedVariant, setSelectedVariant] = useState(1)
  const [languages, setLanguages] = useState<string[]>([])
  const [locations, setLocations] = useState<string[]>([])
  const [filtersOther, setFiltersOther] = useState<string[]>([])
  const [isSettingsModalPending, startSettingsModalTransition] = useTransition()

  return (
    <div className={styles.wrapper}>
      <div className={styles.mobile_padding}>
        <DynamicPadding />

        <div className="center_mobile_text">
          <div className="gap_10">
            <div>
              <Typography
                variant="titleBig"
                fontWeight="600"
                textTransform="uppercase"
              >
                Logo design specification forms
              </Typography>
            </div>
            <div className={styles.orange}>
              <AppColor.plus stroke="white" width={'fit-content'} />
            </div>
          </div>
        </div>

        <DynamicPadding />

        <div className={styles.top_part}>
          <div className={styles.buttons_top}>
            <div className="gap_10">
              <Typography variant="body4">Create</Typography>
              <SwitchButton startValue={true} width="44px" height="24px" />
            </div>
            <div className="gap_10">
              <Typography variant="body4">Active</Typography>
              <SwitchButton startValue={true} width="44px" height="24px" />
            </div>
          </div>

          <div
            className="cursor"
            onClick={() => {
              startSettingsModalTransition(() => {
                setShowSettingsModal(true)
              })
            }}
          >
            <Typography
              variant="body4"
              fontWeight="500"
              textTransform="uppercase"
              color={AppColor.transparentBlack}
            >
              Form settings
            </Typography>
          </div>
        </div>

        <DynamicPadding />

        <SearchFilterBar date="10/29/22 - 11/29/22" exportIcon={true} />

        <DynamicPadding />

        <DetailsTableFormsAdmin
          information={[
            {
              user: fakeUserConstant,
              date: 'Feb 26, 2021 16:32 ',
              category: 'Logo design',
              creactor: fakeUserConstant,
              status: 'Active',
            },
          ]}
        />
        <DynamicPadding />
      </div>
      {isSettingsModalPending && <Preloader />}
      {showSettingsModal && (
        <ModalCenterBasic
          desktopMinWidth="800px"
          bottomPartPadding="30px"
          callbackClose={() => {
            setShowSettingsModal(false)
          }}
          title="Form settings"
          nodeAfterTitle={
            <div style={{ width: '100%' }} className="gap_20">
              <DarkBox
                triangleDown={true}
                fonstSize="13px"
                text={'Logo design'.toUpperCase()}
              />
              <div className="gap_10">
                <Typography variant="body4">Create</Typography>
                <SwitchButton startValue={true} width="44px" height="24px" />
              </div>
              <div className="gap_10">
                <Typography variant="body4">Active</Typography>
                <SwitchButton startValue={true} width="44px" height="24px" />
              </div>
            </div>
          }
        >
          <>
            <div className={styles.top_grid_4}>
              <div>
                <Typography variant="body3" fontWeight="500">
                  Active services
                </Typography>
                <DynamicPadding desktop="30px" mobile="20px" />
                <DropdownCustomNodesCenter
                  nodes={Array.from({ length: 300 }, (_, index) => ({
                    id: (index + 1).toString(),
                    item: (
                      <Typography variant="body4">
                        {index + 1} of 300
                      </Typography>
                    ),
                  }))}
                />
              </div>
              <div>
                <Typography variant="body3" fontWeight="500">
                  Positive reviews
                </Typography>
                <DynamicPadding desktop="30px" mobile="20px" />
                <DropdownCustomNodesCenter
                  nodes={Array.from({ length: 10 }, (_, index) => ({
                    id: (index + 1).toString(),
                    item: <StarItem percent={(index + 1) * 10} />,
                  }))}
                />
              </div>
              <div>
                <Typography variant="body3" fontWeight="500">
                  Skill level
                </Typography>
                <DynamicPadding desktop="30px" mobile="20px" />
                <DropdownCustomNodesCenter
                  nodes={Array.from({ length: 5 }, (_, index) => ({
                    id: (index + 1).toString(),
                    item: <SkillLevel lvl={index + 1} />,
                  }))}
                />
              </div>
              <div>
                <Typography variant="body3" fontWeight="500">
                  Account level
                </Typography>
                <DynamicPadding desktop="30px" mobile="20px" />
                <DropdownCustomNodesCenter
                  nodes={Array.from({ length: 5 }, (_, index) => ({
                    id: (index + 1).toString(),
                    item: (
                      <Typography variant="body4">
                        idk what should be written here
                      </Typography>
                    ),
                  }))}
                />
              </div>
            </div>

            <DynamicPadding desktop="30px" mobile="20px" />

            <Typography textLineHeight="1" variant="body3" fontWeight="500">
              Location
            </Typography>

            <DynamicPadding desktop="30px" mobile="20px" />

            <InputDropdown
              dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']}
              initText="Add regions, countries or cities"
              labelIcon={<></>}
              marginLeft={true}
              padding="13px 20px"
              callback={item => {
                setLocations(prev => [...prev, item])
              }}
            />

            <DynamicPadding desktop="20px" mobile="15px" />

            <ButtonsRemoveList buttons={locations} />

            <DynamicPadding desktop="30px" mobile="20px" />

            <Typography textLineHeight="1" variant="body3" fontWeight="500">
              Languages{' '}
            </Typography>

            <DynamicPadding desktop="30px" mobile="20px" />

            <InputDropdown
              dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']}
              initText="Add languages"
              labelIcon={<></>}
              marginLeft={true}
              padding="13px 20px"
              callback={item => {
                setLanguages(prev => [...prev, item])
              }}
            />

            <DynamicPadding desktop="20px" mobile="15px" />

            <ButtonsRemoveList buttons={languages} />

            <DynamicPadding desktop="30px" mobile="20px" />

            <Typography textLineHeight="1" variant="body3" fontWeight="500">
              Other filters
            </Typography>

            <DynamicPadding desktop="30px" mobile="20px" />

            <InputDropdown
              dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']}
              initText="Add any filter"
              labelIcon={<></>}
              marginLeft={true}
              padding="13px 20px"
              callback={item => {
                setFiltersOther(prev => [...prev, item])
              }}
            />

            <DynamicPadding desktop="20px" mobile="15px" />

            <ButtonsRemoveList buttons={filtersOther} />

            <DynamicPadding desktop="30px" mobile="20px" />

            <YesNoTable
              title="Modules"
              items={[
                {
                  text: 'Images',
                  initValue: true,
                },
                {
                  text: 'Description',
                  initValue: true,
                },
                {
                  text: 'Freelancer info',
                  initValue: true,
                },
                {
                  text: 'Reviews',
                  initValue: true,
                },
                {
                  text: 'FAQ',
                  initValue: true,
                },
                {
                  text: 'Sponsorships',
                  initValue: true,
                },
                {
                  text: 'Promo',
                  initValue: true,
                },
                {
                  text: 'Specification forms',
                  initValue: true,
                },
                {
                  text: 'Custom specification text',
                  initValue: true,
                },
                {
                  text: 'Documents',
                  initValue: true,
                },
              ]}
            />

            <DynamicPadding desktop="30px" mobile="20px" />

            <Typography textLineHeight="1" variant="body3" fontWeight="500">
              Affect on
            </Typography>

            <DynamicPadding desktop="30px" mobile="20px" />

            <div className="gap_20">
              <RadioButton
                activeSelection={selectedVariant == 1}
                callback={item => {
                  setSelectedVariant(item)
                }}
                indexItem={1}
                text=" New programs"
              />

              <RadioButton
                activeSelection={selectedVariant == 2}
                callback={item => {
                  setSelectedVariant(item)
                }}
                indexItem={2}
                text="  All programs          "
              />
            </div>

            <DynamicPadding desktop="30px" mobile="20px" />
            <Typography textLineHeight="1" variant="body3" fontWeight="500">
              Copy to other categories
            </Typography>

            <DynamicPadding desktop="30px" mobile="20px" />

            <MyButtonOrange
              fontWeight="500"
              textTransform="uppercase"
              onClick={() => {}}
            >
              <div className={styles.white_box}>
                <AppColor.plus stroke={AppColor.orange} />
              </div>
              Add category
            </MyButtonOrange>

            <DynamicPadding desktop="30px" mobile="20px" />

            <ModalButtonsSetup
              onCancel={() => {
                setShowSettingsModal(false)
              }}
              onSave={() => {
                setShowSettingsModal(false)
              }}
            />
          </>
        </ModalCenterBasic>
      )}
    </div>
  )
}

type TopItemProps = {
  icon: React.ReactNode
  title: string
  activeSelect: string
  callbackSelect: (item: string) => void
}
const TopItem = ({
  icon,
  title,
  activeSelect,
  callbackSelect,
}: TopItemProps) => {
  const isActive = activeSelect == title
  return (
    <div
      onClick={() => {
        if (!isActive) {
          callbackSelect(title)
        }
      }}
      className="gap_10"
    >
      {icon}
      <Typography variant="body4" fontWeight={isActive ? '500' : '400'}>
        {title}
      </Typography>
    </div>
  )
}

const OptionEndNode = ({}) => {
  return (
    <div className="gap_10">
      <AppColor.close width={'16px'} height={'16px'} fill={AppColor.red} />
      <AppColor.edit width={'16px'} height={'16px'} fill={AppColor.text} />
    </div>
  )
}

export default AdminForms
