import AppColor from '@common/styles/variables-static'
import { useEffect, useRef, useState } from 'react'
import Typography from '../../Typography/Typography'
import styles from './style.module.scss'
import { render, screen, cleanup } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

type DropDownItem = string | number | React.ReactNode

interface DropDownProps {
  activeId?: number
  items: DropDownItem[]
  show?: boolean
  callback?: (item: DropDownItem) => void
  closeOnOutsideClick?: boolean
}

const DropDownCommon = ({
  activeId = 0,
  items = [],
  show = false,
  callback,
  closeOnOutsideClick = true,
}: DropDownProps): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(show)
  const [activeItem, setActiveItem] = useState<number>(activeId)
  const ref = useRef<HTMLDivElement>(null)

  function handleClick(item: DropDownItem, idx: number) {
    callback(item)
    setActiveItem(idx)
  }

  useEffect(() => {
    if (!closeOnOutsideClick) return
    const handleOutsideClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setVisible(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [closeOnOutsideClick])

  useEffect(() => {
    const activeTitle = findActiveTitle(activeItem, items)
    callback(activeTitle)
  }, [activeItem, callback, items])

  return (
    <div
      onClick={() => {
        setVisible(prev => !prev)
      }}
      ref={ref}
      className={styles.dropdown}
    >
      <Typography
        fontWeight="500"
        variant="body4"
        color={AppColor.text}
        data-testid="dropdown__selected"
      >
        {findActiveTitle(activeItem, items)}
      </Typography>
      <div className={styles.chevrons}>
        {isVisible && <AppColor.chevronTop fill={'#01010180'} />}
        {!isVisible && <AppColor.chevronBottom fill={'#01010180'} />}
      </div>
      <div
        data-testid="dropdown__inner"
        className={styles.inner}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <div className={styles.items}>
          {items.map((item: DropDownItem, idx: number) => (
            <div
              onClick={() => {
                handleClick(item, idx)
              }}
              className={styles.item}
              key={idx}
              data-testid={item}
            >
              <Typography
                fontWeight={idx == activeItem ? '500' : '400'}
                variant="body5"
              >
                {item}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function findActiveTitle(id: number, lists: DropDownItem[]): DropDownItem {
  return lists.find((el, idx) => idx === id)
}

/**
 * Tests
 */
if (import.meta.vitest) {
  const { expect, test, afterEach, beforeEach } = import.meta.vitest

  beforeEach(() => {
    cleanup()
  })

  afterEach(() => {
    cleanup()
  })

  test('lists invisibile', async () => {
    render(<DropDownCommon items={['Test', 'Test2']} callback={() => {}} />)
    const item = await screen.getAllByTestId('dropdown__inner')[0]
    expect(item.style.display).toEqual('none')
  })

  test('lists visibile', async () => {
    render(<DropDownCommon items={['Test', 'Test2']} callback={() => {}} />)
    const selectedDiv = screen.getAllByTestId('dropdown__selected')[0]
    await userEvent.click(selectedDiv)
    const item = await screen.getAllByTestId('dropdown__inner')[0]
    expect(item.style.display).toEqual('block')
  })

  test('select', async () => {
    render(
      <DropDownCommon items={['Programs', 'Projects']} callback={() => {}} />
    )
    const selectedDiv = screen.getAllByTestId('dropdown__selected')[0]
    expect(selectedDiv.innerHTML).toEqual('Programs')

    await userEvent.click(selectedDiv)
    const selected = screen.getByTestId('Projects')
    await userEvent.click(selected)
    const item = await screen.getAllByTestId('dropdown__selected')[0]
    expect(item.innerHTML).toEqual('Projects')
  })

  test('callback', async () => {
    let result = null
    render(
      <DropDownCommon
        items={['1', '2']}
        callback={item => {
          result = item
        }}
      />
    )
    const first = screen.getByTestId('1')
    await userEvent.click(first)
    expect(result).toEqual('1')
  })
}

export default DropDownCommon
