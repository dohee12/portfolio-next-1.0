export default function Title({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="text-center">
      <div className="tracking-widest">{subTitle}</div>
      <div className="text-4xl font-bold mt-2 text-gray-800">{title}</div>
    </div>
  );
}
