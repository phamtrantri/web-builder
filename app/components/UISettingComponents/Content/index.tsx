import { EConfigName } from "@constants/index";
import CommonWrapper from "../CommonWrapper";
import styles from "./style.module.css";

interface IProps {
  value?: string;
  onChange: (value: string, configName: EConfigName) => void;
}

const Content: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <CommonWrapper title="Content">
      <textarea
        className={styles.contentArea}
        value={value}
        onChange={(e) => onChange(e.target.value, EConfigName.CONTENT)}
      />
    </CommonWrapper>
  );
};

export default Content;
