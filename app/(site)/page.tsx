import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
      <div
      className="
      flex
      min-h-full
      flex-col
      
      justify-center
      py-12
      sm:px-6
      lg:px-8
      bg-gray-100
      ">
        <div className="sm:mx-auto sm:w-full sm:mx-w-md">
            <Image
                alt="logo"
                height="48"
                width="48"
                className="mx-auto w-auto"
                src="/images/logo.png"
            />
            <h2 className="
             mt-6
             text-center
             text-3xl
             font-bold\tracking-tight
             text-gray-900
            ">
                Sign in to your account
            </h2>
            
              
            
        </div>
        <div className="mx-auto mt-4">
        <Link href="/sign-up">
          <Button className="bg-blue-900 hover:bg-blue-500">
                Sign In
          </Button>
        </Link>
        </div>
        
        
        {/* Auth Form */}
      </div>
    );
  }
  