import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DarkBox from '@common/components/ui/DarkBox/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index'
import ModalButtonsSetup from '@common/components/ui/ModalButtons/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import RadioButton from '@common/components/ui/RadioButton/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import {
  ButtonsRemoveList,
  DropdownCustomNodesCenter,
  SkillLevel,
  StarItem,
  TableChooseDropdown,
  YesNoTable,
} from '../../pages/AdminPartnerships'
import styles from './style.module.scss'

interface Props {
  onCancel: () => void
  onSave: () => void
  onClose: () => void
}
const PartnerShipModal = ({
  onCancel,
  onSave,
  onClose,
}: Props): JSX.Element => {
  const [selectedVariant, setSelectedVariant] = useState<number>(1)
  const [locations, setLocations] = useState<string[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  const [filtersOther, setFiltersOther] = useState<string[]>([])

  return (
    <>
      <ModalCenterBasic
        desktopMinWidth="800px"
        bottomPartPadding="30px"
        callbackClose={() => {
          onClose()
        }}
        title="Partnership settings"
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
                Active programs
              </Typography>
              <DynamicPadding desktop="30px" mobile="20px" />
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
                text: 'Conditions',
                initValue: true,
              },
              {
                text: 'Tools',
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
            ]}
          />

          <DynamicPadding desktop="30px" mobile="20px" />

          <YesNoTable
            title="Negotiation"
            items={[
              {
                text: 'Services',
                initValue: true,
              },
              {
                text: 'Orders',
                initValue: true,
              },
              {
                text: 'Subscriptions',
                initValue: true,
              },
              {
                text: 'Referral rate',
                initValue: true,
              },
              {
                text: 'Access to chat with customers',
                initValue: true,
              },
              {
                text: 'Access to “Selection” stage',
                initValue: true,
              },
              {
                text: 'Access to “Negotiation” stage',
                initValue: true,
              },
              {
                text: 'Access to “Progress” stage',
                initValue: true,
              },
              {
                text: 'Access to “Completed” stage',
                initValue: true,
              },
            ]}
          />

          <DynamicPadding desktop="30px" mobile="20px" />

          <TableChooseDropdown
            title="Conditions"
            items={[
              {
                items: [
                  '10%',
                  '20%',
                  '30%',
                  '40%',
                  '50%',
                  '60%',
                  '70%',
                  '80%',
                  '90%',
                  '100%',
                ],
                text: 'Manager fee',
              },
              {
                items: ['$10', '$20', '$30', '$40', '$50'],
                text: 'Beginner skill level low price',
              },
              {
                items: ['$40', '$50', '$60', '$70', '$80'],
                text: 'Junior skill level low price',
              },
              {
                items: ['$70', '$80', '$90', '$100', '$110'],
                text: 'Middle skill level low price',
              },
              {
                items: ['$100', '$150', '$200', '$250', '$300'],
                text: 'Senior skill level low price',
              },
              {
                items: ['$150', '$200', '$250', '$300', '$350'],
                text: 'Lead skill level low price',
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
              text="  All programs"
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

          <ModalButtonsSetup onCancel={onCancel} onSave={onSave} />
        </>
      </ModalCenterBasic>
    </>
  )
}

export default PartnerShipModal
