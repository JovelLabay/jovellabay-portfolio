export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-muted">
      {items.map((item) => (
        <li key={item} className="-indent-4 pl-4">
          <span aria-hidden="true">— </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
