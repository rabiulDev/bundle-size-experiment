import {NextSeo} from "next-seo";

const SeoHeader = ({title, description, image=null}) => {
    return (
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                url: image ? image : 'https://noshquad.com/images/noshquad.png',
                title: title,
                description: description,
                images: [
                    {
                        url: image ? image : 'https://noshquad.com/images/noshquad.png',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                        type: 'image/jpeg',
                    },
                ],
                siteName: 'NoshQuad',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
    )
}

export default SeoHeader
