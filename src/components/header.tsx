import Link from "next/link";

type HeadersProps = {
  title: string;
  linkhref?: string;  // opsional
  Linktitle?: string; // opsional
};

const Headers = ({ title, linkhref, Linktitle }: HeadersProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-extrabold text-white tracking-tight">
        {title}
      </h1>
       {/* opsional rendering link */}
      {linkhref && Linktitle && (
        <Link href={linkhref} className="text-2xl underline font-semibold">
          {Linktitle}
        </Link>
      )}
    </div>
  );
};

export default Headers;