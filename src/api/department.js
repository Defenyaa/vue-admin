import http from "@/utils/request"

// 获取部门列表  部门树形列表
export async function getDeptListApi(parms){
    return await http.get("/api/department/list",parms)
}
// 获取上级部门树
export async function getParentTreeApi(){
    return await http.get("/api/department/parent")
}

// 新增部门保存
export async function addDeptSaceApi(parms){
    return await http.post("/api/department",parms)
}

export async function deleteDeptApi(parms){
    return await http.delete("/api/department",parms)
}

