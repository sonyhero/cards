import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledCheckbox } from '../../controlled/controlled-checkBox'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/textfield'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  rememberMe: z.boolean().default(false),
})

type LoginFormSchema = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <TextField
        {...register('email')}
        errorMessage={errors.email?.message}
        label={'email'}
        type={'default'}
      />
      <TextField
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
        type={'default'}
      />
      <ControlledCheckbox
        variant={'withText'}
        checkBoxText={'remember me'}
        control={control}
        name={'rememberMe'}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
