import { ClerkProvider } from "@clerk/nextjs";
import { esES } from '@clerk/localizations'
import { ThemeProvider } from ".";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

export default function RootProvider({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider localization={esES} appearance={{ baseTheme: dark }} >
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                storageKey="gamehub-theme"
                enableSystem
            >
                <Toaster theme="light" position="bottom-center" />
                {children}
            </ThemeProvider>
        </ClerkProvider>
    );
}