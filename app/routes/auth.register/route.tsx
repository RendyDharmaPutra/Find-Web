import { AuthPage } from "~/features/auth/components/layout/auth_page";
import { RegisterForm } from "~/features/auth/components/register/register_form";

export default function Register() {
  return (
    <AuthPage
      title="Halaman Registrasi"
      question="Sudah punya akun"
      text="Login di sini"
    >
      <RegisterForm />
    </AuthPage>
  );
}
