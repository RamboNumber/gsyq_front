
$(function () {
        init();
    }
)

function init() {
    queryStudentList()
}

function queryStudentList(studentName) {

    layui.use(['form','layer', 'table'], function () {
        var table = layui.table,form =layui.form,$ = layui.$;

        table.render({
            elem: '#studentList',  //绑定table id
            url: 'http://localhost:9300/examinee/studentList',
            cols: [[
                // {type: 'number'},
                {field: 'id', title:'主键', style: 'none'},
                {field: 'name', title:'学生姓名'},
                {field: 'gender', title:'性别'},
                {field: 'status', title:'用户状态'},
                {field: 'phone', title:'联系电话'},
                {field: 'createDate', title:'创建日期'},
                {field: 'updateDate', title:'修改日期'},
                {fixed: 'right', title: "操作", align:'center', toolbar:'#barDemo'}
            ]],
            where: {
                name: studentName === null ? '' : studentName
            },
            page: true,
            limit: 10,
            limits: [10,20,30,50],
            id: 'test'
        })



    })

}

//修改按钮
var detailFrame = null;
function getDetail(){
    layui.use('layer', function() {
        var layer = layui.layer;

        //iframe层-父子操作
        detailFrame = layer.open({
            title: "学生详情查看",
            type: 2,
            area: ['50%', '70%'],
            scrollbar: false,	//默认：true,默认允许浏览器滚动，如果设定scrollbar: false，则屏蔽
            maxmin: true,
            content: 'studentDetail.html'
        });
    });

}