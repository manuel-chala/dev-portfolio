<script lang="ts">
  import { Button, SectionHeadline } from "$components";

  let contactName = $state("");
  let contactEmail = $state("");
  let projectInformation = $state("");
  let isFormInvalid = $state(false);

  function onSubmit(event: Event) {
    event.preventDefault();
    if (contactEmail && contactName && projectInformation) {
      fetch("/api/send-mail");
    } else {
      isFormInvalid = true;
    }
    console.log({ contactEmail, contactName, projectInformation });
  }

  $effect(() => {
    if (contactEmail || contactName || projectInformation) {
      isFormInvalid = false;
    }
  });
</script>

<section class="mt-l">
  <SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>
  <div class={"form-container default-margin mt-m "}>
    <form action="">
      <input
        type="text"
        class="text-input mb-m"
        class:input-error={isFormInvalid && !Boolean(contactName.length)}
        placeholder="Your Name"
        bind:value={contactName}
      />
      <input
        type="text"
        class="text-input mb-m"
        class:input-error={isFormInvalid && !Boolean(contactEmail.length)}
        placeholder="Your Email"
        bind:value={contactEmail}
      />
      <textarea
        placeholder="Tell me about your project"
        class:input-error={isFormInvalid && !Boolean(projectInformation.length)}
        bind:value={projectInformation}
      ></textarea>
      <Button onclick={onSubmit}>Submit</Button>
    </form>
    <div class="form-text">
      <h3 class="bold mb-s">Talk to me about your project</h3>
      <p>
        Got an idea you’re excited about? Let’s bring it to life together!
        Whether it’s building something innovative, solving a tricky problem, or
        brainstorming the next big thing, I’m ready to dive in. Don’t
        hesitate—reach out, and let’s create something amazing! 🚀
      </p>
    </div>
  </div>
</section>

<style>
  section {
    padding-bottom: 140px;
  }

  .form-container {
    display: flex;
    justify-content: space-between;
  }

  .form-text {
    width: 39%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 45%;
  }

  form * {
    font-size: 20px;
    font-family: "Inter Tight", sans-serif;
    font-weight: 500;
    color: black;
  }

  textarea,
  input {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.035);
    border-radius: 8px;
    padding: 4px 12px;
    outline: none;
    border: none;
  }

  input {
    height: 48px;
  }

  textarea {
    height: 120px;
    margin-bottom: 40px;
  }

  textarea::placeholder,
  input::placeholder {
    font-size: 20px;
    font-weight: 400;
  }

  .input-error {
    background-color: rgba(223, 87, 87, 0.667);
  }

  .input-error::placeholder {
    color: white;
  }

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: black;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 8px;
    animation: spin 0.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .spinner-container {
    display: flex;
  }
</style>
