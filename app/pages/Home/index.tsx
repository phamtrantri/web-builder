import type { Route } from "../../+types/root";
import Header from "@components/Header";
import styles from "./style.module.css";
import TemplateThumbnail from "@components/TemplateThumbnail";
import { templateList } from "@data/templateList";

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Web Builder" },
    { name: "description", content: "Welcome to Web Builder" },
  ];
}

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.body}>
        <h1>Choose a template to start</h1>
        <div className={styles.thumbnailList}>
          {templateList.map((elem) => (
            <TemplateThumbnail key={elem.id} template={elem} />
          ))}
        </div>
      </section>
    </main>
  );
}
