"use client";

import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();

  const Signin = async (formData: FormData) => {
    const code = formData.get("text") as string;
    const tryLogin = await login(code);
    if (tryLogin.success) {
      router.push("/");
    }
  };

  return (
    <main className="flex-grow flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Enter your access code to continue
          </CardDescription>
        </CardHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            Signin(new FormData(e.currentTarget));
          }}
        >
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                name="text"
                type="text"
                required
                placeholder="Enter your access code"
                className="w-full"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              <KeyRound className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}