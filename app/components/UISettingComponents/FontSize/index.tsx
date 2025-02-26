import { EConfigName } from "@constants/index";
import CommonWrapper from "../CommonWrapper";

interface IProps {
  value?: string;
  onChange: (value: string, configName: EConfigName) => void;
}

const FontSize: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <CommonWrapper title="Font Size">
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={(e) => onChange(e.target.value, EConfigName.FONT_SIZE)}
      />
      <span>{value}px</span>
    </CommonWrapper>
  );
};

export default FontSize;
