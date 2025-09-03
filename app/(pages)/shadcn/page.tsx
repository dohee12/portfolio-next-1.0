"use client";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Description } from "@radix-ui/react-alert-dialog";

type myAlertVariant = "info" | "sucess" | "warn" | "error";

export default function ShadcnPage() {
  const myAlerts = [
    { variant: "info" },
    { variant: "sucess" },
    { variant: "warn" },
    { variant: "error" },
  ];

  return (
    <div className="p-20 space-y-12">
      <div className="space-y-8">
        <div className="text-3xl font-bold">Alert</div>
        {myAlerts.map((myAlerts, i) => (
          <Alert key={i} variant={myAlerts.variant as myAlertVariant}>
            <CheckCircle2Icon />
            <AlertTitle>{myAlerts.variant} Alert AlertTitle</AlertTitle>
            <AlertDescription>
              {myAlerts.variant} Alert AlertDescription
            </AlertDescription>
          </Alert>
        ))}
        <Alert variant="sucess">
          <CheckCircle2Icon />
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is an alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert>
          <PopcornIcon />
          <AlertTitle>
            This Alert has a title and an icon. No description.
          </AlertTitle>
        </Alert>
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Unable to process your payment.</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
      <div className="space-y-8">
        <div className="text-3xl font-bold">Alert Dialog</div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="space-y-8">
        <div className="text-3xl font-bold">Toaster (Sonner)</div>
        <Button onClick={() => toast("Hello World!")}>Default</Button>
        <Button
          onClick={() => {
            toast.success("sccess!");
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => {
            toast.error("error", { description: "에러가 발생했습니다." });
          }}
        >
          Error
        </Button>
        <Button
          onClick={async () => {
            await toast.promise(
              new Promise((resolve, reject) =>
                setTimeout(Math.random() > 0.5 ? reject : resolve, 1500)
              ),
              {
                loading: "블로그 업로드 중입니다.",
                success: "블로그 업로드가 완료되었습니다",
                error: "네트워크 에러가 발생했습니다.",
              }
            );
          }}
        >
          블로그 업로드
        </Button>
      </div>
    </div>
  );
}
