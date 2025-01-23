import { createClient, type ClientConfig } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
    projectId: 'mb1272d9',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2025-01-22',
}

const sanityClient = createClient(config);
export default sanityClient;


export function processProjectEntrie(rawProject: SanityProject) {
    const builder = ImageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(rawProject.image).url();
    const processedProject: ProcessedProject = {
        name: rawProject.name,
        company: rawProject.company,
        dateAccomplished: rawProject.dateAccomplished,
        stack: rawProject.stack,
        slug: rawProject.slug,
        projectImageUrl,
        content: rawProject.content.map(processProjectContent),

    };
    return processedProject;
}

function processProjectContent(content: RawImageContent | RawTextContent) {
    if (content._type === 'block') {
        const processedText: ProcessedTextContent = {
            type: 'text',
            style: content.style,
            textToRender: content.children.map(elem => elem.text).join('\n'),
        }
        return processedText;
    } else {
        const builder = ImageUrlBuilder(sanityClient);
        const projectImageUrl = builder.image(content).url();
        const processedImage: ProcessedImageContent = {
            type: 'image',
            url: projectImageUrl,
        }
        return processedImage;
    }

}