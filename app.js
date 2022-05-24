
// Gọi biến searchTV của thanh Search bar
const searchTV = document.querySelector('#searchTV');
// Gọi biến btn của Search button
const btn = document.querySelector('#btn');
// Gọi biến form 
const form = document.querySelector('#searchForm');
// Gọi biến searchInput khi nhập vào ô tìm kiếm
const searchInput = document.querySelector('#searchInput');


// ===========BACK UP======================================================
// // Action 'Search' when click Search button
// btn.addEventListener('click', async function (e) {
//     try {
//         // Tránh refresh trang khi bấm nút Search bar
//         e.preventDefault();
//         //Gọi biến searchInputValue khi đã lấy được data
//         const searchInputValue = searchInput.value;
//         // Kiếm tra biến searchInputValue
//         console.log(searchInputValue);
//         // Get APIs từ web bằng search keyword
//         // const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${searchInputValue}`);
//         // Xuất ra link image của search output - Kiếm tra
//         console.log(res.data.image.medium);
//         // Tạo 1 element mới cho hình ảnh
//         const newImg = document.createElement('img');
//         // Gắn source cho img
//         newImg.src = res.data.image.medium;
//         // Dán img vào trang web
//         document.body.append(newImg);
//     } catch (error) {
//         alert("Sorry, we can't find your keyword!")
//     }
// })

// ====================NHIỀU OUTPUT KHI SEARCH======================
// Action 'Search' when click Search button
btn.addEventListener('click', async function (e) {
    try {
        e.preventDefault();
        const searchInputValue = searchInput.value;
        // Kiếm tra biến searchInputValue
        // console.log(searchInputValue);
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInputValue}`);
        console.log(res.data);
        // console.log(res.data[0].show.image.medium);
        // Show ra các hình ảnh của phim tìm được
        // Danh sách (object) các phim tìm được 
        const dataList = res.data.filter(n => (n.show.image) != null)
        console.log(dataList);
        for (let dlist of dataList) {
            if (dlist.show.image.medium) {
                const newImgElem = document.createElement('img');
                newImgElem.src = dlist.show.image.medium;
                console.log(newImgElem.src);
                document.body.append(newImgElem);
            }

        }

    } catch (error) {
        alert("Sorry, we can't find your keyword!")
    }
})

// Create new img
// const createNewImg = () => {
//     const newImgElem = document.createElement('img');
//     newImg.src = res.data[0].show.image.medium;
// }

// Reset khi bấm nút Reset
const btnReset = document.querySelector('#btn-reset');

btnReset.addEventListener('click', function (e) {
    e.preventDefault();
    // e.stopPropagation();
    console.log("Clicked!")
    const allImg = document.querySelectorAll('img');
    for (let img of allImg) {
        img.remove();
    }
})
