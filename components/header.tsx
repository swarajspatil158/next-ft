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
                  className="tracking-wider bg-clip-text text-primary/80 cursor-pointer"
                >
                  Next-FT
                </span>
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden sm:block">
              <ul className="flex items-center gap-6 font-semibold">
                <li>
                  <span 
                    onClick={() => handleNavigation('/dashboard')} 
                    className="text-primary/90 hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    Dashboard
                  </span>
                </li>
                <li><ModeToggle /></li>
              </ul>
            </nav>
  
            {/* Mobile Navigation with Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="sm:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className='w-[320px] sm:w-[540px]'>
                
                <SheetHeader>
                  <SheetTitle className="sr-only">
                    <span className='flex items-center justify-between cursor-pointer'>
                      <span onClick={() => handleNavigation('/')}>Next-FT</span> 
                     
                      <span></span>
                    </span>
                  </SheetTitle>
                  <SheetDescription className="sr-only">Description goes here</SheetDescription>
                </SheetHeader>
                <nav className="mt-1">
                  <ul className="flex flex-col gap-1 font-semibold">
                  <li>
                      <span 
                       
                        className=" mx-auto text-primary hover:text-primary/80 transition-colors cursor-pointer font-thin flex items-center justify-center "
                      >
                       <span className='bg-muted rounded-full px-2'>
                       <ModeToggle />
                        </span>   
                      </span>
                    </li>
                    <li>
                      <span 
                        onClick={() => handleNavigation('/')}
                        className="text-primary/90 hover:text-primary/80 transition-colors cursor-pointer"
                      >
                        Home
                      </span>
                    </li>
                    <li>
                      <span 
                        onClick={() => handleNavigation('/dashboard')}
                        className="text-primary/90 hover:text-primary/80 transition-colors cursor-pointer"
                      >
                        Dashboard
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