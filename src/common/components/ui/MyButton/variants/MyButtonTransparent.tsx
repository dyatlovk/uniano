import React, { MouseEventHandler } from 'react'
import MyButton from '../MyButton'
import AppColor from '@common/styles/variables-static'
import { MyButtonVariantProps } from '../models'

const MyButtonTransparent = (
    props:MyButtonVariantProps
) => {
    return (
        <MyButton
            padding={props.padding}
            onClick={props.onClick}
            children={props.children}
            border="1px solid transparent"
            color="transparent"
            width={props.width}
            textColor={AppColor.transparentBlack}
            hoverColor="transparent"
            borderHover="1px solid transparent"
            hoverTextColor={AppColor.orange}
            textTransform={props.textTransform}
            fontWeight={props.fontWeight}
        />
    )
}

export default MyButtonTransparent
