import SideBar from "@/components/SideBar";

export default function Page() {
  return (
    <main className="grid grid-cols-12 gap-4 w-full px-4 py-6">
      {/* Sidebar */}
      <SideBar/>

      {/* Main Content */}
      <section className="col-span-12 md:col-span-6 bg-white dark:bg-black p-4 rounded-lg shadow">
        <h1 className="text-4xl font-extrabold mb-2">♥️ Hii</h1>
        <p>Main content goes here...</p>
      </section>

      {/* Ad Section */}
      <aside className="col-span-2 hidden lg:block bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
        <h2 className="text-lg font-bold">Ads</h2>
        <p>Sponsored content</p>
      </aside>
    </main>
  );
}
