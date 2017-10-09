<template>
	<el-row class="tac">
		<el-col :span="4">
			<el-menu :default-active="$router.path" class="el-menu-vertical-demo" theme="dark" router unique-opened :default-openeds="openeds" @open="handleOpen">
				<el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" class="menu">
					<template slot="title">
						{{item.name}}
					</template>
					<el-menu-item v-for="(child,index) in item.children" :index="item.path+'/'+child.path">{{child.name}}</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-col>
		<el-col :span="18">
			<transition name="fade">
				<router-view></router-view>
			</transition>
		</el-col>
	</el-row>
</template>


<script>
  export default {
  	data() {
  		return {
  			openeds: []
  		}
  	},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.menu
		text-align:center
</style>