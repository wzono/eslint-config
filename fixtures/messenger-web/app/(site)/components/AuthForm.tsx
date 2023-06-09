'use client'

import { useCallback, useState } from 'react'
import type { FieldValues, SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import Button from '@/app/components/Button'
import Input from '@/app/components/inputs/Input'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN')
  // state loading
  const [loading, setLoading] = useState(false)

  // toggle variant
  const toggleVariant = useCallback(() => {
    setVariant(variant === 'LOGIN' ? 'REGISTER' : 'LOGIN')
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    // if (variant === 'LOGIN') {
    // }

    // if (variant === 'REGISTER') {
    // }

    setLoading(false)
  }

  const socialAction = (action: string) => {
    setLoading(true)
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {
            variant === 'REGISTER' && (
              <Input
                errors={errors}
                label="Name"
                name="name"
                register={register}
              />
            )
          }
          <Input
            errors={errors}
            label="Email"
            name="email"
            register={register}
            type="email"
          />
          <Input
            errors={errors}
            label="Password"
            name="password"
            register={register}
            type="password"
          />
          <div>
            <Button
              block
              disabled={loading}
              htmlType="submit"
            >
              {variant === 'LOGIN' ? 'Login' : 'Register'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm
