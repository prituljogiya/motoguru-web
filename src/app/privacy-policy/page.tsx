import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section-pad">
        <div className="container-page prose-page max-w-3xl">
          <p>
            MotoGuru Technologies Private Limited (“MotoGuru”, “we”, “our”, or “us”) values the trust
            you place in us. This Privacy Policy explains how we collect, use, store, and protect your
            information when you access or use our website, mobile application, or related services
            (collectively, the “Platform”).
          </p>
          <p>
            By accessing or using MotoGuru, you agree to the terms of this Privacy Policy. If you do
            not agree, please do not use our Platform or services. This Policy is published in
            accordance with the Information Technology Act, 2000 and applicable rules thereunder.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 18 years of age to use the Platform. By using MotoGuru, you confirm
            that you meet this requirement. Use by minors must be under parental or legal guardian
            supervision.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>a. Information You Provide</h3>
          <ul>
            <li>Name, email address, phone number</li>
            <li>Location details (city, area, pincode)</li>
            <li>Vehicle details</li>
            <li>Information shared while creating an account or contacting support</li>
            <li>Service-related preferences and inputs</li>
          </ul>
          <h3>b. Automatically Collected Information</h3>
          <ul>
            <li>Device details (IP address, browser, operating system)</li>
            <li>Usage data such as pages visited, actions taken, time spent</li>
            <li>Location data (if permitted by you)</li>
            <li>Log files, cookies, and similar technologies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>Connect users with relevant verified garages</li>
            <li>Enable service discovery, comparison, and communication</li>
            <li>Share estimates, service updates, and notifications</li>
            <li>Improve platform performance and user experience</li>
            <li>Resolve disputes, complaints, and support requests</li>
            <li>Monitor platform safety, security, and misuse</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
          <p>We do not sell or rent your personal information.</p>

          <h2>4. Pricing Transparency &amp; Service Updates</h2>
          <p>
            MotoGuru promotes transparency. Estimates shared are indicative and itemized. If
            additional issues are found, revised estimates require user approval before proceeding.
          </p>

          <h2>5. Sharing of Information</h2>
          <ul>
            <li>With partner garages only to fulfill service-related requests</li>
            <li>With trusted third-party service providers (technology, analytics, payments)</li>
            <li>When required by law, court orders, or legal processes</li>
            <li>In the event of a merger, acquisition, or restructuring</li>
          </ul>

          <h2>6. Cookies &amp; Tracking Technologies</h2>
          <p>
            MotoGuru uses cookies to enhance user experience, remember preferences, and analyze usage
            trends. You can manage or disable cookies through your browser settings.
          </p>

          <h2>7. User Rights</h2>
          <ul>
            <li>Access and review your information</li>
            <li>Request corrections or updates</li>
            <li>Request deletion of your account (subject to legal retention)</li>
            <li>Withdraw consent for non-essential communications</li>
          </ul>
          <p>
            Requests can be sent to:{" "}
            <a href="mailto:support@motoguru.in" className="text-accent-dark">
              support@motoguru.in
            </a>
          </p>

          <h2>8. Data Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect your information
            against unauthorized access, misuse, or loss.
          </p>

          <h2>9. Grievance Redressal</h2>
          <p>
            Grievance Officer, MotoGuru Technologies Private Limited
            <br />
            Email:{" "}
            <a href="mailto:support@motoguru.in" className="text-accent-dark">
              support@motoguru.in
            </a>
          </p>

          <h2>10. Governing Law</h2>
          <p>This Policy is governed by the laws of India.</p>
        </div>
      </section>
    </>
  );
}
