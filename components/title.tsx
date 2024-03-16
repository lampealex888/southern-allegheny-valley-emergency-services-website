import Container from "@/components/container";

export default function Title({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const html = children ? children.toString() : "";
  return (
    <div className="bg-base-100 text-base-content">
      <div className="container mx-auto px-5">
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none py-8 text-center md:text-left"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
