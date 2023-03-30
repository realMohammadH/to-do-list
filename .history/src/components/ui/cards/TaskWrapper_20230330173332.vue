<script setup>
import { reactive } from "vue";
import EditTask from "../../buttons/EditTask.vue";
</script>

<template>
  <flex alignItems="stretch" class="task-wrapper" gap="5px">
    <input type="checkbox" id="scales" name="scales" />
    <div class="taskInfo">
      <h3 class="task-title">Title</h3>
      <p class="task-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>

      <flex class="edit" justifyContent="flex-end">
        <edit-task></edit-task>
      </flex>
    </div>
  </flex>
</template>

<style scoped>
.task-wrapper {
  width: 100%;
  flex: 1;
  padding: 8px 0;
  position: relative;
}
.task-wrapper:hover .edit {
  display: block;
  visibility: visible;
}
.taskInfo .task-title {
  margin-block-end: 4px;
}
.task-description {
  line-height: 1.25;
  font-size: 12px;
  line-height: 18px;
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-bottom: 2px;
}
input[type="checkbox"] {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 8px 6px 0 -3px;
  user-select: none;
  border-radius: 50vw;
}
input:checked {
  color: #d1453b;
}
.edit {
  display: none;
  visibility: hidden;
  height: 24px;
  margin-right: -30px;
  margin-top: 8px;
  padding-left: 16px;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
