import Providers from "@/components/global/providers";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import LenisProvider from '@/components/LenisProvider'

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-[#050505] text-foreground font-base antialiased dark",
                    base.variable,
                    heading.variable,
                )}
            >
                  <LenisProvider>
                    <Providers>
                        {children}
                    </Providers>
                </LenisProvider>
            </body>
        </html>
    );
};
