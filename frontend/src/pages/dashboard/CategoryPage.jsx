import { useState } from "react";
import ListItemCard from "../../components/features/ListItemCard";
import DetailModal from "../../components/features/DetailModal";

export default function CategoryPage({ title, subtitle, items, kind }) {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full max-w-3xl fade-in">
      <div className="mb-8">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <ListItemCard
            key={item.id}
            item={item}
            kind={kind}
            onOpen={setActive}
          />
        ))}
      </div>

      <DetailModal item={active} onClose={() => setActive(null)} />
    </div>
  );
}
