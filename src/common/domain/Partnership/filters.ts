class FiltersManager {
  private storage: number[] = []

  constructor() {
  }

  public add(id: number): void {
    this.storage.push(id)
  }

  public toggle(id: number): boolean {
    if (this.isInList(id)) {
      this.remove(id)
      return false
    }

    this.add(id)
    return true
  }

  public isInList(id: number): boolean {
    return this.storage.includes(id)
  }

  public getStorage(): number[] {
    return this.storage
  }

  public remove(id: number): void {
    this.storage = this.storage.filter((item) => {
      return item !== id
    })
  }

  public clear(): void {
    this.storage = []
  }
}

export default FiltersManager

/**
 * Tests
 */
if (import.meta.vitest) {
  const { expect, test, describe } = import.meta.vitest

  test("add", () => {
    const instance = new FiltersManager()
    instance.add(0)
    instance.add(1)

    expect(instance.getStorage()).toHaveLength(2)
  })

  test("remove", () => {
    const instance = new FiltersManager()
    instance.add(5)
    instance.add(6)
    instance.remove(6)
    expect(instance.getStorage()).toHaveLength(1)
    expect(instance.getStorage()[0]).toEqual(5)
  })

  test("clearList", () => {
    const instance = new FiltersManager()
    instance.add(5)
    instance.add(6)
    instance.clear()
    expect(instance.getStorage()).toHaveLength(0)
  })

  test("isList", () => {
    const instance = new FiltersManager()
    instance.add(10)
    instance.add(15)
    expect(instance.isInList(10)).toBeTruthy()
    expect(instance.isInList(20)).toBeFalsy()
  })

  test("toggle", () => {
    const instance = new FiltersManager()
    instance.add(10)
    instance.add(15)
    const actualAdded = instance.toggle(16)
    expect(instance.isInList(16)).toBeTruthy()
    expect(actualAdded).toBeTruthy()
    const actualRemoved = instance.toggle(10)
    expect(actualRemoved).toBeFalsy()
    expect(instance.getStorage()).toHaveLength(2)
  })
}
