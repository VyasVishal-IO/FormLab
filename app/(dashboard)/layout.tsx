import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center h-[70px] px-6 border-b border-gray-700 shadow-md bg-black sticky top-0 z-50">
        <Logo />
        <div className="flex items-center gap-6">
          <ThemeSwitcher />
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox:
                  "border-2 border-gray-600 hover:border-gray-400 transition-all duration-300 rounded-full",
              },
            }}
            afterSignOutUrl="/sign-in"
          />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex flex-col flex-grow px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-black text-gray-400 py-4 text-center border-t border-gray-700">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
