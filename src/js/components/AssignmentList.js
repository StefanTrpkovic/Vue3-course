import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
import Panel from './Panel.js'


export default {
  components: {
    Assignment,
    AssignmentTags,
    Panel
  },
  template: `
    <Panel v-show="assignments.length" class="w-60">

      <template #default>
        <div class="flex justify-between items-start">
          <h2 class="font-bold mb-2">{{title}} ({{assignments.length}})</h2>
          <button v-show="canHide" @click="$emit('toggleVisibility')">&times;</button>
        </div>
        
        <assignment-tags 
          :assignments="assignments" 
          v-model:currentTag="currentTag"
        >
        
        </assignment-tags>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
          <Assignment 
            v-for="assignment in filteredAssignments"
            :key="assignment.id"
            :assignment="assignment"
          >
          </Assignment>
        </ul>

        <slot></slot>
      </template>

      <template #footer>My footer</template>

    </Panel>
  `,
  props: {
    assignments: Array,
    title: String,
    canHide: Boolean
  },
  computed: {
    filteredAssignments() {
      if(this.currentTag === 'all') return this.assignments

      return this.assignments.filter(x=>x.tag === this.currentTag);
    }
  },
  data() {
    return {
      currentTag: "all"
    }
  },
}