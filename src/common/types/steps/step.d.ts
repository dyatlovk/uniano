declare namespace StepsResolver {
  export interface Collection {
    steps: Item[]
  }

  export interface Item {
    /** Item already resolved */
    isResolved: boolean

    /** Default title */
    title: string

    /** Changing default title to this if item is resolved */
    titleResolved?: string

    /** Show this node only in non resolving mode */
    actiondNode: any

    /** Show this node only in resolving mode */
    resolvingNode: any

    /** Item index */
    no: number

    /** Visibility in steps list. Temporarly hide or show item
     * For example: hide other steps while you are resolving something */
    isVisible: boolean

    /** Toggle between resolving and action mode */
    isActive: boolean

    /** If true this step alrady resolved and ready to close */
    isReadyToResolve?: boolean

    /** Completely deactivated but keeped in the list. This step always exclude from the list.
     * For example: You can activate/deactivate another step(s) with any conditions
    */
    isDisabled: boolean
  }
}
