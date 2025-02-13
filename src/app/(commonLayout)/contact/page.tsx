import ContactMe from "@/components/views/ContactMe";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "HUMAYUN | Contact",
    
  };
const ContactPage = () => {
    return (
        <div>
            <ContactMe/>
        </div>
    );
};

export default ContactPage;