import MyButton from '../MyButton'
import AppColor from '@common/styles/variables-static'
import { MyButtonVariantProps } from '../models'

const MyButtonBlack = (props:MyButtonVariantProps) => {
    return (
        <MyButton
            padding={props.padding}
            onClick={props.onClick}
            children={props.children}
            border="none"
            borderHover='none'
            color={AppColor.text}
            textColor='white'
            hoverColor={AppColor.colorWithOpacity(AppColor.text, 0.7)}
            hoverTextColor='white'
            textTransform={props.textTransform}
            disabled={props.disabled}
        />
    )
}

export default MyButtonBlack;
