// 清空该表单
export default function reserForm(formName,obj){
    if(this.$refs[formName]){
        this.$refs[formName].resetFields();

    }

    Object.keys(obj).forEach(key=>{
        obj[key] = '';
    })
};


// 对象快速复制  把已经存在的key复制

export async function objCoppy(obj1,obj2){
    Object.keys(obj2).forEach(key=>{

        obj2[key] = obj1[key]

    })
}