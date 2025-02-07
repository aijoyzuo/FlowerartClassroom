/*撰寫點擊愛心部分*/
// 等待 DOM 加載完成後執行
document.addEventListener("DOMContentLoaded", function () {
    // 切換圖標類別的函數
    function toggleIcon(icon) {
        if (icon.classList.contains("fa-regular")) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
        } else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
        }
    }

    // 選取所有 .toggleIcon 的元素，並綁定點擊事件
    const toggleIcons = document.querySelectorAll(".toggleIcon");
    toggleIcons.forEach(function (icon) {
        icon.addEventListener("click", function (e) {
            e.preventDefault(); // 阻止 <a> 的默認跳轉行為
            toggleIcon(this); // 切換圖標
        });
    });
});

/*加入購物車部分*/
const staticBackdrop = document.getElementById('staticBackdrop');

if (staticBackdrop) {
    staticBackdrop.addEventListener('show.bs.modal', event => {
        console.log(event.relatedTarget);

        const button = event.relatedTarget; 
        if (!button) {
            console.error('未能獲取按鈕，請檢查 data-bs-* 屬性');
            return;
        }

        const recipient = button.getAttribute('data-bs-whatever'); //名稱
        const price = button.getAttribute('data-bs-price'); // 金額

        console.log('data-bs-whatever:', recipient);
        console.log('data-bs-price:', price);

        const modalTitle = staticBackdrop.querySelector('.modal-title');
        const modalBodyTable = staticBackdrop.querySelector('.modal-body tbody');

        modalTitle.textContent = `購物車 - ${recipient}`;
        modalBodyTable.innerHTML = `
            <tr>
                <th scope="row">花圈</th>
                <td>${recipient}</td>
                <td>1</td>
                <td>${price}</td>
            </tr>
        `;
    });
}

/*shop部分*/
document.addEventListener("DOMContentLoaded", function () {
    const allProductsTab = document.getElementById("all-products-tab");
    const categoryTabs = document.querySelectorAll(".list-group-item:not(#all-products-tab)");
    const allPanes = document.querySelectorAll("#pane-1, #pane-2, #pane-3");
  
    // 顯示所有商品內容的函數
    function showAllProducts() {
      allProductsTab.classList.add("active");
      categoryTabs.forEach(tab => tab.classList.remove("active"));
      allPanes.forEach(pane => pane.classList.add("show", "active"));
    }
  
    // 點擊「所有商品」
    allProductsTab.addEventListener("click", function (event) {
      event.preventDefault(); // 防止頁面跳轉
      showAllProducts();
    });
  
    // 點擊單一分類
    categoryTabs.forEach(tab => {
      tab.addEventListener("click", function () {
        allProductsTab.classList.remove("active"); // 移除「所有商品」的選中狀態
        allPanes.forEach(pane => pane.classList.remove("show", "active")); // 隱藏所有內容
        const targetPane = document.querySelector(this.getAttribute("href"));
        if (targetPane) {
          targetPane.classList.add("show", "active"); // 顯示對應內容
        }
      });
    });
  
    // 頁面載入時，自動顯示「所有商品」
    showAllProducts();
  });
  


  /*deliverpay部分*/
 
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        if (!form.checkValidity()) {
            event.preventDefault(); // 阻止表單提交
            event.stopPropagation();
        }
        form.classList.add("was-validated"); // 讓 Bootstrap 驗證顯示
    });
});

/*發票部分*/




 



