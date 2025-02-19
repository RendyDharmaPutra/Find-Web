import { AuthPage } from "~/features/auth/components/layout/auth_page";
import { LoginForm } from "~/features/auth/components/login/login_form";

export default function Login() {
  return (
    <AuthPage
      title="Halaman Login"
      question="Belum punya akun"
      text="Daftar di sini"
    >
      <LoginForm />
    </AuthPage>
  );
}
