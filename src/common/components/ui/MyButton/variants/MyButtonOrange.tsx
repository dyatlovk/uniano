import MyButton from '../MyButton'
import AppColor from '@common/styles/variables-static'
import { MyButtonVariantProps } from '../models'

const MyButtonOrange = (props:MyButtonVariantProps) => {
    return (
        <MyButton
            padding={props.padding}
            onClick={props.onClick}
            color={AppColor.orange}
            textColor='white'
            border='none'
            width={props.width}
            borderHover='none'
            hoverColor={AppColor.colorWithOpacity(AppColor.orange,0.7)}
            children={props.children}
            fontWeight={props.fontWeight}
            disabled={props.disabled}
            textTransform={props.textTransform}
        />
    )
}

export default MyButtonOrange;
