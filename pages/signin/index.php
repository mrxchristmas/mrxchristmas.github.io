<!DOCTYPE html>
<?php
  include "../../controllers/defaults.php";
?>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Title</title>
    <base href="<?php echo($rootLocation); ?>" target="_self">
    <link href="lib/css/signin.css" rel="stylesheet" />
    <!-- <link rel="stylesheet" href="css/jquery-ui.css" /> -->
    
</head>
<body onLoad='init()'>
    <form name="form1" action="" method="post" enctype="multipart/form-data">

    <div id="singin_con">
        <div id="login-form-container">
            <img src="lib/images/static/icon.png" class="login-form-image" draggable="false" >
            <hr style="width: 90%; align-self: center;"/>
            <input type="text" placeholder="Username" id="login-form-username" class="login-form-textbox">
            <input type="password" placeholder="Password" id="login-form-password" class="login-form-textbox">
            <input type="button" value="Enter" id="login-form-submit" class="login-form-button">
            <div class="login-form-footer"> 
                <a href="">Forgot your Password?</a><br/>
                <span><a href="">Privacy Policy</a> | <a href="">Terms of Service</a></span>
            </div>
        </div>
        <img src="lib/images/static/indexaccent.png" class="login-image" draggable="false"/>
    </div>
    
    <script src="lib/js/jquery-ui.js" type="text/javascript"></script>
    <script src="lib/js/jquery-1.10.2.js" type="text/javascript"></script>
    <script src="lib/js/signin.js" type="text/javascript"></script>
    </form>

    
</body>


</html>