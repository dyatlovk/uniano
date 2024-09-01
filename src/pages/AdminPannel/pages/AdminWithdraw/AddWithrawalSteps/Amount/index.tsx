import { useEffect } from 'react'

const AmountStep = ({ onReady }: Props): JSX.Element => {
  useEffect(() => {
    onReady('Amount')
  })
  return <>amount</>
}

interface Props {
  onReady: (title: string) => void
}

export default AmountStep
