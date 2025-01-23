
import sanityClient, { processProjectEntrie } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
        '*[_type == "devExperience"] | order(startDate desc)'
    )

    const rawProjects: SanityProject[] = await sanityClient.fetch('*[_type == "project"]');

    const skills: Skill[] = await sanityClient.fetch(`*[_type== "skills"][0].skillsList`);
    const projects = rawProjects.map(processProjectEntrie);


    return { workExperience, projects, skills }
}