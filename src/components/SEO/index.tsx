import Head from 'next/head';

interface SEOProps {
    title: string;
    description: string;
    image: string;
    isIndex?: boolean;
}

export default function SEO({ title, description, image, isIndex }: SEOProps) {
    const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}${image}` : null;
    const pageTitle = isIndex ? title : `${title} | Camilly Matsushima`;

    return (
        <Head>
            <title>{pageTitle}</title>

            <meta name="description" content={description} />
            <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
            <meta name="MobileOptimized" content="320" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="theme-color" content="#f3f3f5" />
            <meta name="msapplication-TileColor" content="#f3f3f5" />
            <meta name="referrer" content="no-referrer-when-downgrade" />

        </Head>
    );
}