class FreelancerProjectsModel {

  private storage: PartnerShip.FreelancerProjectState[] = []

  constructor(states: PartnerShip.FreelancerProjectState[]) {
    this.storage = states
  }

  public static makeFakeData(): PartnerShip.FreelancerProjectState[] {
    return [
      {
        label: "Progress",
        color: "#219653"
      },
      {
        label: "Completed",
        color: "#F4A72A"
      }
    ]
  }

  public getAll(): PartnerShip.FreelancerProjectState[] {
    return this.storage
  }

  public findByLabel(id: string): PartnerShip.FreelancerProjectState | null {
    const found = this.storage.find(el => el.label === id)
    if (!found) return null

    return found
  }

  public getProgress(state: string): number {
    const current = this.findByLabel(state)
    if (!current) return 0

    const index = this.storage.indexOf(current) + 1
    const total = this.getTotal()

    if (index === total) return 100
    if (index === 1) return Math.floor(100 / total)

    return Math.floor(index * 100 / total)
  }

  public getTotal(): number {
    return this.storage.length
  }
}

export default FreelancerProjectsModel


/**
 * Tests
 */
if (import.meta.vitest) {
  const { expect, test, describe } = import.meta.vitest

  const fakeData: PartnerShip.FreelancerProjectState[] = [
    {
      label: "Progress",
      color: "#219653"
    },
    {
      label: "Selection",
      color: "#F4A72A"
    },
    {
      label: "Completed",
      color: "#F4A72A"
    }
  ]

  describe("progress", () => {
    test("progress100", () => {
      const instance = new FreelancerProjectsModel(fakeData)
      const actual = instance.getProgress("Completed")
      expect(actual).toEqual(100)
    })
    test("progressStart", () => {
      const instance = new FreelancerProjectsModel(fakeData)
      const actual = instance.getProgress("Progress")
      expect(actual).toEqual(33)
    })
    test("progressMid", () => {
      const instance = new FreelancerProjectsModel(fakeData)
      const actual = instance.getProgress("Selection")
      expect(actual).toEqual(66)
    })
  })

  describe("find", () => {
    test("ok", () => {
      const instance = new FreelancerProjectsModel(fakeData)
      const actual = instance.findByLabel("Selection")
      const expected = fakeData[1]
      expect(actual).toEqual(expected)
    })
    test("notFound", () => {
      const instance = new FreelancerProjectsModel(fakeData)
      const actual = instance.findByLabel("NotFound")
      expect(actual).toBeNull()
    })
  })
}
