import { Link } from "react-router-dom"

import styles from './style.module.scss';
import AppColor from "@common/styles/variables-static";
import Typography from "@common/components/ui/Typography/Typography";

type NavBarLinkProps = {
    title: string
    index: number
    activeIndex: number
    parentRoute: string;
}
const NavBarLink = ({
    title,
    index,
    activeIndex,
    parentRoute,
}: NavBarLinkProps) => {

    const modifiedTitle = title.replace('&', '-').replace(/\s/g, '');;

    return (
        <Link
            to={`/${parentRoute.toLowerCase()}/${modifiedTitle}`}
            className={styles.nav_bar_link}
            style={{
                backgroundColor:
                    index == activeIndex
                        ? AppColor.orange
                        : 'transparent',
            }}>
            <Typography textTransform="uppercase" color="white" variant="body1" fontWeight="500">{title}</Typography>
        </Link>
    )
}
export default NavBarLink;
