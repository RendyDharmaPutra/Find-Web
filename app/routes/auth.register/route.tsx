import { ActionFunctionArgs } from "@remix-run/node";
import { AuthPage } from "~/features/auth/components/layout/auth_page";
import { RegisterForm } from "~/features/auth/components/register/register_form";
import { getRegisterData } from "~/features/auth/hooks/get_register_data";
import { postAuth } from "~/features/auth/utils/post_auth";

export default function Register() {
  return (
    <AuthPage
      title="Halaman Registrasi"
      route="login"
      question="Sudah punya akun"
      text="Login di sini"
    >
      <RegisterForm />
    </AuthPage>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();

  const data = getRegisterData(body);

  const response = await postAuth("register", data);

  console.log(response);

  return null;
}
