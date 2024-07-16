import { describe, expect, test } from '@jest/globals'
import { SkillsMap, User, UserSkill } from '@common/models/users/levels'

describe('getLevels', () => {
  test('byIndex', () => {
    const actual = UserSkill.getLevelByIndex(1)
    const expected = {
      level: 1,
      label: User.SkillsLabels.Beginner,
      points: {
        min: 0,
        max: 299
      },
      color: "#b6de59"
    }
    expect(actual).toEqual(expected)
  })

  test('byIndexNotFound', () => {
    const notFound = UserSkill.getLevelByIndex(SkillsMap.length + 1)
    expect(notFound).toBeUndefined()
  })

  test("byLabel", () => {
    const actual = UserSkill.getLevelByLabel(User.SkillsLabels.Beginner)
    const expected = {
      level: 1,
      label: User.SkillsLabels.Beginner,
      points: {
        min: 0,
        max: 299
      },
      color: "#b6de59"
    }
    expect(actual).toEqual(expected)
  })

  test("findLevelByPointJunior", () => {
    const actual = UserSkill.findLevelByPoint(300).label
    const expected = User.SkillsLabels.Junior
    expect(actual).toEqual(expected)
  })

  test("findLevelByPointLead", () => {
    const actual = UserSkill.findLevelByPoint(16000).label
    const expected = User.SkillsLabels.Lead
    expect(actual).toEqual(expected)
  })

  test("findLevelByPointMid", () => {
    const actual = UserSkill.findLevelByPoint(2015).label
    const expected = User.SkillsLabels.Middle
    expect(actual).toEqual(expected)
  })

  test("findLevelByNegativePoint", () => {
    const actual = UserSkill.findLevelByPoint(-10).label
    const expected = User.SkillsLabels.Junior
    expect(actual).toEqual(expected)
  })

  test("levelPosition", () => {
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

  test("isLevelRiched", () => {
    const beginJun = UserSkill.isLevelRiched(User.SkillsLabels.Beginner, User.SkillsLabels.Junior)
    expect(beginJun).toBeFalsy()

    const junBegin = UserSkill.isLevelRiched(User.SkillsLabels.Junior, User.SkillsLabels.Beginner)
    expect(junBegin).toBeTruthy()

    const midBegin = UserSkill.isLevelRiched(User.SkillsLabels.Middle, User.SkillsLabels.Beginner)
    expect(midBegin).toBeTruthy()

    const seniorLead = UserSkill.isLevelRiched(User.SkillsLabels.Senior, User.SkillsLabels.Lead)
    expect(seniorLead).toBeFalsy()

    const leadMid = UserSkill.isLevelRiched(User.SkillsLabels.Lead, User.SkillsLabels.Middle)
    expect(leadMid).toBeTruthy()

    const seniorBegin = UserSkill.isLevelRiched(User.SkillsLabels.Senior, User.SkillsLabels.Beginner)
    expect(seniorBegin).toBeTruthy()
  })

  test("skillsCount", () => {
    expect(UserSkill.findMaxSkills()).toEqual(5)
  })
})
