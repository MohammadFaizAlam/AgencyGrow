import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
    {
        title: "Phone Number",
        value: "Not available",
        icon: PhoneIcon
    },
    {
        title: "Address",
        value: "Mumbai, India",
        icon: MapPinIcon
    },
    {
        title: "Email",
        value: "agencygrow99@gmail.com",
        icon: MailIcon
    }
] as const;
