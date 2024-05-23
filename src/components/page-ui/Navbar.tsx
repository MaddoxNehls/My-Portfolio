'use client';

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

import { ModeToggle } from '@/components/page-ui/ModeToggle';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <NavbarComponent className="top-2" />
    </div>
  );
}

function NavbarComponent({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn('fixed inset-x-0 top-10 mx-auto max-w-2xl z-50', className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center space-x-4">
          <MenuItem setActive={setActive} active={active} item="Navigation">
            <div className="flex flex-col space-y-4 text-sm text-foreground">
              <HoveredLink href="#landing-page">Landing Page</HoveredLink>
              <HoveredLink href="#about-me">About Me</HoveredLink>
              <HoveredLink href="#experience">Experience</HoveredLink>
              <HoveredLink href="#skills">Skills</HoveredLink>
              <HoveredLink href="#projects">Projects</HoveredLink>
              <HoveredLink href="#contact-me">Contact Me</HoveredLink>
            </div>
          </MenuItem>
          <a
            href="https://www.linkedin.com/in/maddox-nehls/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center transition-transform duration-200 hover:scale-110 hover:text-primary"
          >
            <LinkedInLogoIcon className="size-9 text-foreground" />
          </a>
          <a
            href="https://github.com/MaddoxNehls"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center transition-transform duration-200 hover:scale-110 hover:text-primary"
          >
            <GitHubLogoIcon className="size-9 text-foreground" />
          </a>
          <ModeToggle />
        </div>
      </Menu>
    </div>
  );
}
