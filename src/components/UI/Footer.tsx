import React from 'react'

import { Button } from './Button'
import { Container } from './Container'
import { NavLinks } from './NavLinks'
import { TextField } from './Fields'
import { Logo } from './Logo'

const Footer = () => {
  const navOptions: [string, string][] = [
    ['Features', '#features'],
    ['Reviews', '#reviews'],
    ['Pricing', '#pricing'],
    ['FAQs', '#faqs'],
  ]

  return (
    <footer className="border-t border-gray-200 w-screen">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div className="flex flex-col gap-8 w-full justify-between items-center lg:flex-row">
            <div className="flex items-center text-gray-900 w-full justify-between lg:w-fit">
              <Logo />
              <div className="ml-4">
                <p className="text-base font-semibold">Open Recruitment</p>
                <p className="mt-1 text-sm">
                  Hire the best people for your team
                </p>
              </div>
            </div>
            <nav className="flex gap-8">
              <NavLinks links={navOptions} />
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6 w-full">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              id="email"
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="primary" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
