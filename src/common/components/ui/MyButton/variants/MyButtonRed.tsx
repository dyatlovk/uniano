import MyButton from '../MyButton'
import AppColor from '@common/styles/variables-static'
import { MyButtonVariantProps } from '../models'

const MyButtonRed = (props:MyButtonVariantProps) => {
    return (
        <MyButton
            padding={props.padding}
            onClick={props.onClick}
            children={props.children}
            border="none"
            borderHover='none'
            color={AppColor.red}
            textColor='white'
            hoverColor={AppColor.colorWithOpacity(AppColor.red, 0.7)}
            hoverTextColor='white'
            textTransform={props.textTransform}
            disabled={props.disabled}
        />
    )
}

export default MyButtonRed;
