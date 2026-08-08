import darkLogo from "@/assets/logos/tstIcon.png";
import logo from "@/assets/logos/tst.png";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`relative h-12 w-24 ${className}`}>
      <Image
        src={logo}
        fill
        className="dark:hidden object-contain ms-0"
        alt="TST logo"
        role="presentation"
        priority
        quality={100}
      />

      <Image
        src={darkLogo}
        fill
        className="hidden dark:block object-contain"
        alt="TST logo"
        role="presentation"
        priority
        quality={100}
      />
    </div>
  );
}
