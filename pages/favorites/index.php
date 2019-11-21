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
    <link href="lib/css/favorites.css" rel="stylesheet" />
    <!-- <link rel="stylesheet" href="css/jquery-ui.css" /> -->
    <?php
        include '../../views/helpers/page_head.php';
    ?>
</head>
<body onLoad='init()'>
    <form name="form1" action="" method="post" enctype="multipart/form-data">
    <?php
        include '../../views/helpers/category_nav.html';
    ?>

    <br />
    FAVORITES
    <br />
    

    <?php
        include '../../views/helpers/page_footer.php';
    ?>
    
    <script src="lib/js/jquery-ui.js" type="text/javascript"></script>
    <script src="lib/js/jquery-1.10.2.js" type="text/javascript"></script>
    <script src="controllers/js/main.js" type="text/javascript"></script>
    <script src="lib/js/favorites.js" type="text/javascript"></script>
    </form>

    
</body>


</html>