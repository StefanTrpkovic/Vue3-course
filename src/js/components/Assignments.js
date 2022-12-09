import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentList,
    AssignmentCreate
  },
  template: `
    <section class="flex gap-8">
      <assignment-list 
        title="In Progress"
        :assignments=filters.inProgress
      >
        <assignment-create @add="add"></assignment-create>
      </assignment-list>

      <assignment-list 
        v-if="showCompleted"
        title="Completed"
        :assignments=filters.completed
        can-hide
        @toggleVisibility = "showCompleted = !showCompleted"
      >
      </assignment-list>
    </section>  
  `,

    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },
    computed: {
      filters() {
        return {
          inProgress: this.assignments.filter(assignment => ! assignment.complete),
          completed: this.assignments.filter(assignment => assignment.complete)
        }
      }
    },
    async created() {
      fetch('http://localhost:3000/assignments')
      .then((res) => res.json())
      .then((res) => this.assignments = res)
    },
    methods: {
      add(newAssignment) {
        const highestNumber = Math.max(...this.assignments.map(assignment => assignment.id))
        newAssignment && this.assignments.push({ name: newAssignment, complete: false, tag: "math", id: highestNumber + 1 })
      }
    }
}