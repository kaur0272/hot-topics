const $container = document.querySelector(".main .content");

const $links = document.querySelectorAll("nav ul li a");

const contents = {};

fetch("./partials/home.html")
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        $container.innerHTML = data;
    });

const storeContents = function (urlVal) {

    if (!contents[urlVal]) {

        fetch(urlVal)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                contents[urlVal] = data;
                $container.innerHTML = contents[urlVal];
            });
    } else {
        $container.innerHTML = contents[urlVal];
    }
};

const handleClick = function (e) {
    e.preventDefault();

    let key = e.target.href;

    storeContents(key);
};

for (let i = 0; i < $links.length; i++) {

    $links[i].addEventListener("click", handleClick);
}