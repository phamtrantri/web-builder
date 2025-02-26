import { EConfigName } from "@constants/index";
import CommonWrapper from "../CommonWrapper";

interface IProps {
  value?: string;
  onChange: (value: string, configName: EConfigName) => void;
}

const FontWeight: React.FC<IProps> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, EConfigName.FONT_WEIGHT);
  };

  return (
    <CommonWrapper title="Font Weight">
      <div>
        <input
          type="radio"
          id="light"
          name="fontWeight"
          value="300"
          checked={value === "300"}
          onChange={handleInputChange}
        />
        <label htmlFor="light">Light</label>
      </div>
      <div>
        <input
          type="radio"
          id="regular"
          name="fontWeight"
          value="400"
          checked={value === "400"}
          onChange={handleInputChange}
        />
        <label htmlFor="regular">Regular</label>
      </div>
      <div>
        <input
          type="radio"
          id="bold"
          name="fontWeight"
          value="bold"
          checked={value === "bold"}
          onChange={handleInputChange}
        />
        <label htmlFor="bold">Bold</label>
      </div>
    </CommonWrapper>
  );
};

export default FontWeight;
