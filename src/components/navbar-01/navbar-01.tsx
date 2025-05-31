import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar01Page = () => {
  return (
    <div>
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="flex-grow flex items-center justify-end">
            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />

            {/* Mobile Menu */}
            <div className="md:hidden ml-4">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar01Page;
