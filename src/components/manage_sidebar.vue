<template>
  <div>
      <ul class="nav flex-column">
        <li class="nav-item py-2">
          <router-link class="nav-link" to="/admin/cart">
          <i class="fas fa-box-open"></i>
            產品列表
          </router-link>
        </li>
        <li class="nav-item py-2">
          <router-link class="nav-link" to="/admin/checkList">
          <i class="far fa-list-alt"></i>
            訂單列表
          </router-link>
        </li>
        <li class="nav-item py-2">
          <router-link class="nav-link" to="/admin/coupon">
          <i class="far fa-list-alt"></i>
            優惠券管理
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
};
</script>