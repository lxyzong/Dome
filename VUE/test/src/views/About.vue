<template>
	<div class="about">
		<span>{{name}}  | {{count}}</span> &nbsp; &nbsp;&nbsp;<button @click="add">button</button> <br />
		<button @click="But()" class="But">获取验证码</button>
	</div>
</template>
<script>
	import { mapState, mapMutations } from "vuex"
	export default {
		name: 'about',
		data() {
			return {
				name: "liu",
				timer: null
			}
		},
		computed: {
			...mapState(['count'])
		},
		methods: {
			...mapMutations(['add']),
			But() {
				if($(".But").text() == "获取验证码") {
					clearInterval(this.timer);
					this.$options.methods.countdown();
				}
			},
			countdown() {
				$(".But").attr("disabled", "disabled");
				var count = 59;
				$(".But").text(count + "s");
				this.timer = setInterval(time, 1000);

				function time() {
					if(count == 0) {
						clearInterval(this.timer);
						$(".But").removeAttr("disabled");
						$(".But").text("获取验证码")
					} else {
						count--;
						$(".But").text(count + "s");
					}
				}
			}
		}
	}
</script>
<style scoped>
	.about {
		width: 100%;
		height: 100%;
		list-style: none;
	}
</style>