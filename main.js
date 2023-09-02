var kv1 = document.getElementById("kv1").value;
var kv2 = document.getElementById("kv2").value;
var kv3 = document.getElementById("kv3").value;

// var dt1 = document.getElementById("dt1").value * 1;
// var dt2 = document.getElementById("dt2").value * 1;
// var dt3 = document.getElementById("dt3").value * 1;

var tongDiem = 0;

console.clear;
// var ketQua = document.getElementById("ketQua");
function logout() {
  var dt = document.getElementById("dt").value * 1;
  var kv = document.getElementById("kv").value * 1;

  var diemChuan = document.getElementById("diemChuan").value * 1;

  var mon1 = document.getElementById("mon1").value * 1;
  var mon2 = document.getElementById("mon2").value * 1;
  var mon3 = document.getElementById("mon3").value * 1;
  //   console.log(diemChuan);
  //   console.log(mon1);
  //   console.log(mon2);
  //   console.log(mon3);
  //   console.log(dt);
  //   console.log(kv);
  var thongBao = document.getElementById("thongBao");

  tongDiem = mon1 + mon2 + mon3 + kv + dt;
  if (tongDiem >= diemChuan) {
    thongBao.innerText = "Bạn đã đậu. Tổng điểm là: " + tongDiem;
  } else {
    thongBao.innerText = "Bạn đã trượt liuu liuu. Tổng điểm là: " + tongDiem;
  }
}
