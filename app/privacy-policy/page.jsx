import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy",
});

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p>Last updated: March 2026</p>
        <p>
          At Brihaspati Cast Pvt. Ltd., we respect your privacy and are committed to protecting any personal information you share with us through our website.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <p>
          When you use our website, we may collect information you provide via our contact forms, such as your name, email address, phone number, and company information.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <p>
          The information we collect is used solely for the purpose of responding to your inquiries and providing you with the services you requested. We do not sell or share your information with third parties for marketing purposes.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
        <p>
          We use cookies to improve your browsing experience and analyze website traffic. You can choose to disable cookies in your browser settings.
        </p>
      </div>
    </div>
  );
}
