import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import VideoBackground from "@/components/VideoBg";
import userIcon from "../assets/png/user.png";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userDataFormType } from "@/types";
import { userDataSchema } from "@/schema";

export const Welcome = ({
  setUserName,
}: {
  setUserName: (name: string) => void;
}) => {
  const form = useForm({
    resolver: zodResolver(userDataSchema),
    defaultValues: {
      name: "",
    },
  });

  // Function to handle form submission
  async function onSubmit(data: userDataFormType) {
    setUserName(data.name);
  }

  return (
    <div className="h-screen relative gradientBg grid items-center justify-center">
      <VideoBackground />
      <div className="relative z-10 flex flex-col justify-center items-center w-full">
        <div className="gradientBg h-24 w-24 rounded-full">
          <img src={userIcon} className="object-cover" />
        </div>
        <h1 className="text-white text-2xl my-2">Welcome</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid items-center justify-center"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-3">
              Continue
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
