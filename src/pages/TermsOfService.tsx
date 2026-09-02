import React from 'react';
import { Typography } from '@/components/ui/Typography';
import { FileText, CheckCircle2, ShieldAlert, Award } from 'lucide-react';

export const TermsOfService = () => {
  return (
    <div className="w-full bg-[#faf6ec] pt-32 pb-24 text-[#243252] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DA2030]/10 text-[#DA2030] text-xs font-extrabold uppercase tracking-widest mb-4 border border-[#DA2030]/20">
            <FileText className="w-4 h-4" /> Commercial Terms
          </span>
          <Typography variant="h1" className="text-[#141F42] text-4xl sm:text-5xl font-extrabold mb-4">
            Terms of Service
          </Typography>
          <p className="text-[#5C6478] text-sm sm:text-base">
            Effective Date: January 1, 2026 | Paper Plus Calendars Pvt. Ltd.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white border border-[#E8E1D0] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 text-[#5C6478] leading-relaxed text-sm sm:text-base">
          
          <section>
            <h2 className="text-[#141F42] text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#DA2030]" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website, requesting bulk calendar samples, or placing manufacturing orders with Paper Plus Calendars Pvt. Ltd., you agree to be bound by these Terms of Service. These terms govern all corporate gifting, wholesale, and retail transactions.
            </p>
          </section>

          <section>
            <h2 className="text-[#141F42] text-xl font-bold mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#DA2030]" /> 2. Manufacturing &amp; Customization Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Proof Approvals:</strong> Prior to high-volume offset printing or gold foil stamping, digital or physical proofs are submitted for client sign-off. Production begins only upon formal approval.</li>
              <li><strong>Design Originality:</strong> Paper Plus guarantees 100% original annual artwork portfolios for devotional and executive series. Custom branding remains the property of the client.</li>
              <li><strong>Color Tolerance:</strong> While we maintain strict 99.8% Delta-E Pantone calibration, minor color variances inherent to heavy paper stocks and foil stamping may occur across batch runs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#141F42] text-xl font-bold mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#DA2030]" /> 3. Payment &amp; Dispatch Terms
            </h2>
            <p className="mb-3">
              Standard commercial terms for custom B2B calendar manufacturing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Production schedules are confirmed upon receipt of advance payment as per the agreed proforma invoice.</li>
              <li>Pan-India dispatch dates are subject to timely proof approvals and cleared balances prior to factory release.</li>
              <li>In-transit insurance and transit damage claims are managed as per factory dispatch protocol.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#141F42] text-xl font-bold mb-3">4. Intellectual Property</h2>
            <p>
              All calendar artwork, Vedic shloka illustrations, box structures, and proprietary branding published on this platform are owned by Paper Plus Calendars Pvt. Ltd. Unauthorized reproduction of calendar layouts or trade dress is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-[#141F42] text-xl font-bold mb-3">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any legal proceedings arising from transactions shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
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

export default TermsOfService;
