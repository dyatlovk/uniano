declare namespace DetailsTable {
  export namespace Filter {
    export interface Group {
      title: string
      items: Item[]
    }

    export interface Item {
      title: string
    }
  }
}
