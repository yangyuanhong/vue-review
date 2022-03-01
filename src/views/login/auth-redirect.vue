<script>
export default {
  name: 'AuthRedirect',
  created() {
    const hash = window.location.search.slice(1)
    if (window.localStorage) {
      window.localStorage.setItem('x-admin-code', hash)
      window.close()
    }
  },
  render: function(h) {
    return h()
  }
}
</script>

<style lang="sass" scoped>

</style>
