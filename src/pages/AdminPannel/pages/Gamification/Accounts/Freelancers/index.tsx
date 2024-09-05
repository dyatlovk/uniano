import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import FluidLayout from '@pages/AdminPannel/components/PageLayouts/Fluid/index'

const Freelancers = (): JSX.Element => {
  return (
    <FluidLayout title="Freelancers accounts">
      <DynamicPadding desktop="50px" />
      <SearchFilterBar />
    </FluidLayout>
  )
}

export default Freelancers
