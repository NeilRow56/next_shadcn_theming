import { SignUpForm } from "../components/sign-up";


const SignUpPage = () => {
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col">
        <div className="bg-white min-w-screen flex-grow  p-4  rounded-lg m-2">
      <SignUpForm  />
      </div>
    </div>
  );
};

export default SignUpPage;