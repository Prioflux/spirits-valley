<template>
  <div>
    <h2
      class="
        text-base
        font-semibold
        text-gray-900
        tracking-wide
        uppercase
      "
    >
      {{ step.period }}
    </h2>
    <h2
      class="step-title"
    >
      {{ step.title }}
    </h2>
    <p class="max-w-2xl mt-5 mx-auto text-xl text-gray-500">
      {{ step.description }}
    </p>
    <StepImage :step="step" class="md:hidden"  />
  </div>
</template>

<script>
export default {
  name: "Step",
  props: {
    step: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    index: null
  }),
}
</script>