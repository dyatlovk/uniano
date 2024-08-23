type Item = StepsResolver.Item
type Collection = StepsResolver.Collection

class StepsNegotiationCustomerModel {
  private items: Collection = { steps: [] }

  constructor(items?: Collection) {
    console.log("init")
    if (items) this.items = items
  }

  public getAll(): Collection {
    return this.items
  }

  public replace(items: Collection): void {
    this.items = items
  }

  public append(item: Item): void {
    this.items.steps.push(item)
  }

  public hideOther(no: number): void {
    this.items.steps.forEach(el => {
      if (el.no > no) {
        el.isVisible = false
      }
    })
  }

  public setVisibleAll(): void {
    this.items.steps.forEach(el => el.isVisible = true)
  }

  public setVisible(no: number, state: boolean): void {
    const item = this.findItemByNo(no)
    if (!item) return
    item.isVisible = state
  }

  public isLastItem(no: number): boolean {
    const item = this.findItemByNo(no)
    if (!item) return false

    const lastItem = this.items.steps.slice(-1)[0]
    return lastItem === item
  }

  public isFirstItem(no: number): boolean {
    const item = this.findItemByNo(no)
    if (!item) return false

    const lastItem = this.items.steps.slice(0)[0]
    return lastItem === item
  }

  public findItemByNo(no: number): Item | null {
    const found = this.items.steps.find(el => el.no === no)
    if (!found) return null

    return found
  }

  public count(): number {
    return this.items.steps.length
  }

  public findActive(): Item {
    const found = this.items.steps.find(el => el.isActive === true)
    if (!found) return this.items.steps[0]

    return found
  }

  public findVisible(): Item[] {
    return this.items.steps.filter(el => el.isVisible === true && el.isDisabled === false)
  }

  public deactivate(no: number): void {
    const item = this.findItemByNo(no)
    if (!item) return
    item.isActive = false
  }

  public activate(no: number): void {
    const item = this.findItemByNo(no)
    if (!item) return
    item.isActive = true

    this.items.steps.forEach(el => {
      if (el.no > no) {
        el.isActive = false
      }
    })
  }

  public setResolved(no: number, state: boolean = true): void {
    const item = this.findItemByNo(no)
    if (!item) return
    item.isResolved = state
  }

  public updateResolvedTitle(no: number, title: string): void {
    const item = this.findItemByNo(no)
    if (!item) return

    item.titleResolved = title
  }

  public setReadyToResolve(no: number, state: boolean = true): void {
    const item = this.findItemByNo(no)
    if (!item) return
    item.isReadyToResolve = state
  }

  public isReadyToResolve(no: number): boolean {
    const item = this.findItemByNo(no)
    if (!item) return false

    return item.isReadyToResolve
  }

  public findNext(no: number): Item | null {
    const item = this.findItemByNo(no)
    if (!item) return null
    const index = this.items.steps.indexOf(item)
    if (!this.items.steps[index + 1]) return null

    return this.items.steps[index + 1]
  }

  public findPrev(no: number): Item {
    const item = this.findItemByNo(no)
    if (!item) return null

    const index = this.items.steps.indexOf(item)
    if (!this.items.steps[index - 1]) return null

    return this.items.steps[index - 1]
  }

  public findFirst(): Item | null {
    if (this.count() === 0) return null
    const item = this.items.steps[0]

    return item
  }

  public findLast(): Item | null {
    if (this.count() === 0) return null
    const lastItem = this.items.steps.slice(-1)[0]
    if (!lastItem) return null

    return lastItem
  }

  public setDisabled(no: number, state: boolean): void {
    const item = this.findItemByNo(no)
    if (!item) return

    item.isDisabled = state
  }

  public resolveAndClose(no: number): void {
    this.setVisibleAll()
    this.deactivate(no)
    this.setResolved(no, true)
    this.setReadyToResolve(no, false)
  }

  public revertToDefaultAndClose(no: number): void {
    this.setReadyToResolve(no, false)
    this.setResolved(no, false)
    this.deactivate(no)
    this.setVisibleAll()
  }

  public cancelAndClose(no: number): void {
    this.setVisibleAll()
    this.setReadyToResolve(no, false)
    this.deactivate(no)
  }

  public setResolveMode(no: number): void {
    this.hideOther(no)
    this.activate(no)
  }

  public goTo(no: number): void {
    this.resolveAndClose(no)
    this.setResolveMode(no)
  }

  public goToNext(current: Item): void {
    this.resolveAndClose(current.no)
    const nextItem = this.findNext(current.no)
    if (!nextItem) return
    this.setResolveMode(nextItem.no)
  }

  public goToPrev(current: Item): void {
    this.resolveAndClose(current.no)
    const prevItem = this.findPrev(current.no)
    if (!prevItem) return
    this.setResolveMode(prevItem.no)
  }
}

export default StepsNegotiationCustomerModel


/**
 * Tests
 */
if (import.meta.vitest) {
  const { expect, test, describe } = import.meta.vitest

  describe("position", () => {
    const instance = new StepsNegotiationCustomerModel({
      steps: [
        {
          no: 1,
          isVisible: true,
          title: 'Test 1',
          isResolved: false,
          actiondNode: "node",
          resolvingNode: "node",
          isActive: false,
          isDisabled: false,
        },
        {
          no: 2,
          isVisible: true,
          title: 'Test 1',
          isResolved: false,
          actiondNode: "node",
          resolvingNode: "node",
          isActive: false,
          isDisabled: false,
        }
      ]
    })
    test("isLastItem", () => {
      expect(instance.isLastItem(2)).toBeTruthy()
      expect(instance.isLastItem(1)).toBeFalsy()
    })
    test("isFirstItem", () => {
      expect(instance.isFirstItem(2)).toBeFalsy()
      expect(instance.isFirstItem(1)).toBeTruthy()
    })
    test("findNext", () => {
      const actual = instance.findNext(1)
      expect(2).toEqual(actual.no)
    })
    test("findPrev", () => {
      const actual = instance.findPrev(2)
      expect(1).toEqual(actual.no)
    })
  })

  describe("hide", () => {
    test("ok", () => {
      const instance = new StepsNegotiationCustomerModel({
        steps: [
          {
            no: 1,
            isVisible: true,
            title: 'Test 1',
            isResolved: false,
            actiondNode: "node",
            resolvingNode: "node",
            isActive: false,
            isDisabled: false,
          },
          {
            no: 2,
            isVisible: true,
            title: 'Test 1',
            isResolved: false,
            actiondNode: "node",
            resolvingNode: "node",
            isActive: false,
            isDisabled: false,
          }
        ]
      })
      instance.hideOther(1)
      expect(instance.findItemByNo(1).isVisible).toBeTruthy()
      expect(instance.findItemByNo(2).isVisible).toBeFalsy()
    })
  })
}
