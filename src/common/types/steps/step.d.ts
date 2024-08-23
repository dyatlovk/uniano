declare namespace StepsResolver {
  export interface Collection {
    steps: Item[]
  }

  export interface Item {
    isResolved: boolean
    title: string
    titleResolved?: string
    actiondNode: any
    resolvingNode: any
    no: number
    isVisible: boolean
    isActive: boolean
    isReadyToResolve?: boolean
  }
}
