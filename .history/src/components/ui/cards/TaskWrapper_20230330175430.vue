<script setup>
import { reactive, ref } from "vue";
import EditTask from "../../buttons/EditTask.vue";
import FullTaskPage from "../../../views/FullTaskPage.vue";

let taskDescription = ref(true);
function expandTask() {
  taskDescription.value = !taskDescription.value;
}
const showFullTaskPage = ref(false);
function showFullTask() {
    showFullTaskPage.value
}
</script>

<template>
  <flex
    alignItems="stretch"
    class="task-wrapper"
    gap="5px"
    @click="showFullTask()"
  >
    <input type="checkbox" id="scales" name="scales" @click="expandTask()" />
    <div class="taskInfo">
      <h3 class="task-title">Title</h3>
      <p class="task-description" v-show="taskDescription">
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
      </p>

      <flex class="edit" justifyContent="flex-end">
        <edit-task></edit-task>
      </flex>
    </div>
  </flex>
  <teleport to="body">
    <full-task-page></full-task-page>
  </teleport>
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
