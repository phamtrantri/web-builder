import { EConfigName } from "@constants/index";
import CommonWrapper from "../CommonWrapper";

interface IProps {
  value?: string;
  onChange: (value: string, configName: EConfigName) => void;
}

const BackgroundColor: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <CommonWrapper title="Background Color">
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value, EConfigName.BACKGROUND_COLOR)}
      />
    </CommonWrapper>
  );
};

export default BackgroundColor;
