import ThemeProvider from "@/theme/theme-provider";
import "./globals.css";
import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebarSHAD";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="grid grid-cols-12 gap-4 w-full max-w-[1524px] mx-auto px-14 h-screen md:-mx-[70px]">
            {/* Sidebar Section */}
            <aside className="col-span-3 hidden md:block p-4 border-2 border-dotted border-b-black dark:border-b-gray-400 shadow-md dark:shadow-md h-full overflow-hidden">
              <SideBar />
            </aside>

            {/* Main Content */}
            <section className="col-span-7 bg-white dark:bg-black p-4 rounded-md shadow h-full overflow-auto">
              {children}
            </section>

            {/* Ad Section */}
            <aside className="col-span-2 hidden lg:block p-4 border-2 border-dotted border-b-black dark:border-b-gray-400 shadow-md dark:shadow-md h-full overflow-hidden">
              <h2 className="text-lg font-bold">Ads</h2>
              <p>Sponsored content</p>
            </aside>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
