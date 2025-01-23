<script lang="ts">
  import { Button, SectionHeadline, ExperienceTable } from "$components";
  import image from "$assets/about-me.jpeg";
  import { goto } from "$app/navigation";

  interface AboutMeProps {
    workExperience: SanityWorkExperience[];
  }

  let { workExperience }: AboutMeProps = $props();
  function onclick() {
    goto("/#contact-form");
  }
</script>

<section>
  <SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <img class="image" src={image} alt="" />
    <div class="text">
      <p>Hey I'm Manuel</p>
      <p>
        I’m a mobile developer with 4+ years of experience specializing in
        Flutter and Dart. My work spans the fintech, cryptocurrency, and music
        industries, where I’ve contributed to impactful and innovative projects.
      </p>
      <p>
        I’m passionate about leveraging new technologies to improve people’s
        lives. Throughout my career, I’ve embraced challenges that have helped
        me quickly adapt and grow both personally and professionally. I see
        every opportunity as a chance to reinvent myself and continue evolving
        as a developer.
      </p>
      <Button className="mt-m" {onclick}>Tell me about your project</Button>
    </div>
  </div>
  <ExperienceTable {workExperience} />
</section>

<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .image {
    width: 42%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }
</style>
