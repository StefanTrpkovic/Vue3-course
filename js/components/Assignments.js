import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentList,
    AssignmentCreate
  },
  template: `
    <section class="space-y-6">
      <assignment-list 
        title="In Progress"
        :assignments=filters.inProgress
      >
      </assignment-list>

      <assignment-list 
        title="Completed"
        :assignments=filters.completed
      >
      </assignment-list>
      <assignment-create @add="add"></assignment-create>
    </section>  
  `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1, tag: "math" },
                { name: 'Read Chapter 4', complete: false, id: 2, tag: "science" },
                { name: 'Turn in Homework', complete: false, id: 3, tag: "math" },
            ]
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
    methods: {
      add(newAssignment) {
        const highestNumber = Math.max(...this.assignments.map(assignment => assignment.id))
        newAssignment && this.assignments.push({ name: newAssignment, complete: false, tag: "math", id: highestNumber + 1 })
      }
    }
}