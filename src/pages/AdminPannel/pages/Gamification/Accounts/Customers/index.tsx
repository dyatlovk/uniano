import AdminAccountsTable from '@common/components/ui/DetailsTable/variants/AdminAccounts/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import { fakeUserConstant } from '@common/models/user'
import FluidLayout from '@pages/AdminPannel/components/PageLayouts/Fluid/index'

const Customers = (): JSX.Element => {
  return (
    <FluidLayout
      titleOptions={{
        title: 'Customers accounts',
      }}
    >
      <DynamicPadding desktop="50px" />
      <SearchFilterBar />
      <DynamicPadding desktop="50px" />

      <AdminAccountsTable
        information={[
          {
            user: fakeUserConstant,
            categories: '2',
            type: 'Individual',
          },
        ]}
      />
    </FluidLayout>
  )
}

export default Customers
