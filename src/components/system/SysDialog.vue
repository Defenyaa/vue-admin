<template>
	<el-dialog :title="title" :visible="visible" :width="width + 'px'" 
	:before-close="onClose" :height="height + 'px'" top="6vh">

		<div :style="{ height: height + 'px' }">
			<!-- 插槽，提高拓展性 -->
			<slot name="content"></slot>

		</div>


		<span slot="footer" class="dialog-footer">
			<el-button type="danger" @click="onClose()">取 消</el-button>
			<el-button type="primary" @click="onConfirm()">确 定</el-button>
		</span>
	</el-dialog>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "标题"
		},
		visible: {
			type: Boolean,
			default: false
		},
		width: {
			type: Number,
			defaule: 600
		},
		height: {
			type: Number,
			defaule: 300
		}
	},
	data() {
		return {

		};
	},
	methods: {
		onClose() {
			this.$emit("onClose")
		},
		onConfirm() {
			this.$emit("onConfirm")
		},
		handleClose(done) {
			this.$confirm('确认关闭？')
				.then(_ => {
					done();
				})
				.catch(_ => { });
		}
	}
}
</script>

<style lang="scss" scoped>
// 自动滚动
.containner{
	overflow-x: initial;
	overflow-y: auto;
}

.el-dialog__wrapper {
	::v-deep .el-dialog {
		border-top-left-radius: 9px;
		border-top-right-radius: 9px;

		.el-dialog__header {
			border-top-left-radius: 7px;
			border-top-right-radius: 7px;
			background-color: #1890ff;

			.el-dialog__title {
				color: #fff;
				display: flex;
				align-items: center;
				font-size: 19px;
			}

			.el-dialog__close {
				color: #fff;
			}

			.el-dialog__body {
				padding: 10px;
			}

			.el-dialog__footer {}
		}
	}
}
</style>