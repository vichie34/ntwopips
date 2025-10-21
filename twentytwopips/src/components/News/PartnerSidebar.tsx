import { Partner } from "./types";

interface PartnerSidebarProps {
  partners: Partner[];
}

export default function PartnerSidebar({ partners }: PartnerSidebarProps) {
  return (
    <aside className="sticky top-24 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Partner Center</h2>

      <div className="flex flex-col gap-6">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center transition-transform duration-200 hover:scale-105 hover:opacity-90"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full max-w-[200px] h-auto object-contain mx-auto"
            />
          </a>
        ))}
      </div>
    </aside>
  );
}
