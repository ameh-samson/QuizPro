import VideoBackground from "@/components/VideoBg";
import userIcon from "../assets/png/user.png";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const Welcome = () => {
  const form = useForm();

  return (
    <div className="h-screen relative gradientBg grid items-center justify-center">
      <VideoBackground />
      <div className="relative z-10 flex flex-col justify-center items-center">
        <div className="gradientBg h-24 w-24 rounded-full">
          <img src={userIcon} className="object-cover" />
        </div>
        <h1 className="text-white text-2xl my-2">Welcome</h1>

        <Form {...form}>
          <form className="grid items-center justify-center">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Please Enter your name" {...field} />
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
