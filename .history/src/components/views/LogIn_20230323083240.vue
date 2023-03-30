<script setup></script>

<template>
  <container>
    <flex>
      <wrapper width="454px">
        <FormKit
          type="group"
          #default="{ value }"
          class="input-email"
          >
          <FormKit
          outer-class="input-email"
            :wrapper-class="{
              'i-will-append': true,
              'i-will-not': true,
            }"
            name="email"
            type="email"
            label="Email"
            help="Notice it takes a full second for the data to update."
            :delay="1000"
            validation="required|length:5|email"
            validation-visibility="live"
          />
        </FormKit>
        <FormKit type="group">
          <h2>Create a new password</h2>
          <FormKit
            outer-class="input-email"
            type="password"
            name="password"
            value="super-secret"
            label="Password"
            help="Enter a new password"
            validation="required"
            validation-visibility="live"
          />
          <FormKit
            outer-class="input-email"
            type="password"
            name="password_confirm"
            label="Confirm password"
            help="Confirm your new password"
            validation="required|confirm"
            validation-visibility="live"
            validation-label="Password confirmation"
          />
        </FormKit>
      </wrapper>
    </flex>
  </container>
</template>

<style scoped>
.input-email {
  width: 100%;
}
:deep(.flex) {
  height: 100%;
}
</style>
