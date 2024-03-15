import { Children } from "react";

export default function pageContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-around max-w-7xl mx-auto">
      {children}
    </div>
  );
}
