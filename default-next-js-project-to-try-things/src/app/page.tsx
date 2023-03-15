import { Text } from "./shared";
import s from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={s.container}>
      <Text className={s.customText}>Some text</Text>

      <Text>Image from obtkit marketplace</Text>
      <Image
        src="https://assets.objkt.media/file/assets-003/QmdXYBm9kkHDLHv1LqQYMaHH5Yu2j74DEFh6ioLpcyPxc9/artifact"
        height={200}
        width={200}
        alt="nft 1"
      />
    </div>
  );
}
