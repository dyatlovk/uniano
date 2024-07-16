import AppColor from '@common/styles/variables-static'

export namespace User {
  export enum ReviewsLabel {
    Positive,
    Negative,
  }

  export type ReviewType = {
    label: ReviewsLabel
    color: string
  }
}

class UserReview {
  static getReviewsMap(): User.ReviewType[] {
    return [
      {
        color: AppColor.red,
        label: User.ReviewsLabel.Negative,
      },
      {
        color: AppColor.green,
        label: User.ReviewsLabel.Positive,
      },
    ]
  }

  static findReviewByLabel(
    label: User.ReviewsLabel
  ): User.ReviewType | undefined {
    const map = UserReview.getReviewsMap()
    return map.find(el => el.label === label)
  }
}

export { UserReview }

/**
 * Tests
 */
if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest
  test('findByLabel', () => {
    const actual = UserReview.findReviewByLabel(User.ReviewsLabel.Positive)
    const expected = {
      color: AppColor.green,
      label: User.ReviewsLabel.Positive,
    }
    expect(actual).toEqual(expected)
  })
}
