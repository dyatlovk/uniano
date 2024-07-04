
import AppColor from '@common/styles/variables-static';
import { MyButtonVariantProps } from '../models';
import MyButton from '../MyButton';
import styles from './style.module.scss';

const MyButtonTransparentGrey = (
    props:MyButtonVariantProps
) => {
    return (
        <MyButton
            padding={props.padding}
            onClick={props.onClick}
            children={props.children}
            border="1px solid transparent"
            color="transparent"
            borderHover='1px solid transparent'
            textColor={AppColor.text}
            hoverColor={AppColor.white}
            hoverTextColor={AppColor.text}
            textTransform={props.textTransform}
            fontWeight={props.fontWeight}
        />
    )
}

export default MyButtonTransparentGrey;