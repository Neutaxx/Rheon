import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "RHEON® | Diseño Web Profesional en Bogotá y Colombia",
    description = "Agencia digital experta en diseño web, desarrollo a medida y branding en Bogotá. Creamos sitios web rápidos y estéticos para empresas en Colombia.",
    keywords = "diseño web bogota, desarrollo web colombia, agencia digital bogota, paginas web bogota, diseño ux ui colombia",
    image = "/og-image.jpg", // Assuming there is a default OG image or one will be added
    url = "https://rheon.com.co" // Placeholder URL, should be updated with real domain if known
}) => {
    const siteTitle = title.includes("RHEON®") ? title : `${title} | RHEON®`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO;
