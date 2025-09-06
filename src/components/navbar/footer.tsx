import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
  IconHeartCode,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Container } from "../container";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-200 px-4 py-4">
      <p className="flex items-center gap-2 text-xs text-neutral-500">
        Built with love by{" "}
        <span className="selectho">sureshchoudhary@gmail.com</span>
        <IconHeartCode className="size-4 stroke-2 text-red-500" />
      </p>

      <div className="flex items-center justify-center gap-4">
        <Link href="https://x.com/suracechoudhary">
          <AuroraText>
            <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
          </AuroraText>
        </Link>
        <Link href="https://leetcode.com/u/suresh_aumix/">
          <AuroraText>
            <IconBrandLeetcode className="size-4 text-neutral-500 hover:text-neutral-700" />
          </AuroraText>
        </Link>
        <Link href="https://www.linkedin.com/in/sschoudhary30/">
          <AuroraText>
            <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
          </AuroraText>
        </Link>
        <Link href="https://github.com/sschoudhary30">
          <AuroraText>
            <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
          </AuroraText>
        </Link>
        <Link href="https://www.behance.net/desyn_suresh">
          <AuroraText>
            <IconBrandBehance className="size-4 text-neutral-500 hover:text-neutral-700" />
          </AuroraText>
        </Link>
      </div>
    </Container>
  );
};
