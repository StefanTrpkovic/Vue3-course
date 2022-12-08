import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList
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

      <form @submit.prevent="add">
        <div class="border border-gray-600 text-black">
          <input v-model="newAssignment" placeholder="New Assignment..." class="p-2"/>
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
      </form>
    </section>  
  `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in Homework', complete: false, id: 3 },
            ],
            newAssignment: null
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
      add() {
        const highestNumber = Math.max(...this.assignments.map(assignment => assignment.id))
        this.newAssignment && this.assignments.push({ name: this.newAssignment, complete: false, id: highestNumber + 1 })
        this.newAssignment = null
      }
    }
}