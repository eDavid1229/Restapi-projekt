function onNewSubmit(method)
{
    document.querySelector("form button").onclick = function(evt)
    {
        evt.preventDefault();

        var name = document.getElementById("name").value;
        var location = document.getElementById("location").value;
        var comment = document.getElementById("comment").value;
        var type = document.getElementById("type").value;


        var data = `name=${name}&location=${location}&comment=${comment}&type=${type}`;
        
        document.getElementById("name").value = "";
        document.getElementById("location").value = "";
        document.getElementById("comment").value = "";
        document.getElementById("type").value = "";
       

        method(data);
    };
}
function ajax(node, method, data, onReady)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var topics = JSON.parse(this.responseText);
            onReady(topics);
        }
    };
    
    if(method == "POST")
    {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
 
}
function getLakes(onReady)
{
    ajax("get-lakes", "GET", null, onReady);
}
function addLakes(data, onReady)
{
    ajax("add-lakes", "POST", data, onReady);
}