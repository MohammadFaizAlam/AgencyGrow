import { Metadata } from "next";

export const generateMetadata = ({
    // title = `${process.env.NEXT_PUBLIC_APP_NAME} `,
    title = `AgencyGrow | Transform your online presence`,
    description = ``,
    image = "",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/icons/AgencyGrow.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/icons/AgencyGrow.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
});
