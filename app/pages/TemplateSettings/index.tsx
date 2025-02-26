import Header from "@components/Header";
import type { Route } from "../../+types/root";
import Settings from "./Settings";
import TemplateContent from "./TemplateContent";
import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import { templateDetails } from "@data/templateList";
import { htmlToReact, parseContent } from "@utils/contentRenderer";
import { htmlTemplate } from "app/constants/htmlTemplate";

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Template Settings" },
    { name: "description", content: "Template Settings" },
  ];
}

const TemplateSettings = ({ params }: Route.ComponentProps) => {
  const containerRef = useRef(null);
  const contentRef = useRef<string>(null);
  const [templateParams, setTemplateParams] = useState(
    templateDetails[params.id || ""].params
  );

  const [activeElement, setActiveElement] = useState<HTMLElement | undefined>(
    undefined
  );

  useEffect(() => {
    if (containerRef.current) {
      const content = parseContent(
        templateDetails[params.id || ""].content,
        templateParams,
        activeElement
      );
      contentRef.current = content;
      htmlToReact(containerRef, content);
    }
  }, [templateParams, activeElement]);

  const handleExport = () => {
    const htmlContent = contentRef.current;
    if (!htmlContent) {
      return;
    }
    let html = htmlTemplate.replace("{{content}}", htmlContent);
    html = html.replace(/class="selectedActive"/g, "");

    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${templateDetails[params.id || ""]?.name || "export"}.html`;
    a.click();
  };

  return (
    <main className={styles.wrapper}>
      <Header onExport={handleExport} />
      <section className={styles.body}>
        <TemplateContent
          containerRef={containerRef}
          activeElement={activeElement}
          setActiveElement={setActiveElement}
        />
        <Settings
          activeElement={activeElement}
          params={templateParams}
          setTemplateParams={setTemplateParams}
        />
      </section>
    </main>
  );
};
export default TemplateSettings;
