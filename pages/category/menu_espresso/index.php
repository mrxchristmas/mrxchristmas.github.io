<!DOCTYPE html>
<?php
  include "../../../controllers/defaults.php";
?>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Title</title>
    <base href="<?php echo($rootLocation); ?>" target="_self">
    <link href="lib/css/main.css" rel="stylesheet" />
    <link href="lib/css/category.css" rel="stylesheet" />
    <!-- <link rel="stylesheet" href="css/jquery-ui.css" /> -->
    <?php
        include '../../../views/helpers/page_head.php';
    ?>
</head>
<body onLoad='init()'>
    <form name="form1" action="" method="post" enctype="multipart/form-data">

    <?php
        include '../../../views/helpers/category_nav.html';
    ?>
    <div id="category_body">
        <!-- <input type="button" id="test" value="test" /> -->
        <div id="category_body_con">
        <h1>Espresso</h1>
            <h3>Espresso</h3>
                <hr />
                <div id="espresso_con" class="item_container">
                    <!-- <div class="item_widget">
                        <img src="lib/images/static/menu_coffee.png" draggable="false" />
                        <span>Drink one</span>
                    </div> -->
                </div>
            <h3>Lattes</h3>
            <hr />
            <div id="latte_con" class="item_container">
                <!-- <div class="item_widget">
                    <img src="lib/images/static/menu_coffee.png" draggable="false" />
                    <span>Drink one</span>
                </div> -->
            </div>
            
            <h3>Cappucinos</h3>
            <hr />
            <div id="cappucino_con" class="item_container">
                <!-- <div class="item_widget">
                    <img src="lib/images/static/menu_coffee.png" draggable="false" />
                    <span>Drink one</span>
                </div> -->
            </div>

            <h3>Americanos</h3>
            <hr />
            <div id="americano_con" class="item_container">
                <!-- <div class="item_widget">
                    <img src="lib/images/static/menu_coffee.png" draggable="false" />
                    <span>Drink one</span>
                </div> -->
            </div>

            <h3>Iced Lattes</h3>
            <hr />
            <div id="iced_latte_con" class="item_container">
                <!-- <div class="item_widget">
                    <img src="lib/images/static/menu_coffee.png" draggable="false" />
                    <span>Drink one</span>
                </div> -->
            </div>

        </div>
    </div>
    

    <?php
        include '../../../views/helpers/page_footer.php';
    ?>
    
    <script src="lib/js/jquery-ui.js" type="text/javascript"></script>
    <script src="lib/js/jquery-1.10.2.js" type="text/javascript"></script>
    <script src="controllers/js/main.js" type="text/javascript"></script>
    <script src="controllers/js/category.js" type="text/javascript"></script>
    <script src="lib/js/category.js" type="text/javascript"></script>
    </form>

    
</body>


</html>