import React from 'react'
import { Button, Box } from '@mui/material'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import LoginTextFeild from './loginTextField'
import { useSelector, useDispatch } from 'react-redux';
import FormControlLcabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { login } from '../../store/user';
import { getUser } from '../../store/user';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
export default function LoginForm({
}) {
    const dispatch = useDispatch()

    // const user = useSelector((state)=> getUser(state))
    const INITIAL_FORM_STATE = {
        userName: "",
        password: ""

    }

    const FORM_VALIDATION = Yup.object().shape({
        userName: Yup.string().min(3).required().matches(/^(\S+$)/, 'User Name can not be only space'),
        password: Yup.string().required().min(4).matches(/^(\S+$)/, 'Password can not be only space')
    })
    const user = useSelector((state) => getUser(state))

    return (

        <Formik
            initialValues={{
                ...INITIAL_FORM_STATE
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={
                values => {
                    dispatch(login(values.userName, values.password))
                }
            }>
            <Form>
                <p>{user?.error ? <Alert severity="error">{user.error}</Alert> : "  "}</p>
                <LoginTextFeild
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="User Name"
                    name="userName"
                    autoComplete="email"
                    autoFocus />
                <LoginTextFeild
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"

                />
                {/* <FormControlLcabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                /> */}
                <Button
                    type="submit"
                    fullWidth
                    // variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    variant="outlined"
                    size = "large"
                    // onClick={() => {
                    // }}
                >
                    {user?.loading ? <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box> : "Sign In"}
                </Button>
            </Form>
        </Formik>
    )
}


