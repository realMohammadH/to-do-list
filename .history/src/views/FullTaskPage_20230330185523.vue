<script setup>
import { reactive } from "vue";
import AddSubTask from "../components/buttons/AddSubTask.vue";
</script>

<template>
  <wrapper class="overlay" width="100%" height="100%">
    <wrapper
      class="full-task-page"
      width="864px"
      height="100%"
      padding="30px 40px"
    >
      <flex class="task-wrapper-info" flow="column">
        <flex class="header"></flex>
        <flex class="task-content" flow="column">
          <h3 class="task-title">Title</h3>
          <p class="task-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime
          </p>
        </flex>
        <flex>
          <add-sub-task></add-sub-task>
        </flex>
      </flex>
    </wrapper>
  </wrapper>
</template>

<style scoped>
.overlay {
  position: absolute;
  inset: 0;
  z-index: 99;
  padding: 32px;
  background-color: #00000080;
}
.full-task-page {
  background-color: #fff;
  border-radius: 20px;
}
task-wrapper-info
</style>
