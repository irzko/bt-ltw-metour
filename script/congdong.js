const userLogged = JSON.parse(localStorage.getItem("userLogged"));


if (userLogged) {
    const usrinfo = document.getElementById("info-user");
    const usrname = document.createElement("div");
    usrname.setAttribute("class", "user-fullname");
    usrname.innerText = userLogged.fullname;
    usrinfo.appendChild(usrname);
}


//Load bai viet tu local storage
loadPost = (user, caption, urlimg) => {
    const postContainer = document.getElementById("container");
    const post = document.createElement("div");
    post.setAttribute("class", "post");

    const postHeader = document.createElement("div");
    postHeader.setAttribute("class", "post__header");

    
    const avt = document.createElement("img");
    avt.setAttribute("class", "avatar");
    avt.setAttribute("src", "./assets/congdong/avatar.png");
    avt.setAttribute("alt", "avatar");
    postHeader.appendChild(avt);
 

    const usr = document.createElement("div");
    usr.setAttribute("class", "header__username");
    usr.innerText = user;
    postHeader.appendChild(usr);

    post.appendChild(postHeader);

    const cap = document.createElement("div");
    cap.setAttribute("class", "post__caption");
    cap.innerText = caption;
    post.appendChild(cap);

    if (urlimg) {
        const img = document.createElement("img");
        img.setAttribute("class", "post_img");
        img.setAttribute("src", "./assets/congdong/" + urlimg);
        // img.style.display = "none";
        post.appendChild(img);
    }

    const react = document.createElement("div");
    react.setAttribute("class", "post__react");
    
    const likebtn = document.createElement("div");
    likebtn.setAttribute("class", "like");

    const iconLike = document.createElement("img");
    iconLike.setAttribute("class", "react-icon");
    iconLike.setAttribute("src", "./assets/icons/favorite_FILL0_wght400_GRAD0_opsz48.svg");
    likebtn.appendChild(iconLike);
    react.appendChild(likebtn);

    const cmtbtn = document.createElement("div");
    cmtbtn.setAttribute("class", "comment");

    const iconCmt = document.createElement("img");
    iconCmt.setAttribute("class", "react-icon");
    iconCmt.setAttribute("src", "./assets/icons/mode_comment_FILL0_wght400_GRAD0_opsz48.svg");
    cmtbtn.appendChild(iconCmt);


    const shrbtn = document.createElement("div");
    shrbtn.setAttribute("class", "comment");

    const iconShr = document.createElement("img");
    iconShr.setAttribute("class", "react-icon");
    iconShr.setAttribute("src", "./assets/icons/google_plus_reshare_FILL0_wght400_GRAD0_opsz48.svg");
    shrbtn.appendChild(iconShr);

    react.appendChild(likebtn);
    react.appendChild(cmtbtn);
    react.appendChild(shrbtn);

    post.appendChild(react);
    postContainer.appendChild(post);
}


//Demo data
let post = [
    {
        name: "Kha",
        caption: "Địa điểm này thật đẹp",
        img: "du-lich-nha-trang-tu-tuc-10.jpg"
    },
    {
        name: "Kiệp",
        caption: "Tuyệt vời!!",
        img: "du-lich-nha-trang-tu-tuc-12.jpg"
    }
]



newPost = (post) => {
    let getpost = JSON.parse(localStorage.getItem("post"));
    if (getpost) {
        getpost.push(post);
        localStorage.setItem("post", JSON.stringify(getpost));
    } else {
        getpost = [];
        getpost.push(post);
        localStorage.setItem("post", JSON.stringify(getpost));
    }
}


let formElement = document.querySelector("#post-form");

if (formElement) {
formElement.onsubmit = function (e) {
    e.preventDefault();
    let enableInputs = formElement.querySelectorAll("[name]");
    let formValues = Array.from(enableInputs).reduce(function (values, input) {
        switch(input.type) {
            case "file":
                values[input.name] = input.files;
                break;
            default:
                values[input.name] = input.value;
        }
        return values;
    }, {});

    formValues.name = userLogged.fullname;
    console.log(formValues);
    newPost(formValues);
    window.location.reload()
    }
};


let getpost = JSON.parse(localStorage.getItem("post"));
if (getpost) {
    for(let i = getpost.length - 1; i >= 0 ; i--) {
        loadPost(getpost[i].name, getpost[i].caption, getpost[i].img);
    }
}

for(let i = post.length - 1; i >= 0 ; i--) {
    loadPost(post[i].name, post[i].caption, post[i].img);
}


document.getElementById("close-create-post").addEventListener("click", function() {
    document.getElementById("new").style.width = "0%";
});

document.getElementById("open-create-post").addEventListener("click", function() {
    if (userLogged) {
        document.getElementById("new").style.width = "100%";
    } else {
        alert("Vui lòng đăng nhập để sử dụng tính năng này!")
        window.open("./dangnhap.html", "_self");
    }
});