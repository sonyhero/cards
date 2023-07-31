import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Typography, Card } from '../../ui'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkBox'
import { ControlledTextField } from '../../ui/controlled/controlled-textField'

import s from './sign-in.module.scss'

const sigInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  rememberMe: z.boolean().default(false),
})

type SignInFormSchema = z.infer<typeof sigInSchema>

export const SignIn = () => {
  const { control, handleSubmit } = useForm<SignInFormSchema>({
    resolver: zodResolver(sigInSchema),
  })

  const onSubmit = (data: SignInFormSchema) => {
    console.log(data)
  }

  return (
    <Card className={s.signBlock}>
      <Typography className={s.title} variant={'large'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          name={'email'}
          label={'Email'}
          type={'default'}
          control={control}
          className={s.email}
        />
        <ControlledTextField
          name={'password'}
          label={'Password'}
          type={'password'}
          control={control}
          className={s.password}
        />
        <ControlledCheckbox
          control={control}
          name={'rememberMe'}
          variant={'withText'}
          label={'Remember me'}
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
      <Typography variant={'body2'} className={s.question}>
        {`Don't have an account?`}
      </Typography>
      <Button as={'a'} variant={'link'} className={s.signUp}>
        Sign Up
      </Button>
    </Card>
  )
}
