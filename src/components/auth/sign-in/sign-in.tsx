import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkBox'
import { ControlledTextField } from '../../ui/controlled/controlled-textField'
import { Typography } from '../../ui/typography'

import s from './sign-in.module.scss'

const sigInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  rememberMe: z.boolean().default(false),
})

type SignInFormSchema = z.infer<typeof sigInSchema>

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(sigInSchema),
  })

  const onSubmit = (data: SignInFormSchema) => {
    console.log(data)
  }

  return (
    <Card className={s.signBlock}>
      <Typography variant={'large'} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          className={s.field}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
          type={'default'}
          control={control}
        />
        <ControlledTextField
          className={s.field}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
          control={control}
        />
        <ControlledCheckbox
          variant={'withText'}
          label={'Remember me'}
          control={control}
          name={'rememberMe'}
        />
        <div className={s.forgotWrapper}>
          <Button as={'a'} variant={'link'}>
            <Typography variant={'body2'}>Forgot Password?</Typography>
          </Button>
        </div>

        <Button fullWidth={true} className={s.submit} type="submit">
          Sign In
        </Button>
      </form>
      <Typography variant={'body2'}>Already have an account?</Typography>
      <Button as={'a'} variant={'link'} className={s.signUp}>
        Sign Up
      </Button>
    </Card>
  )
}
