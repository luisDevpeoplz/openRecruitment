import React from 'react'
import { Button } from '../UI/Button'
import { TextField } from '../UI/Fields'
import Link from 'next/link'
import BackgroundIllustration from '../layout/BackgroundIlustration'

const ForgotPasswordForm = () => {
  return (
    <>
      <BackgroundIllustration
        width="900"
        height="900"
        className="hidden absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-gray-300 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)] sm:-top-9 sm:h-auto sm:block"
      />
      <h1 className="text-2xl font-semibold text-gray-900">
        Forgot your password?
      </h1>
      <p className="text-gray-600 mt-2">
        No worries, we&apos;ll send you a recovery link.
      </p>

      <form className="bg-white md:p-8 px-4 py-8 rounded-3xl my-4">
        <div className="space-y-6 mb-4">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <Button type="submit" color="primary" size="full">
          Send recovery link
        </Button>
        <Link
          href="/login"
          className="text-cyan-600 hover:underline mt-2 text-center block w-full"
        >
          Go back to log in
        </Link>
      </form>
    </>
  )
}

export default ForgotPasswordForm
