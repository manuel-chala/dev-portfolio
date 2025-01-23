<script>
  import { goto } from "$app/navigation";
  import Button from "$components/Button.svelte";
  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="hero-section default-margin">
  <h3>Hello I'm Manuel</h3>
  <div class="underscore mb-m"></div>

  <h1>I'm a Multiplatform Frontend Developer</h1>
  <h1 class="dark-grey mb-m">Always looking for the next big thing🚀</h1>
  <Button {onclick}>Let's Talk!</Button>
</section>

<style>
  .hero-section {
    padding-top: 60px;
  }
</style>
