declare namespace DropDown {
  export interface Item {
    id: number

    /** Show this node in list */
    listNode: React.Node
  }

  export interface CountryItem extends Item {
    flag: React.Node,
  }

  export interface UserItem extends Item {
    avatar: React.Node
    name: string
    position: string
    countryFlag: string
    isOnline: boolean
  }

  export interface Context {
    isVisible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    selectedItem: Item | null
    setSelectedItem: (Item) => void
    setSelectedNode: (item: React.Node) => void
    selectedNode: React.Node
    placeholder: React.Node
    setPlaceholder: (item: React.Node) => void
  }
}
