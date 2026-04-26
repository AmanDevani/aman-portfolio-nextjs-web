"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2Icon } from "lucide-react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    name: z
      .string()
      .trim()
      .min(3, "Your name should have at least 3 characters.")
      .max(50, "Your name can't be longer than 50 characters."),
    email: z
      .string()
      .trim()
      .min(1, "Email address is required.")
      .email("Enter a valid email address.")
      .max(50, "Email address can't be longer than 50 characters."),
    message: z
      .string()
      .trim()
      .min(5, "Your message should have at least 5 characters.")
      .max(1000, "Your message can't be longer than 1000 characters."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios
        .post("/api/contact", {
          ...values,
        })
        .then((res) => {
          setLoading(false);
          toast.success(res?.data?.message || "Message sent successfully!");
          form.reset({
            name: "",
            email: "",
            message: "",
          });
        });
    } catch {
      toast.error("Failed to send message");
      setLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter name..." {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2Icon className="animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
