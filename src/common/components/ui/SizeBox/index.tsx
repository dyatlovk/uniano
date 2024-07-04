
type SizeBoxProps = {
    width?: string;
    height?: string;
}
const SizeBox = ({width,height}:SizeBoxProps) => {

    return (
      <div style={{width: width,height: height}}>
           
      </div>
    );
};

export default SizeBox;