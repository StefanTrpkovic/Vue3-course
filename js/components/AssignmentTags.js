export default {
  template: `     
    <div class="flex gap-2">
      <button 
        v-for="tag in tags" 
        class="border rounded px-1 py-px text-xs" 
        :class="{
          'border-blue-500 text-blue-500': tag === currentTag
        }"
        @click="$emit('update:currentTag', tag)"
      >
        {{ tag }}
      </button>
    </div>
  `,
  props: {
    assignments: Array,
    currentTag: String
  },
  computed: {
    tags() {
      return ['all', ...new Set(this.assignments.map(x=>x.tag))]
    }
  },
}