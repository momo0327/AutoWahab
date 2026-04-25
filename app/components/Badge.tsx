interface BadgeProps {
  content: string;
}

export default function Badge({ content }: BadgeProps) {
  return (
    <span
      className="inline-block rounded-full text-dark-blue px-4 py-2 font-arial text-sm font-bold"
      style={{ backgroundColor: '#EAE8E8' }}
    >
      {content}
    </span>
  );
}
