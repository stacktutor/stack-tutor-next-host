import ThemeProvider from "@/theme/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AppSidebar } from "@/components/Sidebar";

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

          <main>
            
          </main>

          <main className="grid grid-cols-12 gap-4 w-full px-14 h-screen">

            {/* Sidebar Section  */}
            <aside className="col-span-3 border-b-black dark:border-b-gray-400 shadow-md dark:shadow-md">
                <AppSidebar />
            </aside>

            {/* Main Content */}
            <section className="col-span-7  bg-white dark:bg-black p-4 rounded-md shadow">
                {children}
            </section>

            {/* Ad Section */}
            <aside className="col-span-2 hidden lg:block p-4 border-2 border-dotted border-b-black dark:border-b-gray-400 shadow-md dark:shadow-md">
              <h2 className="text-lg font-bold">Ads</h2>
              <p>Sponsored content</p>
            </aside>
          </main>

          
        </ThemeProvider>
      </body>
    </html>
  );
}
