import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"


export default {
  components: {
    Assignment,
    AssignmentTags
  },
  template: `
      <section v-show="assignments.length">
      <h2 class="font-bold mb-2">{{title}} ({{assignments.length}})</h2>     
      
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
    </section>
  `,
  props: {
    assignments: Array,
    title: String
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