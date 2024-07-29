class States {
  private currentState: Navigation.State | null = null
  private states: Navigation.State[] = []

  constructor(states: Navigation.State[]) {
    this.states = states
    this.disableAll()
  }

  public set current(state: string) {
    this.currentState = this.findStateByTitle(state)
  }

  public getCurrent(): Navigation.State {
    return this.currentState
  }

  public get updateStates(): Navigation.State[] {
    const currentIdx = this.getCurrentId()
    this.states.forEach((state: Navigation.State, id: number) => {
      if (currentIdx >= id) state.disabled = false
    })
    return this.states
  }

  public findStateByTitle(val: string): Navigation.State | null {
    if (this.getTotalStates() == 0) return null

    const found = this.states.find(el => el.title === val)
    if (!found) return null

    return found
  }

  public isFirst(): boolean {
    const currentIdx = this.getCurrentId()
    return currentIdx === 0
  }

  public isLast(): boolean {
    return this.getCurrentId() + 1 === this.getTotalStates()
  }

  public findNext(): Navigation.State | null {
    const index = this.getCurrentId()
    const next = this.states[index + 1]
    if (!next) return null
    return next
  }

  public findPrev(): Navigation.State | null {
    const index = this.getCurrentId()
    const prev = this.states[index - 1]
    if (!prev) return null
    return prev
  }

  public getProgress(): number {
    const currentIdx = this.getCurrentId() + 1
    const total = this.states.length
    return 100 * currentIdx / total
  }

  private disableAll(): void {
    this.states.forEach(state => state.disabled = true)
  }

  private getCurrentId(): number {
    return this.states.indexOf(this.currentState)
  }

  public getTotalStates(): number {
    return this.states.length
  }
}

export default States


/**
 * Tests
 */
if (import.meta.vitest) {
  const { expect, test, describe } = import.meta.vitest

  const steps: Navigation.State[] = [
    {
      title: "First",
      url: "link 1",
      disabled: false
    },
    {
      title: "Step 2",
      url: "link 2",
      disabled: false
    },
    {
      title: "Step 3",
      url: "link 3",
      disabled: false
    },
    {
      title: "Last",
      url: "link_last",
      disabled: false
    }
  ]

  describe("findNext", () => {
    test("default step", () => {
      const instance = new States(steps)
      instance.current = "First"
      const actual = instance.findNext()
      const expected = steps[1]
      expect(expected).toEqual(actual)
    })
    test("mid step", () => {
      const instance = new States(steps)
      instance.current = "Step 3"
      const actual = instance.findNext()
      const expected = steps[3]
      expect(expected).toEqual(actual)
    })
    test("last step", () => {
      const instance = new States(steps)
      instance.current = "Last"
      const actual = instance.findNext()
      expect(actual).toBeNull()
    })
  })

  describe("findPrev", () => {
    test("first step", () => {
      const instance = new States(steps)
      instance.current = "First"
      const actual = instance.findPrev()
      expect(actual).toBeNull()
    })
    test("mid step", () => {
      const instance = new States(steps)
      instance.current = "Step 3"
      const actual = instance.findPrev()
      const expected = steps[1]
      expect(expected).toEqual(actual)
    })
    test("last step", () => {
      const instance = new States(steps)
      instance.current = "Last"
      const actual = instance.findPrev()
      const expected = steps[2]
      expect(expected).toEqual(actual)
    })
  })

  describe("cursor", () => {
    test("isFirst", () => {
      const instance = new States(steps)
      instance.current = "First"
      const actual = instance.isFirst()
      expect(actual).toBeTruthy()
    })
    test("notFirst", () => {
      const instance = new States(steps)
      instance.current = "Step 1"
      const actual = instance.isFirst()
      expect(actual).toBeFalsy()
    })
    test("isLast", () => {
      const instance = new States(steps)
      instance.current = "Last"
      const actual = instance.isLast()
      expect(actual).toBeTruthy()
    })
    test("notLast", () => {
      const instance = new States(steps)
      instance.current = "Step 11"
      const actual = instance.isLast()
      expect(actual).toBeFalsy()
    })
  })

  describe("findByTitle", () => {
    test("success", () => {
      const instance = new States(steps)
      const actual = instance.findStateByTitle("First")
      expect(steps[0]).toEqual(actual)
    })

    test("notFound", () => {
      const instance = new States(steps)
      const actual = instance.findStateByTitle("NotFound")
      expect(actual).toBeNull()
    })
  })

  describe("states", () => {
    test("first", () => {
      const instance = new States(steps)
      const actual = instance.updateStates[0]
      expect(steps[0]).toEqual(actual)
    })

    test("mid", () => {
      const instance = new States(steps)
      instance.current = "Step 2"
      const states = instance.updateStates
      expect(states[0].disabled).toBeFalsy()
      expect(states[1].disabled).toBeFalsy()
      expect(states[2].disabled).toBeTruthy()
      expect(states[3].disabled).toBeTruthy()
    })

    test("last", () => {
      const instance = new States(steps)
      instance.current = "Last"
      const states = instance.updateStates
      expect(states[0].disabled).toBeFalsy()
      expect(states[1].disabled).toBeFalsy()
      expect(states[2].disabled).toBeFalsy()
      expect(states[3].disabled).toBeFalsy()
    })

    test("total", () => {
      const instance = new States(steps)
      const actual = instance.getTotalStates()
      expect(actual).toEqual(4)
    })
  })

  describe("progress", () => {
    test("last", () => {
      const instance = new States(steps)
      instance.current = "Last"
      const states = instance.updateStates
      const actual = instance.getProgress()
      expect(actual).toEqual(100)
    })
    test("mid", () => {
      const instance = new States(steps)
      instance.current = "Step 2"
      const states = instance.updateStates
      const actual = instance.getProgress()
      expect(actual).toEqual(50)
    })
    test("first", () => {
      const instance = new States(steps)
      instance.current = "First"
      const states = instance.updateStates
      const actual = instance.getProgress()
      expect(actual).toEqual(25)
    })
  })
}
