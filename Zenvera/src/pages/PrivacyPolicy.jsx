import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="animate-fade-in">
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-20 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-6 text-zen-navy">Privacy Policy</h1>
                    <p className="text-zen-gray">Last Updated: January 2026</p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="max-w-3xl mx-auto prose prose-lg text-zen-gray">
                    <h2 className="text-zen-navy">1. Introduction</h2>
                    <p>
                        Welcome to Zenvera. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="text-zen-navy">2. Important Information and Who We Are</h2>
                    <p>
                        Zenvera is the controller and responsible for your personal data. If you have any questions about this
                        privacy policy, please contact us using the details provided on our Contact page.
                    </p>

                    <h2 className="text-zen-navy">3. The Data We Collect</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul>
                        <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                    </ul>

                    <h2 className="text-zen-navy">4. How We Use Your Personal Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    </ul>

                    <h2 className="text-zen-navy">5. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>

                    <h2 className="text-zen-navy">6. Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
                        Cookies are files with small amount of data which may include an anonymous unique identifier.
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>

                    <h2 className="text-zen-navy">7. Third-Party Links</h2>
                    <p>
                        This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you.
                        We do not control these third-party websites and are not responsible for their privacy statements.
                    </p>

                    <h2 className="text-zen-navy">8. Your Legal Rights</h2>
                    <p>
                        Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct, erase, restrict, transfer, or object to processing of your personal data.
                    </p>

                    <h2 className="text-zen-navy">9. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us:
                        <br />
                        - By email: privacy@zenvera.com
                        <br />
                        - By visiting this page on our website: <a href="/contact" className="text-zen-primary hover:underline">Contact Us</a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
