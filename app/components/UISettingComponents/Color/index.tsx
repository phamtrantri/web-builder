import { EConfigName } from "@constants/index";
import CommonWrapper from "../CommonWrapper";

interface IProps {
  value?: string;
  onChange: (value: string, configName: EConfigName) => void;
}

const Color: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <CommonWrapper title="Color">
      <input
        type="color"
        onChange={(e) => onChange(e.target.value, EConfigName.COLOR)}
        value={value}
      />
    </CommonWrapper>
  );
};

export default Color;
