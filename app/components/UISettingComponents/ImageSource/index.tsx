import { EConfigName } from "@constants/index";
import CommonWrapper from "../CommonWrapper";

interface IProps {
  value?: string;
  onChange: (value: string, configName: EConfigName) => void;
}

const ImageSource: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <CommonWrapper title="Image Source">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value, EConfigName.IMG_SRC)}
      />
    </CommonWrapper>
  );
};

export default ImageSource;
