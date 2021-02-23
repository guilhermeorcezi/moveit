import Head from 'next/head';

interface SEOProps {
    title: string;
    isIndex?: boolean;
}

export default function SEO({ title, isIndex }: SEOProps) {

    return (
        <Head>
            <title>{title}</title>

            <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
            <meta name="MobileOptimized" content="320" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="theme-color" content="#f3f3f5" />
            <meta name="msapplication-TileColor" content="#f3f3f5" />
            <meta name="referrer" content="no-referrer-when-downgrade" />

        </Head>
    );
}