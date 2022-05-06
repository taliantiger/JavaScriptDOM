function showPic(whichpic){
    var source = whichpic.getAttribute("href");

    var placeholder = document.getElementById("placeholder");

    placeholder.setAttribute("src", source);




    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;


    alert(description.nodeValue);

    // alert(description.childNodes[0].nodeValue);
    alert(description.firstChild.nodeValue);     //用firstChild 代替

}






function countBodyChildren(){
    //单独下面这段代码会出错，导致后面的内容都无法显示
    // var text = whichpic.getAttribute("title");

    var body_element = document.getElementsByTagName("body")[0];
    // var childnodesLength = body_element.childNodes.length;
    alert(body_element.childNodes.length);

    alert(body_element.nodeType);
}

// alert("a");
window.onload=countBodyChildren;


