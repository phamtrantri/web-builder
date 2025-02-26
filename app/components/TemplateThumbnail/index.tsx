import { Link } from "react-router";
import styles from "./style.module.css";
import type { ITemplateListItem } from "@typing/template";

interface IProps {
  template: ITemplateListItem;
}

const TemplateThumbnail: React.FC<IProps> = ({ template }) => {
  return (
    <Link to={`/templates/${template.id}`}>
      <div className={styles.wrapper}>
        <img
          src={`${template.img}?text=Thumbnail-${template.id}`}
          className={styles.thumbnailProfile}
        />
        <div className={styles.descWrapper}>
          <span className={styles.title}>{template.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default TemplateThumbnail;
