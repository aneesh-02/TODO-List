module.exports.home = function(req,res)
{
    // return res.render("Home Page");
    return res.render("home" , { 
        title : "TODO LIST"
        // todo_list: tasks                             
    });
}

// module.exports.actionName = function(req,res){}