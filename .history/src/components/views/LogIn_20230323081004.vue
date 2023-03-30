<script setup></script>

<template>
  <container>
    <wrapper>
      <FormKit type="group" #default="{ value }">
        <FormKit
          name="email"
          type="email"
          label="Email"
          help="Notice it takes a full second for the data to update."
          :delay="1000"
          validation="required|length:5|email"
          validation-visibility="live"
        />
      </FormKit>
    </wrapper>
  </container>
</template>

<style scoped></style>
