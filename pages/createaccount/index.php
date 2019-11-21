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
    <link href="lib/css/main.css" rel="stylesheet" />
    <link href="lib/css/createaccount.css" rel="stylesheet" />
    <!-- <link rel="stylesheet" href="css/jquery-ui.css" /> -->
    <div id="create_head">
        <img src="lib/images/static/icon.png">
    </div>
</head>
<body onLoad='init()'>
    <form name="form1" action="" method="post" enctype="multipart/form-data">

    <div id="create_con">
        <div class="container">
            <span>Personal Information</span>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <span>Account Security</span>
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <span>Terms of Use</span>
            <div class="terms_con">
                <input type="checkbox" name="terms" />
                <label for="terms">I acknowledge that this website is for educational purposes only <br />
                &emsp;&emsp;&emsp;&ensp;and all Items are only fictions from the developers imagination.</label>
            </div>
            <div class="terms_con">
                <input type="checkbox" name="terms" />
                <label for="terms">By creating an account, I acknowledge that i am not supposed to enter any<br />
                &emsp;&emsp;&emsp;&ensp;personal and sensitive information about myself or any other individual</label>
            </div>
            <div class="terms_con">
                <input type="checkbox" name="terms" />
                <label for="terms">By creating an account, I consent that my personal information will be stored  <br />
                &emsp;&emsp;&emsp;&ensp;on this website and be used by the developer at his sole discretion.</label>
            </div>
            <input id="create_submit" type="button" value="Create Account" />
        </div>
    </div>
    
    <script src="lib/js/jquery-ui.js" type="text/javascript"></script>
    <script src="lib/js/jquery-1.10.2.js" type="text/javascript"></script>
    <script src="lib/js/createaccount.js" type="text/javascript"></script>
    </form>
    
</body>


</html>