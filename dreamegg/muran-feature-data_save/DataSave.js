function saveData(exp, dark_exp, graw, dark_graw, image_width, image_height)
{
    localStorage.setItem("exp", exp);
    localStorage.setItem("dark_exp", dark_exp);
    localStorage.setItem("graw", graw);
    localStorage.setItem("dark_graw", dark_graw);
    localStorage.setItem("image_width", image_width);
    localStorage.setItem("image_height", image_height);
}

function loadData()
{
    let data = {};

    data["exp"] = Number(localStorage.getItem("exp"));
    data["dark_exp"] = Number(localStorage.getItem("dark_exp"));
    data["graw"] = Number(localStorage.getItem("graw"));
    data["dark_graw"] = Number(localStorage.getItem("dark_graw"));
    data["image_width"] = Number(localStorage.getItem("image_width"));
    data["image_height"] = Number(localStorage.getItem("image_height"));

    return data;
}