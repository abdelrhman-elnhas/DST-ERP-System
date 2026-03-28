import darkLogo from "@/assets/logos/dstIcon.png";
import logo from "@/assets/logos/dst.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-18 max-w-[10.847rem]">
      <Image
        src={logo}
        fill
        className="dark:hidden ms-6"
        alt="DST logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={darkLogo}
        fill
        className="hidden dark:block ms-6"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
