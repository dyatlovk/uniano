import {
  StepItemSolving,
  StepsOfPreparingEndSolving,
} from '@common/components/StepsOfPreparing/index'
import styles from './style.module.scss'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import React, { useState } from 'react'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import { NavItemType, developmentDropdown } from '@common/models/constants'
import ButtonsSelectList from '@common/components/ButtonsSelectList/index'

type StepProps = {
  callback: (item: string) => void
  value: string
  stepOneValue?: string
  stepTwoValue?: string
  stepThreeValue?: string
  callbackStep: (item: number) => void
  help?: React.ReactNode
}

const StepOneOrder = ({
  callback,
  value,
  stepOneValue,
  callbackStep,
  help,
}: StepProps) => {
  return (
    <div className={styles.step}>
      <StepItemSolving
        solveNode={
          <InputCommon
            initText={value}
            padding="15px 30px"
            width="100%"
            callback={item => {
              callback(item)
            }}
            placeholder="Enter title"
          />
        }
        helpNode={
          <div style={{ marginLeft: '70px' }}>
            <div className={styles.right_text_box}>{help}</div>
          </div>
        }
        stepNumber="1"
        title={'Title'}
      />
    </div>
  )
}

export const StepTwoOrder = ({
  callback,
  value,
  stepOneValue,
  callbackStep,
  help,
}: StepProps) => {
  const [activeCategory, setActiveCategory] = useState('Development')
  const currentList: NavItemType | undefined = developmentDropdown.find(
    item => item.title === activeCategory
  )
  const [selectedSubCategory, setSelectedSubCategory] = useState('')

  return (
    <div className={styles.step}>
      <StepsOfPreparingEndSolving
        elements={[
          {
            solve: 'Change title',
            text: stepOneValue,
            onSolveClick: () => {
              callbackStep(1)
            },
          },
        ]}
        solvingNode={
          <StepItemSolving
            solveNode={
              <div>
                <div className={styles.category_wrapper}>
                  <CategorySelect
                    itemIcon={<AppColor.development />}
                    activeCategory={activeCategory}
                    callback={item => {
                      setActiveCategory(item)
                    }}
                    title="Development"
                  />
                  <CategorySelect
                    itemIcon={<AppColor.desing />}
                    activeCategory={activeCategory}
                    callback={item => {
                      setActiveCategory(item)
                    }}
                    title="Design"
                  />
                  <CategorySelect
                    itemIcon={<AppColor.marketing />}
                    activeCategory={activeCategory}
                    callback={item => {
                      setActiveCategory(item)
                    }}
                    title="Marketing"
                  />
                  <CategorySelect
                    itemIcon={<AppColor.writing />}
                    activeCategory={activeCategory}
                    callback={item => {
                      setActiveCategory(item)
                    }}
                    title="Writing"
                  />
                  <CategorySelect
                    itemIcon={<AppColor.managment />}
                    activeCategory={activeCategory}
                    callback={item => {
                      setActiveCategory(item)
                    }}
                    title="Management"
                  />
                  <CategorySelect
                    itemIcon={<AppColor.consulting />}
                    activeCategory={activeCategory}
                    callback={item => {
                      setActiveCategory(item)
                    }}
                    title="Consulting"
                  />
                </div>
                <DynamicPadding desktop="10px" mobile="10px" />
                <div className={styles.search_result}>
                  {currentList &&
                    currentList.items.map(item => (
                      <div style={{ whiteSpace: 'nowrap' }}>
                        <Typography
                          variant="body4"
                          fontWeight="500"
                          color={AppColor.transparentBlack}
                        >
                          {item.title}
                        </Typography>
                        <DynamicPadding desktop="11px" mobile="20px" />
                        <div className={styles.list_item}>
                          {item.links.map((item, id) => (
                            <div
                              key={id}
                              className="gap_5"
                              onClick={() => {
                                setSelectedSubCategory(item)
                                callback(item)
                              }}
                            >
                              <div
                                className={`${styles.select_box} ${selectedSubCategory == item ? styles.select_box_active : styles.select_box_disabled}`}
                              ></div>
                              <Typography
                                color={
                                  selectedSubCategory == item
                                    ? AppColor.orange
                                    : AppColor.text
                                }
                                fontWeight={
                                  selectedSubCategory == item ? '500' : '400'
                                }
                                variant="body4"
                              >
                                {item}
                              </Typography>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            }
            helpNode={
              <div style={{ marginLeft: '70px' }}>
                <div className={styles.right_text_box}>{help}</div>
              </div>
            }
            stepNumber="2"
            title="Category"
          />
        }
      />
    </div>
  )
}

export const StepThreeOrder = ({
  callback,
  value,
  stepOneValue,
  stepTwoValue,
  callbackStep,
  help,
}: StepProps) => {
  const [selectedSkills, setSelectedSkills] = useState([])

  return (
    <StepsOfPreparingEndSolving
      elements={[
        {
          solve: 'Change title',
          text: stepOneValue,
          onSolveClick: () => {
            callbackStep(1)
          },
        },
        {
          solve: 'Change category',
          text: stepTwoValue,
          onSolveClick: () => {
            callbackStep(2)
          },
        },
      ]}
      solvingNode={
        <StepItemSolving
          drawLine={false}
          solveNode={
            <>
              <ButtonsSelectList
                callback={item => {
                  setSelectedSkills(item)
                  callback(item[0])
                }}
                gap="20px"
                text={[
                  'HTML/CSS',
                  'React',
                  'Angular',
                  'PostgreSQL',
                  'JavaScript',
                  'Vue.js',
                  'MongoDB',
                  'Web Application Security',
                  'WordPress',
                  'Joomla',
                  'PHP',
                  'Python',
                  'Ruby',
                  'Java',
                  'C#',
                  'Django',
                  'Git',
                  'RESTful API',
                  'Laravel',
                  'Web Servers',
                  'SEO',
                  'Spring',
                  'MySQL',
                  'Cross-browser Compatibility',
                  'Testing and Debugging',
                  'Drupal',
                  'Frontend Development',
                  'Backend Development',
                ]}
              />
              <DynamicPadding desktop="26px" mobile="20px" />
              <div className="gap_5">
                <Typography
                  variant="body4"
                  fontWeight="500"
                  color={AppColor.transparentBlack}
                >
                  Selected
                </Typography>
                <Typography
                  variant="body4"
                  fontWeight="500"
                  color={AppColor.orange}
                >
                  {selectedSkills.length} skill
                </Typography>
              </div>
            </>
          }
          helpNode={
            <div style={{ marginLeft: '70px' }}>
              <div className={styles.right_text_box}>{help}</div>
            </div>
          }
          stepNumber="3"
          title="Skills"
        />
      }
    />
  )
}

export const StepFourOrder = ({
  callback,
  value,
  stepOneValue,
  stepThreeValue,
  stepTwoValue,
  callbackStep,
  help,
}: StepProps) => {
  return (
    <StepsOfPreparingEndSolving
      elements={[
        {
          solve: 'Change title',
          text: stepOneValue,
          onSolveClick: () => {
            callbackStep(1)
          },
        },
        {
          solve: 'Change category',
          text: stepTwoValue,
          onSolveClick: () => {
            callbackStep(2)
          },
        },
        {
          solve: 'Change skills',
          text: stepThreeValue,
          drawLine: false,
          onSolveClick: () => {
            callbackStep(3)
          },
        },
      ]}
      solvingNode={<></>}
    />
  )
}

type CategorySelectProps = {
  itemIcon: React.ReactNode

  activeCategory: string
  callback: (item: string) => void
  title: string
}
const CategorySelect = ({
  itemIcon,
  title,
  activeCategory,
  callback,
}: CategorySelectProps) => {
  return (
    <div
      onClick={() => {
        callback(title)
      }}
      className={`gap_5 ${styles.category_select} ${title == activeCategory && styles.category_active}`}
    >
      {itemIcon}
      <Typography
        variant="body4"
        fontWeight={activeCategory == title ? '500' : '400'}
      >
        {title}
      </Typography>
    </div>
  )
}

export default StepOneOrder
