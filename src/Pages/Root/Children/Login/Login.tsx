import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../state/store";
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { loginAsync } from "../../../../state/authorisation/authorisationSlice";

const schema = z.object({
    email: z.string().email().max(30),
    password: z.string().min(6).max(30),
})

type LoginFormFields = z.infer<typeof schema>

const Login = () => {

    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<LoginFormFields>({resolver: zodResolver(schema)})
    const dispatch = useDispatch<AppDispatch>();
    const { errors:loginErrors } = useSelector((state: RootState) => state.authorisation);
    const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
        await dispatch(loginAsync({email: data.email, password: data.password}))
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} type="text" placeholder="email"/>
            {errors.email && (<div>{errors.email?.message}</div>)}
            {loginErrors.email && (<div>{loginErrors.email[0]}</div>)}
            <input {...register('password')} type="text" placeholder="password"/>
            {errors.password && (<div>{errors.password?.message}</div>)}
            {loginErrors.password && (<div>{loginErrors.password[0]}</div>)}
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Loding...' : 'Submit'}</button>
            <button type="button" disabled={isSubmitting} onClick={() => reset()}>Reset</button>
            {errors.root && <div>{errors.root.message}</div>}
            {loginErrors.message && (<div>{loginErrors.message[0]}</div>)}
            
        </form>
    )
}

export default Login;