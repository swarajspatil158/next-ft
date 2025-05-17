'use client'

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
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
import { TokenPayload } from '@/types/token';

const Header = ({ session } : { session: TokenPayload | null }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
  
    const handleNavigation = (path: string) => {
      router.push(path);
      setIsOpen(false);
    };
  
    return (
      <header className="absolute right-0 z-50 p-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                >
                  <Menu className="" />
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
                    {session ? 
                    <li>
                      <span className="flex items-center justify-center mt-4">
                        <Button 
                          onClick={logout} 
                          variant="outline"
                          size="sm"
                          className=""
                          >
                          Logout
                        </Button>
                      </span>
                    </li>
                          : null}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
        
       
      </header>
    );
};

export default Header;