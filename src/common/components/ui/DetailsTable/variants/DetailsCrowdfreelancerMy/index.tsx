import DetailsTable from '../..'
import UserAvatar from '../../../UserAvatar'
import styles from './style.module.scss'
import { useState } from 'react'
import Typography from '@common/components/ui/Typography/Typography'
import DynamicPadding from '../../../DynamicPadding'
import AppColor from '@common/styles/variables-static'
import HorizontalLine from '../../../Lines/HorizontalLine'
import { fakeUserConstant } from '@common/models/user'
import SizeBox from '../../../SizeBox'
import DropDownCommon from '../../../Dropdown/DropdownCommon'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import InputBorderText from '../../../inputs/InputBorderText'
import InputBorderTextDropdown from '../../../inputs/InputBorderTextDropdown'
type DetailCrowdfreelanceMyProps = {
  informationTable: DetailCrowdfreelanceMyItem[]
  informationDropdown: DropdownMyProgramsItemProps[]
}

const groupFilters = {
  Programs: ['All', 'Active', 'Pending'],
  Projects: ['All', 'Progress', 'Pending', 'Completed', 'Canceled'],
}

export type DetailCrowdfreelanceMyItem = {
  page: number
}
const DetailCrowdfreelanceMy = ({
  informationTable,
  informationDropdown,
}: DetailCrowdfreelanceMyProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const currentItem = informationTable[currentPage - 1]
  const currentDropdownItem = informationDropdown[currentPage - 1]
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<string>('')

  function findActiveFilter(key: string): string[] {
    if (key.length === 0) return []
    return groupFilters[key]
  }

  function findAllFiltersTitle(): string[] {
    return Object.keys(groupFilters)
  }

  return (
    <DetailsTable
      projectsCount="1"
      callbackNav={item => {
        setCurrentPage(item)
      }}
      filters={findActiveFilter(selectedGroupFilter)}
      page={currentPage}
      removeNavBar={true}
      groupDropdown={
        <DropDownCommon
          items={findAllFiltersTitle()}
          callback={(item: string) => {
            setSelectedGroupFilter(item)
          }}
        />
      }
      dropdownNode={
        currentDropdownItem != null ? (
          <div>
            <DropdownMyProgramsItem page={currentDropdownItem.page} />
          </div>
        ) : null
      }
      details={
        currentItem != null
          ? [
              {
                title: 'Campaign',
                child: (
                  <UserAvatar
                    url={fakeUserConstant.image}
                    width="30px"
                    height="30px"
                    variant="row"
                    active={true}
                    preventMobileNone={true}
                    name={'Open CL - use my GPU to optimise / backtest '}
                  />
                ),
              },
              {
                title: 'Date',
                child: (
                  <Typography variant="body4">Feb 26, 2021 16:32 </Typography>
                ),
              },
              {
                title: 'Category',
                child: (
                  <div className={styles.category_wrapper}>
                    <Typography
                      color="white"
                      textTransform="uppercase"
                      variant="body4"
                    >
                      Logo design
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'Sponsored',
                child: (
                  <div style={{ alignItems: 'baseline' }} className="gap_5">
                    <Typography variant="body4">$20 000</Typography>
                    <Typography
                      variant="body5"
                      color={AppColor.transparentBlack}
                    >
                      of $50 000{' '}
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'Lifetime',
                child: <Typography variant="body4">25 days left</Typography>,
              },
            ]
          : [
              {
                title: 'Order',
                child: (
                  <>
                    <DynamicPadding desktop="30px" mobile="10px" />
                  </>
                ),
              },
              {
                title: 'Date',
                child: <></>,
              },
              {
                title: 'Category',
                child: <></>,
              },
              {
                title: 'Sponsored',
                child: <></>,
              },
              {
                title: 'Lifetime',
                child: <></>,
              },
            ]
      }
    />
  )
}

type DropdownMyProgramsItemProps = {
  page: number
}

const DropdownMyProgramsItem = ({}: DropdownMyProgramsItemProps) => {
  const [showAddressModal, setAddressModal] = useState<boolean>(false)

  return (
    <div className={styles.dropdown_wrapper}>
      <DynamicPadding desktop="25px" mobile="20px" />
      <div className={styles.dropdown_content}>
        <AppColor.openInBrowser />
        <DropdownText title="ID" text={'#352'} />
        <DropdownText
          text=""
          title="Customer"
          node={
            <div>
              <SizeBox height="3px" />
              <UserAvatar
                height="22px"
                width="22px"
                preventMobileNone={true}
                url={fakeUserConstant.image}
                name="user35"
                active={true}
              />
            </div>
          }
        />
        <DropdownText
          text=""
          title="Sponsor"
          node={
            <div>
              <SizeBox height="3px" />
              <UserAvatar
                height="22px"
                width="22px"
                preventMobileNone={true}
                url={fakeUserConstant.image}
                name="user35"
                active={true}
              />
            </div>
          }
        />

        <DropdownText title="Reward" text={'Alpha unit'} />
        <DropdownText
          text=""
          title="Sponsored"
          node={
            <div>
              <SizeBox height="5px" />
              <div className="gap_5">
                <Typography variant="body4" fontWeight="500" textLineHeight="1">
                  $300
                </Typography>
                <AppColor.repeat />
              </div>
            </div>
          }
        />
        <DropdownText
          title="Shipping"
          text={''}
          node={
            <div>
              <SizeBox height="5px" />
              <div style={{ alignItems: 'baseline' }} className="gap_5">
                <AppColor.UkraineFlagIcon width={'22px'} height={'16px'} />
                <Typography variant="body4" fontWeight="500" textLineHeight="1">
                  Ukraine
                </Typography>
                <div
                  onClick={() => {
                    setAddressModal(true)
                  }}
                  className={styles.hoverable}
                >
                  <Typography
                    variant="body5"
                    color={AppColor.transparentBlack}
                    fontWeight="500"
                    textLineHeight="1"
                  >
                    (Full Adress)
                  </Typography>
                </div>
              </div>
            </div>
          }
        />
        <DropdownText title="Delivery" text={'3 days'} />
        <DropdownText
          title="Status"
          text={'Progress'}
          color={AppColor.orange}
        />
      </div>
      <DynamicPadding desktop="30px" mobile="20px" />
      <HorizontalLine />
      {showAddressModal && (
        <AddressModal
          onClose={() => {
            setAddressModal(false)
          }}
        />
      )}
    </div>
  )
}

const DropdownText = ({
  text,
  title,
  node,
  color,
}: {
  text: string
  title: string
  node?: React.ReactNode
  color?: string
}) => {
  return (
    <div className={styles.dropdown_text}>
      <Typography variant="body5" color={AppColor.transparentBlack}>
        {title}
      </Typography>
      {node == null && <SizeBox height="8px" />}
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        {node}

        <Typography
          textLineHeight="1"
          color={color ? color : AppColor.text}
          variant="body4"
          fontWeight="500"
        >
          {text}
        </Typography>
      </div>
    </div>
  )
}

interface AddressModalProps {
  onClose: () => void
}
const AddressModal = ({ onClose }: AddressModalProps): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '', // You can set a default value
    stateProvince: '', // You can set a default value
    addressLine1: '',
    addressLine2: '',
    city: '',
    postCode: '',
  })

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleCallback = (field, item) => {
    updateField(field, item)
  }

  return (
    <ModalCenterBasic
      title={'Full address'}
      desktopMinWidth="690px"
      desktopMaxWidth="690px"
      callbackClose={onClose}
      bottomPartPadding={'30px'}
    >
      <div className={styles.address}>
        <InputBorderText
          borderText={'First Name'}
          placeholderText={''}
          labelIcon={
            <AppColor.passportSvg
              fill={formData.firstName != '' ? AppColor.text : AppColor.grey}
              stroke={formData.firstName != '' ? AppColor.text : AppColor.grey}
            />
          }
        />
        <InputBorderText
          borderText={'Last Name'}
          placeholderText={''}
          labelIcon={
            <AppColor.passportSvg
              fill={formData.lastName != '' ? AppColor.text : AppColor.grey}
              stroke={formData.lastName != '' ? AppColor.text : AppColor.grey}
            />
          }
        />
        <InputBorderTextDropdown
          initText="Select country"
          labelIcon={
            <AppColor.earth
              fill={formData.country != '' ? AppColor.text : AppColor.grey}
            />
          }
          borderText="Country"
          searchField={true}
          dropdownVariantsNodes={[
            {
              icon: <AppColor.usaFlag />,
              text: 'USA',
            },
            {
              icon: <AppColor.ukFlag />,
              text: 'United Kingdom',
            },
            {
              icon: <AppColor.ukraineFlag />,
              text: 'Ukrainian',
            },
            {
              icon: <AppColor.franchFlag />,
              text: 'French',
            },
            {
              icon: <AppColor.spanishFlag />,
              text: 'Spanish',
            },
          ]}
          callback={item => {
            handleCallback('country', item)
          }}
          isActive={formData.country.length > 0}
        />
        <InputBorderTextDropdown
          initText="Select State/Province"
          labelIcon={
            <AppColor.terrainMap
              fill={
                formData.stateProvince != '' ? AppColor.text : AppColor.grey
              }
            />
          }
          isActive={formData.stateProvince.length > 0}
          borderText="State/Province"
          dropdownVariants={['aaaa', 'bbbb', 'cccc', 'dddd']}
          callback={item => {
            handleCallback('stateProvince', item)
          }}
        />
        <InputBorderText
          borderText={'Address Line 1'}
          placeholderText={''}
          labelIcon={
            <AppColor.location
              fill={formData.addressLine1 != '' ? AppColor.text : AppColor.grey}
            />
          }
        />
        <InputBorderText
          borderText={'Address Line 2'}
          placeholderText={''}
          labelIcon={
            <AppColor.location
              fill={formData.addressLine2 != '' ? AppColor.text : AppColor.grey}
            />
          }
        />
        <InputBorderText
          borderText="City"
          labelIcon={
            <AppColor.buildings
              fill={formData.city != '' ? AppColor.text : AppColor.grey}
            />
          }
          callback={item => {
            handleCallback('city', item)
          }}
          placeholderText=""
        />
        <InputBorderText
          borderText="Post Code"
          labelIcon={
            <AppColor.nameplate
              fill={formData.postCode != '' ? AppColor.text : AppColor.grey}
            />
          }
          callback={item => {
            handleCallback('postCode', item)
          }}
          placeholderText=""
        />
      </div>
      <DynamicPadding desktop="30px" mobile="20px" />
      <div className={styles.address_footer}>
        <MyButtonOrange
          textTransform="uppercase"
          fontWeight="500"
          padding="7.5px 16px"
          onClick={onClose}
        >
          Close
        </MyButtonOrange>
      </div>
    </ModalCenterBasic>
  )
}

export default DetailCrowdfreelanceMy
