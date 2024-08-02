class FilterSectionManager {
  private storage: PartnerShip.FilterSection[] = []

  constructor() {
  }

  public add(section: string, id: string, label: string): void {
    const isExists = this.getSection(section)
    if (!isExists) {
      this.storage.push({ label: section, items: [{ label: label, uuid: id }] })
      return
    }

    const index = this.storage.indexOf(isExists)
    this.storage[index].items.push({ label: label, uuid: id })
  }

  public remove(section: string, id: string): void {
    const isExists = this.getSection(section)
    if (!isExists) return

    const sectionForRemove = this.storage.filter(el => {
      const item = el.items.find(i => i.uuid === id)
      return el.label === section && el.items.includes(item)
    })
    if (sectionForRemove.length === 0) return

    const index = this.storage.indexOf(sectionForRemove[0])
    this.storage[index].items = sectionForRemove[0].items.filter(el => el.uuid !== id)

    this.cleanEmptySections()
  }

  /**
   * Toggle tag in storage
   * @returns {boolean} Result
   */
  public toggle(section: string, id: string, label?: string): boolean {
    const isPresent = this.isPresent(id)
    if (isPresent) {
      this.remove(section, id)
      return true
    }

    if (label.length === 0) return false

    this.add(section, id, label)
    return true
  }

  public cleanEmptySections(): void {
    this.storage = this.storage.filter(el => el.items.length !== 0)
  }

  public getStorage(): PartnerShip.FilterSection[] {
    return this.storage
  }

  public clear(): void {
    this.storage = []
  }

  public total(): number {
    return this.storage.length
  }

  public getSection(label: string): PartnerShip.FilterSection | null {
    const found = this.storage.find((el: PartnerShip.FilterSection) => {
      return el.label === label
    })

    if (!found) return null

    return found
  }

  public isPresent(id: string): boolean {
    const found = this.storage.find(item => {
      return item.items.find(el => el.uuid === id)
    })
    return found !== undefined
  }
}

export default FilterSectionManager

/**
 * Tests
 */
if (import.meta.vitest) {
  const { expect, test, describe } = import.meta.vitest

  describe("sections", () => {
    test("found", () => {
      const instance = new FilterSectionManager()
      instance.add("test", crypto.randomUUID(), "tagLabel")
      instance.add("test", crypto.randomUUID(), "tagLabel2")
      const actual = instance.getSection("test")
      expect(actual.label).toEqual("test")
    })
    test("notFound", () => {
      const instance = new FilterSectionManager()
      instance.add("test", crypto.randomUUID(), "tagLabel")
      const actual = instance.getSection("notFound")
      expect(actual).toBeNull()
    })
    test("removeEmpty", () => {
      const instance = new FilterSectionManager()
      const id = crypto.randomUUID()
      instance.add("test", id, "tagLabel")
      instance.remove("test", id)
      const actual = instance.getSection("test")
      expect(actual).toBeNull()
    })
  })

  describe("storage", () => {
    test("add", () => {
      const instance = new FilterSectionManager()
      instance.add("test", crypto.randomUUID(), "tagLabel")
      instance.add("test", crypto.randomUUID(), "tagLabel")
      instance.add("test2", crypto.randomUUID(), "tagLabel")
      expect(instance.getStorage().length).toEqual(2)
    })
    test("remove", () => {
      const instance = new FilterSectionManager()
      const id = crypto.randomUUID()
      instance.add("test", id, "tagLabel")
      instance.add("test", crypto.randomUUID(), "tagLabel2")
      instance.add("test2", crypto.randomUUID(), "tagLabel2")
      expect(instance.getStorage().length).toEqual(2)
      instance.remove("test", id)
      const actual = instance.getSection("test")
      expect(actual.items.length).toEqual(1)
    })
    test("toggle", () => {
      const instance = new FilterSectionManager()
      const id = crypto.randomUUID()
      instance.add("test", id, "tagLabel")
      instance.toggle("test", id)
      expect(instance.total()).toEqual(0)
      instance.toggle("test", id, "testLabel")
      expect(instance.total()).toEqual(1)
    })
  })

  describe("items", () => {
    test("isIdPresent", () => {
      const instance = new FilterSectionManager()
      const id = crypto.randomUUID()
      instance.add("test", id, "tagLabel")
      instance.add("test", crypto.randomUUID(), "tagLabel2")
      instance.add("test2", crypto.randomUUID(), "tagLabel2")
      const actual = instance.isPresent(id)
      expect(actual).toBeTruthy()
    })
  })
}
