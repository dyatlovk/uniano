import MyButton from '../MyButton'
import AppColor from '@common/styles/variables-static'
import { MyButtonVariantProps } from '../models'

const MyButtonTransparentBlack = (props:MyButtonVariantProps) => {
    return (
        <MyButton
            padding={props.padding}
            onClick={props.onClick}
            children={props.children}
            border="1px solid #515151"
            borderHover={`1px solid ${AppColor.text}`}
            color='transparent'
            textColor={AppColor.text}
            hoverColor={AppColor.text}
            hoverTextColor='white'
            textTransform={props.textTransform}
            fontWeight={props.fontWeight}
        />
    )
}

export default MyButtonTransparentBlack;
