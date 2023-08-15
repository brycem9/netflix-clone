import Head from "next/head";
import Link from "next/link";

function Plans() {
  return (
    <div>
      <Head>
        <title> Netflix</title>
        <link rel="icon" href="" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button className="text-lg font-medium hover:underline">
          Sign out
        </button>
      </header>
    </div>
  );
}

export default Plans;
