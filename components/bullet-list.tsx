export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
