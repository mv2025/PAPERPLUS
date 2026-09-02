import React from 'react';
import { Typography } from '@/components/ui/Typography';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-[#faf6ec] pt-32 pb-24 text-[#243252] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DA2030]/10 text-[#DA2030] text-xs font-extrabold uppercase tracking-widest mb-4 border border-[#DA2030]/20">
            <ShieldCheck className="w-4 h-4" /> Legal &amp; Governance
          </span>
          <Typography variant="h1" className="text-[#141F42] text-4xl sm:text-5xl font-extrabold mb-4">
            Privacy Policy
          </Typography>
          <p className="text-[#5C6478] text-sm sm:text-base">
            Effective Date: January 1, 2026 | Paper Plus Calendars Pvt. Ltd.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white border border-[#E8E1D0] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 text-[#5C6478] leading-relaxed text-sm sm:text-base">
          
          <section>
            <h2 className="text-[#141F42] text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#DA2030]" /> 1. Overview &amp; Commitment
            </h2>
            <p>
              Paper Plus Calendars Pvt. Ltd. ("Paper Plus", "we", "our", or "us") respects your privacy and is committed to protecting the personal and business data shared with us. This Privacy Policy details how we collect, use, store, and safeguard your information when you visit our website, submit bulk quote enquiries, or place calendar orders.
            </p>
          </section>

          <section>
            <h2 className="text-[#141F42] text-xl font-bold mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#DA2030]" /> 2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information necessary to fulfill corporate and retail calendar orders and respond to commercial inquiries:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, business email, telephone number, job title, and company name.</li>
              <li><strong>Order &amp; Customization Data:</strong> Brand guidelines, logos, artwork files, delivery addresses, and billing details provided for customized printing.</li>
              <li><strong>Technical &amp; Usage Data:</strong> IP address, browser type, device information, and site interaction logs for analytics and optimization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#141F42] text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#DA2030]" /> 3. How We Use Your Information
            </h2>
            <p className="mb-3">Your information is strictly used for legitimate business operations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing quotes, custom calendar manufacturing, and managing Pan-India dispatch logistics.</li>
              <li>Communicating order status, proof approvals, and customer support.</li>
              <li>Improving site performance, manufacturing workflows, and catalog offerings.</li>
              <li>Complying with legal, tax, and accounting obligations under Indian corporate law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#141F42] text-xl font-bold mb-3">4. Data Sharing &amp; Security</h2>
            <p>
              We do not sell, rent, or trade your personal or corporate data to third parties. Data is shared exclusively with verified logistics partners, payment processors, and factory personnel strictly required to execute your order. All artwork and corporate logo files uploaded are stored securely and treated as confidential IP.
            </p>
          </section>

          <section>
            <h2 className="text-[#141F42] text-xl font-bold mb-3">5. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or your data, please contact our administrative team at:
            </p>
            <div className="mt-4 p-4 bg-[#FAF6EC] rounded-2xl border border-[#E8E1D0] text-xs sm:text-sm text-[#141F42] font-semibold">
              <p>Paper Plus Calendars Pvt. Ltd.</p>
              <p>4094, Nai Sarak, Old Delhi, Dai Wara, Chandni Chowk, Delhi - 110006</p>
              <p>Email: sales@paperplus.online | Phone: +91 98100 01279</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
