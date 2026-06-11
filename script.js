function addPost(){

let title=document.getElementById("title").value;
let content=document.getElementById("content").value;

if(title=="" || content==""){
alert("Fill all fields");
return;
}

let post=document.createElement("div");
post.className="post";

post.innerHTML=`
<h3>${title}</h3>
<p>${content}</p>

<input type="text" placeholder="Add Comment">

<button onclick="addComment(this)">
Comment
</button>

<ul></ul>
`;

document.getElementById("posts").appendChild(post);

document.getElementById("title").value="";
document.getElementById("content").value="";
}

function addComment(btn){

let input=btn.previousElementSibling;
let ul=btn.nextElementSibling;

let li=document.createElement("li");
li.innerText=input.value;

ul.appendChild(li);

input.value="";
}