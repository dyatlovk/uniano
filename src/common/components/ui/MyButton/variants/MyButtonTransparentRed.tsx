
import AppColor from '@common/styles/variables-static';
import { MyButtonVariantProps } from '../models';
import MyButton from '../MyButton';

const MyButtonTransparentRed = (
    props:MyButtonVariantProps
) => {
    return (
        <MyButton
            padding={props.padding}
            onClick={props.onClick}
            children={props.children}
            border="1px solid transparent"
            color="transparent"
            textColor={AppColor.red}
            hoverColor={AppColor.red}
            hoverTextColor={'white'}
            textTransform={props.textTransform}
        />
    )
}

export default MyButtonTransparentRed;