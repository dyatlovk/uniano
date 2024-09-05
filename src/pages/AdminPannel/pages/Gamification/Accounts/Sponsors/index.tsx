import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import FluidLayout from '@pages/AdminPannel/components/PageLayouts/Fluid/index'

const Sponsors = (): JSX.Element => {
  return (
    <FluidLayout title="Sponsors accounts">
      <DynamicPadding desktop="50px" />
      <SearchFilterBar />
    </FluidLayout>
  )
}

export default Sponsors
