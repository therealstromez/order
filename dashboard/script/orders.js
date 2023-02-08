var list = 1

firebase.database().ref("donhang").on("child_added", snapshot => {
    // console.log(snapshot.val());
    var div = order
    var div = div.replaceAll('%DANHSACH%', snapshot.val().danhsach)
    var div = div.replaceAll('%ID%', snapshot.val().id)
    var div = div.replaceAll('%IDKEY%', snapshot.key)
    var div = div.replaceAll('%GIA%', snapshot.val().gia)
    // if (list >= 2) {
        $('.listOrder').prepend(div)
    // }
    // ++list
})

var order = `<div class="col-xl-3">
<div class="card text-center">
    <div class="card-body">
        <h3 class="badge badge-xl light badge-secondary">00:13p</h3>
        <h4 class="card-text">%DANHSACH%</h4>
        <p class="card-text text-dark">Lấy tại quầy - %GIA% - %ID%</p>
    </div>
    <div class="card-footer">
        <a  href="javascript:hoanthanh('%IDKEY%')"  class="btn btn-primary">Hoàn thành</a>
    </div>
</div>
</div>`

function hoanthanh(id) {
    // console.log($(data).data("idd"));
    // var id = $(data).data("idd")
    firebase.database().ref(`donhang/${id}`).update({
        trangthai: true
    }).then(result => {
        //done
        // firebase.database().ref(`tongsanpham`).set(firebase.database.ServerValue.increment(1));
        console.log('Đăng thành công!')
    })
}


