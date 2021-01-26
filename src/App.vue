<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/all";
@import "/assets/scss/nav";
@import "/assets/scss/header";
</style>
<script>
export default {
  created(){
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common['Authorization'] = myCookie;
  }
}
</script>