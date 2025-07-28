"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function ContactUs() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data) {
    console.log("Data");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Full Name</FormLabel> */}
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Full Name"
                    className="rounded-none border-t-0 border-l-0 border-r-0 border-b-amber-50 text-sm focus:border-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email address</FormLabel> */}
                <FormControl>
                  <Input
                    placeholder="Email address"
                    type="email"
                    {...field}
                    className="rounded-none border-t-0 border-l-0 border-r-0 border-b-amber-50 text-sm focus:border-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Phone Number</FormLabel> */}
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Phone Number"
                    {...field}
                    className="rounded-none border-t-0 border-l-0 border-r-0 border-b-amber-50 text-sm focus:border-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Full Name</FormLabel> */}
                <FormControl>
                  <Select>
                    <SelectTrigger className="text-[#4c5167] w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-amber-50 text-sm focus:border-0">
                      <SelectValue placeholder="Select a Practice" />
                    </SelectTrigger>
                    <SelectContent className="bg-white ">
                      <SelectGroup>
                        <SelectItem value="sectors">Sectors</SelectItem>
                        <SelectItem value="lawer">Lawer</SelectItem>
                        <SelectItem value="clients">Clients</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Message</FormLabel> */}
                <FormControl>
                  <Textarea
                    placeholder="Type your message here."
                    className="rounded-none border-t-0 border-l-0 border-r-0 border-b-amber-50 text-sm focus:border-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-[#D2B48C]">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
