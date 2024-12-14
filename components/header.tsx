'use client'

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from 'next/navigation';
import { logout } from './logout';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
  
    const handleNavigation = (path) => {
      router.push(path);
      setIsOpen(false);
    };
  
    return (
      <header className="max-w-3xl mx-auto fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold">
                <span 
                  onClick={() => handleNavigation('/')} 
                  className="tracking-wider bg-clip-text text-primary/80 cursor-pointer hover:text-primary transition-colors duration-200"
                >
                  Next-FT
                </span>
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden sm:block">
              <ul className="flex items-center gap-6 font-medium">
                <li>
                  <span 
                    onClick={() => handleNavigation('/dashboard')} 
                    className="relative text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer py-2 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Dashboard
                  </span>
                </li>
                <li className="hover:opacity-80 transition-opacity"><ModeToggle /></li>
                <li>
                  <Button 
                    onClick={logout} 
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    Logout
                  </Button>
                </li>
              </ul>
            </nav>
  
            {/* Mobile Navigation with Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="sm:hidden hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">Navigation options</SheetDescription>
                </SheetHeader>
                <nav className="mt-8">
                  <ul className="flex flex-col gap-6 font-medium">
                    <li>
                      <span className="flex items-center justify-center">
                        <span className="bg-muted rounded-full px-4 py-2 hover:bg-muted/80 transition-colors duration-200">
                          <ModeToggle />
                        </span>   
                      </span>
                    </li>
                    <li>
                      <span 
                        onClick={() => handleNavigation('/')}
                        className="block text-center text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer py-2 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-1/2 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-16 after:-translate-x-1/2"
                      >
                        Home
                      </span>
                    </li>
                    <li>
                      <span 
                        onClick={() => handleNavigation('/dashboard')}
                        className="block text-center text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer py-2 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-1/2 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-24 after:-translate-x-1/2"
                      >
                        Dashboard
                      </span>
                    </li>
                    <li>
                      <span className="flex items-center justify-center mt-4">
                        <Button 
                          onClick={logout} 
                          variant="outline"
                          size="sm"
                          className="w-32 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        >
                          Logout
                        </Button>
                      </span>
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    );
};

export default Header;