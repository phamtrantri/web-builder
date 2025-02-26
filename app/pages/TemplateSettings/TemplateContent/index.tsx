import styles from "./style.module.css";
const TEMPLATE_ID = "templateContainer";

interface IProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  activeElement?: HTMLElement;
  setActiveElement: (element?: HTMLElement) => void;
}

const TemplateContent: React.FC<IProps> = ({
  containerRef,
  activeElement,
  setActiveElement,
}) => {
  return (
    <div
      id={TEMPLATE_ID}
      ref={containerRef}
      className={styles.wrapper}
      onClick={(e) => {
        if (e.target instanceof HTMLElement) {
          if (activeElement) {
            activeElement.classList.remove("selectedActive");
          }

          e.stopPropagation();
          e.target.classList.add("selectedActive");
          setActiveElement(e.target);
        }
      }}
    ></div>
  );
};

export default TemplateContent;
