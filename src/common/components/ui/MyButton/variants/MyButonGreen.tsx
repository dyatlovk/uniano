import MyButton from '../MyButton'
import AppColor from '@common/styles/variables-static'
import { MyButtonVariantProps } from '../models'

const MyButtonGreen = (props:MyButtonVariantProps) => {
    return (
        <MyButton
            padding={props.padding}
            onClick={props.onClick}
            children={props.children}
            border="none"
            borderHover='none'
            color={AppColor.green}
            textColor='white'
            hoverColor={AppColor.colorWithOpacity(AppColor.green, 0.7)}
            hoverTextColor='white'
            textTransform={props.textTransform}
            disabled={props.disabled}
        />
    )
}

export default MyButtonGreen;
