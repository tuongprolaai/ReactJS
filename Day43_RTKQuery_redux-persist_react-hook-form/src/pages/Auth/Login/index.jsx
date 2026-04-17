import { useForm } from "react-hook-form";
import * as authService from "@/services/auth/authService";
import { useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";
import { useCurrentUser } from "@/features/auth";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const currentUser = useCurrentUser();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (currentUser) {
      const continuePath = params.get("continue") || "/";
      navigate(continuePath);
    }
  }, [currentUser, navigate, params]);

  const onSubmit = async (data) => {
    const { access_token, refresh_token } = await authService.login(data);
    if (access_token) {
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      dispatch(authService.getCurrentUser());
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("email", { required: "Vui lòng nhập trường này" })}
          placeholder="Enter your email..."
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}
        <br />
        <input
          type="password"
          {...register("password", {
            required: "Vui lòng nhập trường này",
            minLength: 8,
          })}
          placeholder="Enter your password..."
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
