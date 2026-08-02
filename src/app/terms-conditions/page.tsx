import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" />
      <section className="section-pad">
        <div className="container-page prose-page max-w-3xl">
          <p>
            These Terms and Conditions (“Terms”) govern your access to and use of the MotoGuru
            website, mobile application, and related services (collectively, the “Platform”), operated
            by MotoGuru Technologies Private Limited (“MotoGuru”, “Company”, “we”, “us”, or “our”).
          </p>
          <p>
            By accessing, browsing, or using the Platform, you agree to be bound by these Terms. If
            you do not agree, please do not use the Platform or its services. These Terms constitute a
            legally binding agreement under the laws of India.
          </p>

          <h2>1. Nature of the Platform</h2>
          <p>
            MotoGuru is a technology-enabled platform that helps car owners discover, compare, and
            connect with verified independent garages for vehicle servicing and repairs.
          </p>
          <ul>
            <li>Does not own or operate any garages</li>
            <li>Does not directly provide mechanical, repair, or maintenance services</li>
            <li>Acts only as a facilitator between users and third-party service providers</li>
          </ul>

          <h2>2. Eligibility</h2>
          <ul>
            <li>Be at least 18 years of age</li>
            <li>Have the legal capacity to enter into a binding contract</li>
            <li>Comply with applicable Indian laws</li>
          </ul>

          <h2>3. User Account &amp; Responsibilities</h2>
          <p>
            Provide accurate information, maintain confidentiality of login credentials, and be
            responsible for all activities under your account.
          </p>

          <h2>4. Services Offered</h2>
          <ul>
            <li>Browse verified garages</li>
            <li>Compare pricing, ratings, distance, and service inclusions</li>
            <li>Request estimates and track service progress</li>
            <li>Receive updates related to services</li>
          </ul>

          <h2>5. Estimates &amp; Additional Work</h2>
          <p>
            Initial costs shared are estimates. If additional issues are identified, a revised
            estimate must be approved by you before work continues. Final costs are determined by the
            garage based on actual work performed.
          </p>

          <h2>6. Payments</h2>
          <p>
            Payments may be collected directly by garages or via third-party payment processors.
            MotoGuru is not responsible for payment disputes between users and garages, but may assist
            in resolution.
          </p>

          <h2>7. Cancellations &amp; Refunds</h2>
          <p>
            Once a service is accepted and work has begun, cancellations may not be permitted.
            Refunds, if any, are subject to the garage’s policy and service status.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            MotoGuru shall not be liable for the quality of services provided by garages, delays or
            failures by third-party providers, or indirect, incidental, or consequential damages.
            Services are provided on an “as-is” and “as-available” basis.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Courts located in India shall have
            exclusive jurisdiction.
          </p>

          <h2>10. Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:support@motoguru.in" className="text-accent-dark">
              support@motoguru.in
            </a>
            <br />
            Phone: +91 00000 88888
          </p>
        </div>
      </section>
    </>
  );
}
