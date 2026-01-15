import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "Zenvera | Digital Digital Transformation & Software Development";
    const defaultDescription = "Zenvera is a premier digital transformation agency specializing in web development, mobile apps, and enterprise software solutions.";
    const defaultKeywords = "software development, web design, mobile apps, digital transformation, enterprise solutions, Zenvera";
    const siteUrl = "https://zenvera.com"; // Placeholder

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | Zenvera` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url || siteUrl} />
            <meta name="twitter:title" content={title || siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Canonical */}
            <link rel="canonical" href={url || siteUrl} />
        </Helmet>
    );
};

export default SEO;
