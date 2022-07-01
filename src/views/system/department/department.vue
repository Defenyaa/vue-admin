<template>
	<el-main>
		<el-form :model="parms" ref="deptForm" label-width="80px" :inline="true" size="small">
			<el-form-item label="">
				<el-input v-model="parms.searchName" placeholder="请输入部门名称"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button icon="el-icon-search">搜索</el-button>
				<el-button icon="el-icon-close">重置</el-button>
				<el-button type="primary" icon="el-icon-plus" @click="addDept()">新增</el-button>
			</el-form-item>

		</el-form>

		<!-- 列表 -->
		<el-table :data="tableList" row-key="id" default-expand-all :tree-props="{ children: 'children' }" border stripe>

			<el-table-column prop="name" label="部门名称"></el-table-column>
			<el-table-column prop="parentName" label="上级部门"></el-table-column>
			<el-table-column prop="deptCode" label="部门编码"></el-table-column>
			<el-table-column prop="deptPhone" label="部门电话"></el-table-column>
			<el-table-column prop="deptAddress" label="部门地址"></el-table-column>
			
			<el-table-column label="操作" align="center" width="250">
				<template slot-scope="scope">
					<el-button  icon="el-icon-edit-outline" type="primary" size="small"
						@click="editHandler(scope.row)">编辑</el-button>
					<el-button  icon="el-icon-close" type="danger" size="small"
						@click="deleteHandler(scope.row)">删除</el-button>
				</template>
			</el-table-column>



		</el-table>

		<!-- 新增部门弹框 -->
		<sys-dialog :title="addDialog.title" :width="addDialog.width" :height="addDialog.height"
			:visible="addDialog.visible" @onClose="onClose" @onConfirm="onConfirm">
			<div slot="content">
				<el-form :model="addDeptModel" ref="addDeptModel" :rules="addDeptModelRules" label-width="80px" :inline="true"
					size="normal">

					<el-form-item label="上级部门" prop="parentName">
						<!-- 需要带上 native -->
						<el-input v-model="addDeptModel.parentName" @click.native="selectDept()"></el-input>
					</el-form-item>
					<el-form-item label="部门名称" prop="name">
						<el-input v-model="addDeptModel.name"></el-input>
					</el-form-item>
					<el-form-item label="部门编码">
						<el-input v-model="addDeptModel.deptCode"></el-input>
					</el-form-item>
					<el-form-item label="部门电话">
						<el-input v-model="addDeptModel.deptPhone"></el-input>
					</el-form-item>
					<el-form-item label="部门经理">
						<el-input v-model="addDeptModel.manager"></el-input>
					</el-form-item>
					<el-form-item label="部门地址">
						<el-input v-model="addDeptModel.deptAddress"></el-input>
					</el-form-item>
					<el-form-item label="部门序号">
						<el-input v-model="addDeptModel.orderNum"></el-input>
					</el-form-item>
				</el-form>


			</div>
		</sys-dialog>

		<!-- 选择上级弹框 -->
		<sys-dialog :title="parentDialog.title" :width="parentDialog.width" :height="parentDialog.height"
			:visible="parentDialog.visible" @onClose="parentOnClose" @onConfirm="parentOnConfirm">
			<div slot="content">

				<el-tree ref="parentTree" :data="treeList" node-key="id" :props="defaultProps" @node-click="handleNodeClick">
					<div class="customer-tree-node" slot-scope="{node,data}">
						<!-- 长度为0没下级 -->
						<span v-if="data.children.length == 0">
							<i class="el-icon-document" style="color: #8c8c8c;" />

						</span>

						<span v-else>
							<svg-icon style="font-size:19px;" icon-class="add-s" />
						</span>

						<span>{{ node.label }}</span>


					</div>
				</el-tree>
			</div>
		</sys-dialog>



		<!-- Main content -->
	</el-main>



</template>

<script>
import { getDeptListApi, getParentTreeApi, addDeptSaceApi,deleteDeptApi } from '@/api/department'
import SysDialog from '@/components/system/SysDialog.vue';
import { data } from 'jquery';


export default {
	components: {
		SysDialog
	},
	data() {
		return {
			// 树的属性绑定
			defaultProps: {
				chiledren: "children",
				label: "name"
			},
			//上级部门弹框属性
			parentDialog: {
				title: "",
				width: 400,
				height: 400,
				visible: false
			},

			// 存储新增对话框属性
			addDialog: {
				title: "",
				width: 620,
				height: 250,
				visible: false,

			},

			//添加部门表单数据域
			addDeptModel: {
				editType: "",
				id: "",
				pid: "",
				parentName: "",
				manager: "",
				deptAddress: "",
				deptPhone: "",
				name: "",
				deptCode: "",
				orderNum: "",
			},
			addDeptModelRules: {
				parentName: [{ required: true, trigger: "change", message: "请选择上级部门" }],
				name: [{ required: true, trigger: "change", message: "请填写部门名称" }],
				name: [{ required: true, trigger: "change", message: "请填写部门名称" }],
			},


			// 部门列表
			tableList: [],
			// 存储搜索关键字的数据
			parms: {
				searchName: "",
			},

			treeList: [],

		}
	},
	created() {
		this.getDeptList();
	},
	methods: {
			async deleteHandler(row){
				// console.log(row)
				let isop = await this.$myconfirm("确定要删除该部门吗");
				console.log(isop)
				if(isop){
					let parm = {id:row.id}
					let res = await deleteDeptApi(parm);
					if(res && res.code ==200){

						this.$message.success("删除成功")
						this.getDeptList();
					}

				}
			},


		handleNodeClick(data) {
			// console.log(data)
			this.addDeptModel.pid = data.id;
			this.addDeptModel.parentName = data.name;
		},

		// 选择上级部分
		async selectDept() {
			this.parentDialog.title = "请选择上级部门";
			this.parentDialog.visible = true;

			let res = await getParentTreeApi();
			console.log(res)
			if (res && res.code == 200) {

				this.treeList = res.data;
				// console.log(this.treeList)
			}
		},

		// 上级部门弹窗取消和确认
		parentOnClose() {
			this.parentDialog.visible = false;
		},
		parentOnConfirm() {
			this.parentDialog.visible = false;
		},

		// 添加部门弹窗取消和确认
		onClose() {
			this.addDialog.visible = false
		},
		onConfirm() {
			this.$refs.addDeptModel.validate(async (vaild) => {
				if (vaild) {
					let res = await addDeptSaceApi(this.addDeptModel);
					console.log(res)
					if (res && res.code == 200) {
						// 信息框
						this.$message.success(res.msg);


						// 新增成功，刷新列表
						this.getDeptList();
						this.addDialog.visible = false;

					}


				}
			})


		},
		addDept() {
			this.$resetForm('addDeptModel', this.addDeptModel)
			this.addDialog.title = "新增部门"
			this.addDialog.visible = true;

		},

		async getDeptList() {
			let res = await getDeptListApi(this.parms);
			console.log(res)
			if (res && res.code == 200) {
				this.tableList = res.data;
			}

		}
	}
}
</script>

<style lang="scss" scoped>
::v-deep .el-tree {

	// 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
	.el-tree-node {
		position: relative;
		padding-left: 10px;
	}

	// 子集像右偏移 给数线留出距离
	.el-tree-node__children {
		padding-left: 20px;
	}

	//这是竖线
	.el-tree-node :last-child:before {
		height: 40px;
	}

	.el-tree>.el-tree-node:before {
		border-left: none;
	}

	.el-tree>.el-tree-node:after {
		border-top: none;
	}

	//这自定义的线 的公共部分
	.el-tree-node:before,
	.el-tree-node:after {
		content: "";
		left: -4px;
		position: absolute;
		right: auto;
		border-width: 1px;
	}

	.tree :first-child .el-tree-node:before {
		border-left: none;
	}

	// 竖线
	.el-tree-node:before {
		border-left: 1px dotted #d9d9d9;
		bottom: 0px;
		height: 100%;
		top: -25px;
		width: 1px;
	}

	//横线
	.el-tree-node:after {
		border-top: 1px dotted #d9d9d9;
		height: 20px;
		top: 14px;
		width: 24px;
	}

	.el-tree-node__expand-icon.is-leaf {
		width: 8px;
	}

	//去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
	.el-tree-node__content>.el-tree-node__expand-icon {
		display: none;
	}

	//每一行的高度
	.el-tree-node__content {
		line-height: 30px;
		height: 30px;
		padding-left: 10px !important;
	}
}

//去掉最上级的before  after 即是去电最上层的连接线
::v-deep .el-tree>div {
	&::before {
		display: none;
	}

	&::after {
		display: none;
	}
}
</style>