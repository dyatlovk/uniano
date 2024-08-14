import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import InputBorderText from '../../inputs/InputBorderText'
import InputBorderTextDropdown from '../../inputs/InputBorderTextDropdown'
import styles from './style.module.scss'

interface Props {

}

const FullAddress = (): JSX.Element => {
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

  const handleCallback = (field: string, item: string) => {
    setFormData({ ...formData, [field]: item })
  }

  return (
    <>
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
    </>
  )
}

export default FullAddress
