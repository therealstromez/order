var list = 1

firebase.database().ref("thanhtoan").on("value", snapshot => {
    if (list >= 2) {
        $('.listOrder').prepend(order)
    }
    ++list
})

var order = `<div class="col-xl-3">
<div class="card text-center">
    <div class="card-body">
        <h3 class="badge badge-xl light badge-secondary">00:13p</h3>
        <h4 class="card-text">(1) Hamburger<br>(3) Pepsi<br></h4>
        <p class="card-text text-dark">Lấy tại quầy - 60.000đ</p>
    </div>
    <div class="card-footer">
        <a href="javascript:void()" class="btn btn-primary">Hoàn thành</a>
    </div>
</div>
</div>`


