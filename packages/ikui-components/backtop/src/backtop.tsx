import { computed, defineComponent, onMounted, ref } from 'vue'
import IkIcon from '../../icon'
import '@ikui/theme/src/backtop.scss'

export default defineComponent({
  components: {
    IkIcon
  },
  name: 'ik-backtop',
  props: {
    icon: {
      type: String,
      default: (): string => ''
    }
  },
  emits: ['click'],
  setup(props, { emit, slots, attrs }) {
    const show = ref(false)
    console.log(props, 'props')
    const handleClick = (event: MouseEvent) => {
      emit('click', event)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    const onScroll = (e) => {
      const st = document.documentElement.scrollTop
      show.value = st > 400 ? true : false
    }
    onMounted(() => {
      window.addEventListener('scroll', onScroll)
    })
    const computedCls = computed(() => {
      const cls = show.value ? 'ik-backtop show-backtop' : 'ik-backtop'
      return cls
    })
    return () => {
      const Content = (
        <div class={computedCls.value} onClick={handleClick}>
          <ik-icon name={props.icon} />
        </div>
      )
      return show.value ? Content : null
    }
  }
})
