import { Text } from "./shared";
import s from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={s.main}>
        <Text className={s.customText}>Some text</Text>
      </main>
    </>
  );
}
