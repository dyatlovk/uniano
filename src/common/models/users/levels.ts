export namespace User {
  export type SkillType = {
    level: number
    points: {
      min: number
      max?: number
    }
    label: SkillsLabels
    color: string
  }

  export enum SkillsLabels {
    Beginner = 'Beginner',
    Junior = 'Junior',
    Middle = 'Middle',
    Senior = 'Senior',
    Lead = 'Lead',
  }

  export enum SkillsArrange {
    Beginner,
    Junior,
    Middle,
    Senior,
    Lead,
  }
}

export const SkillsMap: User.SkillType[] = [
  {
    level: 1,
    label: User.SkillsLabels.Beginner,
    points: {
      min: 0,
      max: 299,
    },
    color: '#b6de59',
  },
  {
    level: 2,
    label: User.SkillsLabels.Junior,
    points: {
      min: 300,
      max: 1500,
    },
    color: '#219653',
  },
  {
    level: 3,
    label: User.SkillsLabels.Middle,
    points: {
      min: 1501,
      max: 6000,
    },
    color: '#f2c94c',
  },
  {
    level: 4,
    label: User.SkillsLabels.Senior,
    points: {
      min: 6001,
      max: 15000,
    },
    color: '#f4a72a',
  },
  {
    level: 5,
    label: User.SkillsLabels.Lead,
    points: {
      min: 15001,
    },
    color: '#eb5757',
  },
]

export class UserSkill {
  static getLevelByIndex(id: number): User.SkillType | undefined {
    return SkillsMap.find(el => el.level === id)
  }

  static findPointsToNextLevel(level: number): number {
    const current = UserSkill.findLevelByPoint(level)
    return 0
  }

  static getLevelByLabel(label: User.SkillsLabels): User.SkillType {
    return SkillsMap.find(el => el.label === label)
  }

  static findLevelByPoint(val: number): User.SkillType | undefined {
    let found: User.SkillType | undefined = undefined
    if (val < 0) return UserSkill.getLevelByLabel(User.SkillsLabels.Junior)
    SkillsMap.forEach(el => {
      if (
        el.points.min <= val &&
        (el.points.max > val || typeof el.points.max === 'undefined')
      ) {
        found = el
        return
      }
    })

    return found
  }

  /**
   * Return level position in percent
   */
  static findLevelPosition(label: User.SkillsLabels): number {
    const current = UserSkill.getLevelByLabel(label)
    const max = SkillsMap.length

    if (current.level === 1) {
      return 0
    }

    if (current.level === max) {
      return 100
    }

    return Math.ceil((100 * current.level) / max)
  }

  static isLevelRiched(
    current: User.SkillsLabels,
    checked: User.SkillsLabels
  ): boolean {
    const checkedEnum = UserSkill.findSkillEnumByLabel(checked)
    const currentEnum = UserSkill.findSkillEnumByLabel(current)
    return currentEnum >= checkedEnum
  }

  static findMaxSkills(): number {
    let size = 0
    for (let element in User.SkillsLabels) {
      if (isNaN(Number(element))) {
        size++
      }
    }

    return size
  }

  static findSkillEnumByLabel(label: User.SkillsLabels): User.SkillsArrange {
    switch (label) {
      case User.SkillsLabels.Beginner:
        return User.SkillsArrange.Beginner
      case User.SkillsLabels.Junior:
        return User.SkillsArrange.Junior
      case User.SkillsLabels.Middle:
        return User.SkillsArrange.Middle
      case User.SkillsLabels.Senior:
        return User.SkillsArrange.Senior
      case User.SkillsLabels.Lead:
        return User.SkillsArrange.Lead
    }
  }

  static findLabelByEnum(skill: User.SkillsArrange): User.SkillsLabels {
    switch (skill) {
      case User.SkillsArrange.Beginner:
        return User.SkillsLabels.Beginner
      case User.SkillsArrange.Junior:
        return User.SkillsLabels.Junior
      case User.SkillsArrange.Middle:
        return User.SkillsLabels.Middle
      case User.SkillsArrange.Senior:
        return User.SkillsLabels.Senior
      case User.SkillsArrange.Lead:
        return User.SkillsLabels.Lead
    }
  }
}

/**
 * Tests
 */
if (import.meta.vitest) {
  const { expect, test, describe } = import.meta.vitest

  describe('getLevels', () => {
    test('byIndex', () => {
      const actual = UserSkill.getLevelByIndex(1)
      const expected = {
        level: 1,
        label: User.SkillsLabels.Beginner,
        points: {
          min: 0,
          max: 299,
        },
        color: '#b6de59',
      }
      expect(actual).toEqual(expected)
    })

    test('byIndexNotFound', () => {
      const notFound = UserSkill.getLevelByIndex(SkillsMap.length + 1)
      expect(notFound).toBeUndefined()
    })

    test('byLabel', () => {
      const actual = UserSkill.getLevelByLabel(User.SkillsLabels.Beginner)
      const expected = {
        level: 1,
        label: User.SkillsLabels.Beginner,
        points: {
          min: 0,
          max: 299,
        },
        color: '#b6de59',
      }
      expect(actual).toEqual(expected)
    })

    test('findLevelByPointJunior', () => {
      const actual = UserSkill.findLevelByPoint(300).label
      const expected = User.SkillsLabels.Junior
      expect(actual).toEqual(expected)
    })

    test('findLevelByPointLead', () => {
      const actual = UserSkill.findLevelByPoint(16000).label
      const expected = User.SkillsLabels.Lead
      expect(actual).toEqual(expected)
    })

    test('findLevelByPointMid', () => {
      const actual = UserSkill.findLevelByPoint(2015).label
      const expected = User.SkillsLabels.Middle
      expect(actual).toEqual(expected)
    })

    test('findLevelByNegativePoint', () => {
      const actual = UserSkill.findLevelByPoint(-10).label
      const expected = User.SkillsLabels.Junior
      expect(actual).toEqual(expected)
    })

    test('levelPosition', () => {
      const beginner = UserSkill.findLevelPosition(User.SkillsLabels.Beginner)
      expect(beginner).toEqual(0)

      const jun = UserSkill.findLevelPosition(User.SkillsLabels.Junior)
      expect(jun).toEqual(40)

      const mid = UserSkill.findLevelPosition(User.SkillsLabels.Middle)
      expect(mid).toEqual(60)

      const senior = UserSkill.findLevelPosition(User.SkillsLabels.Senior)
      expect(senior).toEqual(80)

      const lead = UserSkill.findLevelPosition(User.SkillsLabels.Lead)
      expect(lead).toEqual(100)
    })

    test('isLevelRiched', () => {
      const beginJun = UserSkill.isLevelRiched(
        User.SkillsLabels.Beginner,
        User.SkillsLabels.Junior
      )
      expect(beginJun).toBeFalsy()

      const junBegin = UserSkill.isLevelRiched(
        User.SkillsLabels.Junior,
        User.SkillsLabels.Beginner
      )
      expect(junBegin).toBeTruthy()

      const midBegin = UserSkill.isLevelRiched(
        User.SkillsLabels.Middle,
        User.SkillsLabels.Beginner
      )
      expect(midBegin).toBeTruthy()

      const seniorLead = UserSkill.isLevelRiched(
        User.SkillsLabels.Senior,
        User.SkillsLabels.Lead
      )
      expect(seniorLead).toBeFalsy()

      const leadMid = UserSkill.isLevelRiched(
        User.SkillsLabels.Lead,
        User.SkillsLabels.Middle
      )
      expect(leadMid).toBeTruthy()

      const seniorBegin = UserSkill.isLevelRiched(
        User.SkillsLabels.Senior,
        User.SkillsLabels.Beginner
      )
      expect(seniorBegin).toBeTruthy()
    })

    test('skillsCount', () => {
      expect(UserSkill.findMaxSkills()).toEqual(5)
    })
  })
}
