import { Helmet } from "react-helmet-async";
import { seoConfig } from "../config/seo";

const SEOHead = ({ page = "home", customTitle, customDescription }) => {
  const pageConfig = seoConfig.pages[page] || seoConfig.pages.home;
  
  const title = customTitle || pageConfig.title;
  const description = customDescription || pageConfig.description;
  const keywords = pageConfig.keywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoConfig.siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seoConfig.defaultImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={seoConfig.siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoConfig.siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={seoConfig.defaultImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="author" content="KLEAN Barbershop" />
      <meta name="geo.region" content="FR-91" />
      <meta name="geo.placename" content="Tigery" />
      <meta name="geo.position" content="48.6418;2.5165" />
      <meta name="ICBM" content="48.6418, 2.5165" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoConfig.siteUrl} />
      
      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(seoConfig.localBusiness)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
