<template>
    <div>
			<table class="table mt-4">
				<thead>
					<tr>
						<th width="120">購買時間</th>
						<th width="250">E-mail</th>
						<th>購買款項</th>
						<th width="140">應付金額</th>
						<th width="100">是否付款</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item) in productList" :key="item.id">
						<td>
							<!-- {{item.orders.paid_date}} -->
						</td>
						<td>
							<!-- {{item.orders.user.email}}  -->
						</td>
						<td>
							<ul class="list-unstyled">
								<li>
									1
								</li>
							</ul>
						</td>
						<td class="text-right">
							1
						</td>
						<td>
							<span class="text-success">已付款</span>
							<span>尚未啟用</span>
						</td>
					</tr>
				</tbody>
			</table>
    </div>
</template>

<script>
export default {
	data(){
		return{
			productList:[],
		}
	},
	methods: {
		getList(){
			const vm = this;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders`;
			this.$http.get(api).then((response) => {
				// vm.productList = response.data;
				console.log(response.data);
			})
		}
	},
	created() {
		this.getList();
	},
}
</script>