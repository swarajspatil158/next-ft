import { getSession } from "@/lib/auth";

export default async function Home() {
  const session = await getSession();
  return (
    <>
      <main className="flex-grow flex flex-col pt-24 relative max-w-3xl mx-auto w-full px-4">
        Home Page
      </main>
    </>
  );
}
