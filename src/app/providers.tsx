"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 300000
        }
    }
})

const Provider = ({ children, ...props }: ThemeProviderProps) => {

    return (
        <QueryClientProvider client={queryClient}>
            <NextThemesProvider {...props}>
                {children}
            </NextThemesProvider>
        </QueryClientProvider>
    )

};

export default Provider;