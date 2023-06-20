import React from 'react'
import { Button } from '../UI/Button'
import { TextField } from '../UI/Fields'
import Link from 'next/link'
import BackgroundIllustration from '../UI/BackgroundIlustration'

const LoginForm = () => {
  return (
    <div className="">
      <BackgroundIllustration
        width="900"
        height="900"
        className="hidden absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-gray-300 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)] sm:-top-9 sm:h-auto sm:block"
      />
      <h1 className="text-2xl font-semibold text-gray-900">
        Sign in to your account
      </h1>
      <p className="text-gray-600 mt-2">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-cyan-600 hover:underline">
          Sign up here
        </Link>
      </p>

      <form className="bg-white p-8 rounded-3xl my-4">
        <div className="space-y-6">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <Link
            href="/forgot-password"
            className="text-cyan-600 hover:underline mt-1"
          >
            Forgot your password?
          </Link>
        </div>
        <Button type="submit" color="primary" className="mt-8 w-full">
          Sign in to account
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
