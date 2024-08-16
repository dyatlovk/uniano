import {
  StepItemSolving,
  StepsOfPreparingEndSolving,
} from '@common/components/StepsOfPreparing/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import PaymentOptions from '../components/PaymentOptions'
import styles from './style.module.scss'

type StepProps = {
  callback: (item: string) => void
  value: string
  stepOneValue?: string
  stepTwoValue?: string
  stepThreeValue?: string
  stepFourValue?: string
  callbackStep: (item: number) => void
  help?: React.ReactNode
}

const StepOrderNegotiationOne = ({
  callback,
  value,
  stepOneValue,
  callbackStep,
  help,
}: StepProps) => {
  const [selectedButton, setSelectedButton] = useState<string>('')

  function isActive(label: string): boolean {
    return label === selectedButton
  }

  return (
    <StepItemSolving
      solveNode={
        <div className={styles.payment_buttons}>
          <div
            className={
              isActive('fixed')
                ? styles.payment_button_active
                : styles.payment_button
            }
            onClick={() => {
              setSelectedButton('fixed')
              callback('fixed')
            }}
          >
            <AppColor.flag />
            Fixed
            <div className={styles.info_button}>
              <AppColor.info />
            </div>
          </div>
          <div
            className={
              isActive('milestones')
                ? styles.payment_button_active
                : styles.payment_button
            }
            onClick={() => {
              setSelectedButton('milestones')
              callback('milestones')
            }}
          >
            <AppColor.puzle />
            Milestones
            <div className={styles.info_button}>
              <AppColor.info />
            </div>
          </div>
        </div>
      }
      helpNode={
        <div style={{ marginLeft: '70px' }}>
          <div className={styles.right_text_box}>{help}</div>
        </div>
      }
      stepNumber="1"
      title={'Select payment way'}
    />
  )
}

export const StepOrderNegotiationTwo = ({
  callback,
  value,
  stepOneValue,
  callbackStep,
  help,
}: StepProps) => {
  return (
    <StepsOfPreparingEndSolving
      elements={[
        {
          solve: 'Change payment way',
          text: stepOneValue,
          onSolveClick: () => {
            callbackStep(1)
          },
        },
      ]}
      solvingNode={
        <StepItemSolving
          solveNode={
            <PaymentOptions
              onAnySelectCallback={() => {
                callback('payment')
              }}
            />
          }
          stepNumber="2"
          title="Select details"
          helpNode={
            <div style={{ marginLeft: '70px' }}>
              <div className={styles.right_text_box}>{help}</div>
            </div>
          }
        />
      }
    />
  )
}

export const StepOrderNegotiationThree = ({
  callback,
  value,
  stepOneValue,
  stepTwoValue,
  callbackStep,
  help,
}: StepProps) => {
  const [formActive, setFormActive] = useState<string>('')

  return (
    <StepsOfPreparingEndSolving
      elements={[
        {
          solve: 'Change payment way',
          text: stepOneValue,
          onSolveClick: () => {
            callbackStep(1)
          },
        },
        {
          solve: 'Change details',
          text: stepTwoValue,
          onSolveClick: () => {
            callbackStep(2)
          },
        },
      ]}
      solvingNode={
        <StepItemSolving
          solveNode={
            <>
              <div
                className={
                  formActive === 'specs'
                    ? styles.padding_shadow_active
                    : styles.padding_shadow
                }
                onClick={() => {
                  setFormActive('specs')
                  callback('specs')
                }}
              >
                <div className="gap_10">
                  <div className={styles.orange}>
                    <AppColor.layers width={15} height={16} />
                  </div>
                  <Typography
                    variant="body5"
                    fontWeight="500"
                    textTransform="uppercase"
                    color={AppColor.text}
                  >
                    Specification Forms
                  </Typography>
                </div>
                <Typography variant="body4" fontWeight="500">
                  3 522 Avaliable
                </Typography>
              </div>
              {formActive === 'specs' && (
                <>
                  <DynamicPadding desktop="10px" />
                  <div className={styles.attaches}>
                    <div className={styles.attached_file}>
                      <div className={styles.file_close}>
                        <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
                      </div>
                      <div className={styles.attached_file_inner}>
                        <div>
                          <AppColor.filePdf />
                        </div>
                        <div>
                          <Typography fontWeight="500">
                            Freelancer co....pdf
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body4" color={AppColor.text}>
                            432.1 KB
                          </Typography>
                        </div>
                      </div>
                      <p className={styles.attached_file_sign}>
                        Signed 16 Oct 2023 13:15
                      </p>
                    </div>
                    <div className={styles.attached_file}>
                      <div className={styles.file_close}>
                        <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
                      </div>
                      <div className={styles.attached_file_inner}>
                        <div>
                          <AppColor.filePdf />
                        </div>
                        <div>
                          <Typography fontWeight="500">
                            Freelancer co....pdf
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body4" color={AppColor.text}>
                            432.1 KB
                          </Typography>
                        </div>
                      </div>
                      <p className={styles.attached_file_sign}>
                        Signed 16 Oct 2023 13:15
                      </p>
                    </div>
                  </div>
                  <DynamicPadding desktop="30px" />
                  <div className={styles.dropzone}>
                    <AppColor.attach width={15} />
                    <Typography variant="body3">
                      attach files (max 100 mb)
                    </Typography>
                  </div>
                </>
              )}
              <DynamicPadding desktop="30px" />
              <div
                className={
                  formActive === 'custom'
                    ? styles.padding_shadow_active
                    : styles.padding_shadow
                }
                onClick={() => {
                  setFormActive('custom')
                  callback('custom')
                }}
              >
                <div className="gap_10">
                  <div className={styles.orange}>
                    <AppColor.layers width={15} height={16} />
                  </div>
                  <Typography
                    variant="body5"
                    fontWeight="500"
                    textTransform="uppercase"
                    color={AppColor.text}
                  >
                    Custom text
                  </Typography>
                </div>
                <Typography variant="body4" fontWeight="500">
                  Width attachments
                </Typography>
              </div>
              {formActive === 'custom' && (
                <>
                  <DynamicPadding desktop="10px" />
                  <div className={styles.attaches}>
                    <div className={styles.attached_file}>
                      <div className={styles.file_close}>
                        <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
                      </div>
                      <div className={styles.attached_file_inner}>
                        <div>
                          <AppColor.filePdf />
                        </div>
                        <div>
                          <Typography fontWeight="500">
                            Freelancer co....pdf
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body4" color={AppColor.text}>
                            432.1 KB
                          </Typography>
                        </div>
                      </div>
                      <p className={styles.attached_file_sign}>
                        Signed 16 Oct 2023 13:15
                      </p>
                    </div>
                    <div className={styles.attached_file}>
                      <div className={styles.file_close}>
                        <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
                      </div>
                      <div className={styles.attached_file_inner}>
                        <div>
                          <AppColor.filePdf />
                        </div>
                        <div>
                          <Typography fontWeight="500">
                            Freelancer co....pdf
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body4" color={AppColor.text}>
                            432.1 KB
                          </Typography>
                        </div>
                      </div>
                      <p className={styles.attached_file_sign}>
                        Signed 16 Oct 2023 13:15
                      </p>
                    </div>
                  </div>
                  <DynamicPadding desktop="30px" />
                  <div className={styles.dropzone}>
                    <AppColor.attach width={15} />
                    <Typography variant="body3">
                      attach files (max 100 mb)
                    </Typography>
                  </div>
                </>
              )}
            </>
          }
          stepNumber="3"
          title="Select specification"
          helpNode={
            <div style={{ marginLeft: '70px' }}>
              <div className={styles.right_text_box}>{help}</div>
            </div>
          }
        />
      }
    />
  )
}

export const StepOrderNegotiationFour = ({
  callback,
  value,
  stepOneValue,
  stepFourValue,
  stepThreeValue,
  stepTwoValue,
  callbackStep,
  help,
}: StepProps) => {
  return (
    <StepsOfPreparingEndSolving
      elements={[
        {
          solve: 'Change payment way',
          text: stepOneValue,
          onSolveClick: () => {
            callbackStep(1)
          },
        },
        {
          solve: 'Change details',
          text: stepTwoValue,
          onSolveClick: () => {
            callbackStep(2)
          },
        },
        {
          solve: 'Change specification',
          text: stepThreeValue,
          onSolveClick: () => {
            callbackStep(3)
          },
        },
      ]}
      solvingNode={
        <StepItemSolving
          drawLine={false}
          solveNode={
            <InputCommon
              initText={value}
              padding="15px 30px"
              width="100%"
              callback={item => {
                callback(item)
              }}
              placeholder="Skills"
            />
          }
          stepNumber="4"
          title="Documents to sign"
          helpNode={
            <div style={{ marginLeft: '70px' }}>
              <div className={styles.right_text_box}>{help}</div>
            </div>
          }
        />
      }
    />
  )
}

export const StepOrderNegotiationFive = ({
  callback,
  value,
  stepFourValue,
  stepThreeValue,
  stepTwoValue,
  stepOneValue,
  callbackStep,
  help,
}: StepProps) => {
  return (
    <StepsOfPreparingEndSolving
      elements={[
        {
          solve: 'Change payment way',
          text: stepOneValue,
          onSolveClick: () => {
            callbackStep(1)
          },
        },
        {
          solve: 'Change details',
          text: stepTwoValue,
          onSolveClick: () => {
            callbackStep(2)
          },
        },
        {
          solve: 'Change specification',
          text: stepThreeValue,
          onSolveClick: () => {
            callbackStep(3)
          },
        },
        {
          solve: 'Change documents to sign',
          text: stepFourValue,
          onSolveClick: () => {
            callbackStep(4)
          },
          drawLine: false,
        },
      ]}
      solvingNode={<></>}
    />
  )
}

export default StepOrderNegotiationOne
