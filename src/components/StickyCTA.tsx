import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { waLink } from "@/config/site";
import { DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export default function StickyCTA() {
  return (
    <div className="sticky-cta">
      <Link
        href={waLink(DEFAULT_WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--whatsapp"
      >
        <WhatsAppIcon />
        Pedir por WhatsApp
      </Link>
    </div>
  );
}