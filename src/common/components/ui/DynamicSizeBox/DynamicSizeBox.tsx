import cl from './style.module.scss';

type DSizeBoxProps = {
    wMobile?: string;
    wDesktop?: string;
    hMobile?: string;
    hDesktop?: string;
}
const DSizeBox: React.FC<DSizeBoxProps> = ({wMobile,wDesktop,hMobile,hDesktop}:DSizeBoxProps) => {
    const styles: Record<string, string> = {
        '--wMobile': wMobile ?? '',
        '--hDesktop': hDesktop ?? '',
        '--hMobile': hMobile ?? '',
        '--wDesktop': wDesktop ?? '',
    }
    return (
      <div className={cl.box} style={styles}>
           
      </div>
    );
};

export default DSizeBox;