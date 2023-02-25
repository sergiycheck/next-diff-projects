import { Text } from "./shared";
import s from "./page.module.css";

export default function Home() {
  return (
    <div className={s.container}>
      <Text className={s.customText}>Some text</Text>
    </div>
  );
}
