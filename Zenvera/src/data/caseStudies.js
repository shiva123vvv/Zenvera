export const caseStudies = [
    {
        id: 1,
        title: 'NeoBank Dashboard Reimagined',
        slug: 'neobank-dashboard-reimagined',
        client: 'FinTech Startup',
        category: 'Finance',
        challenge: 'The startup needed a scalable payment platform in 3 months to handle increasing transaction volume. Their existing MVP was struggling with concurrency issues and lacked real-time analytics for fraud detection.',
        solution: 'We built a robust microservices architecture using React for the frontend and Node.js for the backend. The system was deployed on AWS with auto-scaling groups. We implemented real-time analytics using Apache Kafka and specific fraud detection algorithms.',
        results: 'The new platform achieved 40% faster transactions and maintained 99.9% uptime during peak loads. It successfully handled over 1M+ transactions/month within the first quarter.',
        details: 'Our team worked closely with the stakeholders to define the core financial flows. We prioritized security compliance (PCI DSS) and user experience. The dashboard features dark mode, customizable widgets, and instant transaction notifications.',
        technologies: ['React', 'Node.js', 'AWS', 'Kafka', 'PostgreSQL'],
        stats: [
            { label: 'Faster Transactions', value: '40%' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Transactions/Month', value: '1M+' }
        ],
        image: '/src/assets/case_study_fintech.png'
    },
    {
        id: 2,
        title: 'Patient-First Portal',
        slug: 'patient-first-portal',
        client: 'Healthcare Provider',
        category: 'Healthcare',
        challenge: 'A legacy system was causing operational delays and patient data management issues. Patients had to physically visit or call to get simple appointments or test results.',
        solution: 'We modernized the platform with a secure cloud migration to a HIPAA-compliant infrastructure. We developed a user-friendly mobile app and web portal allowing patients to book appointments, view records, and chat with doctors securely.',
        results: 'The portal led to a 60% reduction in administrative processing time. Data accuracy improved significantly, and patient satisfaction scores hit 98% due to the ease of access.',
        details: 'Security was paramount. We implemented end-to-end encryption and multi-factor authentication. The interface was designed with accessibility in mind for elderly patients.',
        technologies: ['React Native', 'Python Django', 'Azure', 'PostgreSQL'],
        stats: [
            { label: 'Admin Reduction', value: '60%' },
            { label: 'Patient Satisfaction', value: '98%' },
            { label: 'Data Accuracy', value: '100%' }
        ],
        image: '/src/assets/case_study_health.png'
    },
    {
        id: 3,
        title: 'Fashion Retail Mobile App',
        slug: 'fashion-retail-mobile-app',
        client: 'E-commerce Retailer',
        category: 'Retail',
        challenge: 'The retailer was experiencing high bounce rates and lost sales due to slow website performance. They lacked a dedicated mobile presence for their growing Gen Z audience.',
        solution: 'We performed unique frontend optimization and implemented a Progressive Web App (PWA) alongside a native mobile app. We integrated a global CDN to ensure sub-second load times worldwide.',
        results: 'Page load times improved by 75%, directly contributing to a 40% increase in conversions. Mobile sales doubled within three months of the app launch.',
        details: 'The app features AI-powered product recommendations, a "try-on" augmented reality feature, and seamless one-tap checkout. We focused heavily on visual fidelity and smooth animations.',
        technologies: ['Flutter', 'Firebase', 'GraphQL', 'Shopify API'],
        stats: [
            { label: 'Faster Load Times', value: '75%' },
            { label: 'Conversion Increase', value: '40%' },
            { label: 'Mobile Sales', value: '2x' }
        ],
        image: '/src/assets/case_study_ecommerce.png'
    },
    {
        id: 4,
        title: 'Smart Logistics Tracking',
        slug: 'smart-logistics-tracking',
        client: 'Logistics Company',
        category: 'Logistics',
        challenge: 'An inefficient manual tracking system was causing delivery delays and customer complaints. Drivers were struggling with optimal route planning.',
        solution: 'We developed a custom mobile app for drivers with real-time GPS tracking and dynamic route optimization. A customer portal was created for real-time shipment updates.',
        results: 'Deliveries became 30% faster due to optimized routes. Customer complaints dropped by 50%, and operational transparency improved drastically.',
        details: 'The system integrates with Google Maps API and uses machine learning to predict delivery windows. It also handles digital proof of delivery signatures.',
        technologies: ['React', 'Node.js', 'Google Maps API', 'MongoDB'],
        stats: [
            { label: 'Faster Deliveries', value: '30%' },
            { label: 'Complaint Reduction', value: '50%' },
            { label: 'Route Efficiency', value: '+25%' }
        ],
        image: '/src/assets/process_planning.png' // Placeholder if not exists
    },
    {
        id: 5,
        title: 'EdTech Scaling Solution',
        slug: 'edtech-scaling-solution',
        client: 'Education Platform',
        category: 'Education',
        challenge: 'The platform crashed frequently during peak enrollment periods, unable to handle concurrent users. This resulted in lost revenue and student frustration.',
        solution: 'We re-architected the backend to use a serverless scalable cloud architecture with load balancing and auto-scaling capabilities. We optimized database queries and caching layers.',
        results: 'The system successfully handled 10K+ concurrent users without downtime. Uptime reached 99.5%, and infrastructure costs were actually reduced by 40% due to on-demand scaling.',
        details: 'We introduced a micro-learning framework allowing for faster content delivery. The new architecture supports video streaming and interactive quizzes at scale.',
        technologies: ['AWS Lambda', 'DynamoDB', 'Redis', 'React'],
        stats: [
            { label: 'Concurrent Users', value: '10K+' },
            { label: 'Uptime', value: '99.5%' },
            { label: 'Cost Reduction', value: '40%' }
        ],
        image: '/src/assets/service_web.png' // Placeholder
    },
    {
        id: 6,
        title: 'Enterprise Content Management',
        slug: 'enterprise-content-management',
        client: 'Media Company',
        category: 'Technology',
        challenge: 'Their existing Content Management System (CMS) was too complex for non-technical staff, leading to bottlenecks in publishing news and articles.',
        solution: 'We built a custom HEADLESS CMS with an intuitive drag-and-drop interface, automated approval workflows, and integrated real-time analytics.',
        results: 'Content publishing became 80% faster. Training time for new editors was reduced by 60%, and overall reader engagement increased due to fresher content.',
        details: 'The CMS includes AI-assisted tagging and SEO recommendations. It decouples the content from the presentation layer, allowing content to be pushed to web, mobile, and smart devices simultaneously.',
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'ElasticSearch'],
        stats: [
            { label: 'Faster Publishing', value: '80%' },
            { label: 'Training Time', value: '-60%' },
            { label: 'Engagement', value: '+15%' }
        ],
        image: '/src/assets/software_architecture.png' // Placeholder
    }
];
