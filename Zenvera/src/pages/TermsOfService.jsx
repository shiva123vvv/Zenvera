import React from 'react';

const TermsOfService = () => {
    return (
        <div className="animate-fade-in">
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-20 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-6 text-zen-navy">Terms of Service</h1>
                    <p className="text-zen-gray">Last Updated: January 2026</p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="max-w-3xl mx-auto prose prose-lg text-zen-gray">
                    <h2 className="text-zen-navy">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                        In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                    </p>

                    <h2 className="text-zen-navy">2. Provision of Services</h2>
                    <p>
                        You agree and acknowledge that Zenvera is entitled to modify, improve or discontinue any of its services at its sole discretion
                        and without notice to you even if it may result in you being prevented from accessing any information contained in it.
                    </p>

                    <h2 className="text-zen-navy">3. Proprietary Rights</h2>
                    <p>
                        You acknowledge and agree that Zenvera may contain proprietary and confidential information including trademarks, service marks
                        and patents protected by intellectual property laws and international intellectual property treaties.
                    </p>

                    <h2 className="text-zen-navy">4. Termination of Agreement</h2>
                    <p>
                        The Terms of this agreement will continue to apply in perpetuity until terminated by either party without notice at any time for any reason.
                        Terms that are to continue in perpetuity shall be unaffected by the termination of this agreement.
                    </p>

                    <h2 className="text-zen-navy">5. Disclaimer of Warranties</h2>
                    <p>
                        You understand and agree that your use of Zenvera is entirely at your own risk and that our services are provided "As Is" and "As Available".
                        Zenvera does not make any express or implied warranties, endorsements or representations whatsoever as to the operation of the Zenvera website, information, content, materials, or products.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
