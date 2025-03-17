"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// バリデーションスキーマ
const formSchema = z.object({
  name: z.string().min(2, {
    message: "お名前は2文字以上入力してください",
  }),
  email: z.string().email({
    message: "有効なメールアドレスを入力してください",
  }),
  subject: z.string().min(2, {
    message: "件名は2文字以上入力してください",
  }),
  message: z.string().min(10, {
    message: "メッセージは10文字以上入力してください",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // フォームの初期化
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // フォーム送信処理
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(
        "https://contact-api.haruki-ito0044.workers.dev",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        throw new Error(result.error || "送信に失敗しました");
      }
    } catch (error) {
      setErrorMessage(
        "送信中にエラーが発生しました。時間をおいて再度お試しください。"
      );
      console.error("Contact form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900/30">
        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
        <AlertTitle className="text-green-800 dark:text-green-300 text-lg font-medium mb-2">
          お問い合わせありがとうございます
        </AlertTitle>
        <AlertDescription className="text-green-700 dark:text-green-300/90">
          <p>
            メッセージが正常に送信されました。内容を確認の上、順次ご返信いたします。
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="mt-4 border-green-300 text-green-700 hover:bg-green-100 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/30"
          >
            新しいお問い合わせを作成
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* エラーメッセージ */}
        {errorMessage && (
          <Alert variant="destructive">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* 名前フィールド */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>お名前</FormLabel>
                <FormControl>
                  <Input placeholder="山田 太郎" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* メールフィールド */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* 件名フィールド */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>件名</FormLabel>
              <FormControl>
                <Input placeholder="お問い合わせの件名" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* メッセージフィールド */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メッセージ</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="お問い合わせ内容をご記入ください"
                  className="min-h-32 resize-y"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                できるだけ詳しく記入いただくとスムーズです
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting} className="px-8">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                送信中...
              </>
            ) : (
              "送信する"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
