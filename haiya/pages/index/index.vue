<template>
	<div class=" hert" @click="sert()">
		1111
	</div>
</template>

<script>
	import {
		mapState
	} from "vuex";
	import {
		mapMutations
	} from "vuex";
	import {guideTypeVc} from "@/filters/custom";
	import {requestPost} from "@/utils/user.js";
	import {longUrl} from "@/utils/url.js"
	export default {
		data() {
			return {
		     sev:'1',
			}
		},
		onLoad() {

		},
		computed: {
			
		},
		mounted() {
		
		},
		methods: {
			sert:function(){
				requestPost(longUrl,{
					'openSessionKey':'oY8Xj5AB7OqYN0K_nMSm5VHu-gDc.SOry8gg0Wp3UF83b8pSklw=='
				}).then(res => {
			       console.log(res)
                })
			}
		}
	}
</script>

<style lang="scss" scoped>
	

</style>
