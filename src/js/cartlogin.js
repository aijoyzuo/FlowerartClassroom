//登入跳轉

document.getElementById("loginBtn").addEventListener("click", function() {
    alert("登入成功"); // 顯示成功訊息
    setTimeout(function() {
        window.location.href = "./shoppingcart.html"; // 跳轉到購物車頁面
    },0); 
});
