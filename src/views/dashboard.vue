<template>
	<div>
		<Nav/>
		<div class="row no-gutters">
			<div class="col-2 text-center bg-sidebar" style="height:100vh">
				<Sidebar/>
			</div>
			<div class="col-10 px-3">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from '../components/nav';
import Sidebar from '../components/manage_sidebar';
export default {
	components:{
		Nav,
		Sidebar
	},
	created() {
		const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken_1\s*\=\s*([^;]*).*$)|^.*$/, '$1');
		this.$http.defaults.headers.common.Authorization = myCookie;
	},
}
</script>