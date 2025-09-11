"use client";
import { DottedSeparator } from "@/components/dotted-separator";
import { useState } from "react";
import { useform } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email(),
})

const SignInCard = () => {
  const [email, setEmail] = useState<string>("");
  const [password, SetPassword] = useState<string>("");
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none ">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="email"
            value={""}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={""}
            onChange={(e) => SetPassword(e.target.value)}
            placeholder="Enter Password"
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} size={"lg"} className="w-full">
            Log in
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          className="w-full"
          variant={"secondary"}
          size={"lg"}
          disabled={false}
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>

        <Button
          className="w-full"
          variant={"secondary"}
          size={"lg"}
          disabled={false}
        >
          <FaGithub className="mr-2 size-5" />
          Login with Github
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
