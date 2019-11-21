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
    <link href="lib/css/products.css" rel="stylesheet" />
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
    <div id="prod">
        <div id="prod_con">
            <div id="prod_right">
                <div class="stage">
                    <img id="prod_curImg" src="lib/images/static/menu_coffee.png" draggable="false" />
                    <h2 id="prod_curName">Item Name</h2>
                </div>
                <div id="prod_select_size" class="stage">
                    <div class="flexcolumn">
                        <h3>Select Size</h3>
                        <hr class="thinmargin"/>
                        <div class="prod_size_con">
                            <span id="prod_size_sm" class="prod_size">SM</span>
                            <span id="prod_size_md" class="prod_size">MD</span>
                            <span id="prod_size_lg" class="prod_size">LG</span>
                            <span id="prod_size_xl" class="prod_size">XL</span>
                        </div>
                    </div>
                </div>
                <div id="prod_select_condiments"  class="stage">
                    <div class="flexcolumn">
                        <div class="sameline"><h3>How would you like your&nbsp;</h3> <h3>Item Name</h3><h3>?</h3></div>
                        <hr class="thinmargin"/>
                        <div class="sameline">
                            <h4 style="min-width: 120px;">Sugar&nbsp;</h4>
                            <div id="cond_sugar_add" ><span class="smallcircle">+</span></div>
                            <div id="cond_sugar_remove"><span class="smallcircle">-</span></div>
                            <input id="cond_sugar" class="minitext" type="text" disabled/>
                        </div>
                        <div class="sameline">
                            <h4 style="min-width: 120px;">Sweetener&nbsp;</h4>
                            <div id="cond_sweetener_add"><span class="smallcircle">+</span></div>
                            <div id="cond_sweetener_remove"><span class="smallcircle">-</span></div>
                            <input id="cond_sweetener" class="minitext" type="text" disabled/>
                        </div>
                        <div class="sameline">
                            <h4 style="min-width: 120px;">Cream&nbsp;</h4>
                            <div id="cond_cream_add"><span class="smallcircle">+</span></div>
                            <div id="cond_cream_remove"><span class="smallcircle">-</span></div>
                            <input id="cond_cream" class="minitext" type="text" disabled/>
                        </div>
                        <div class="sameline">
                            <h4 style="min-width: 120px;">Milk&nbsp;</h4>
                            <div id="cond_milk_add"><span class="smallcircle">+</span></div>
                            <div id="cond_milk_remove"><span class="smallcircle">-</span></div>
                            <input id="cond_milk" class="minitext" type="text" disabled/>
                        </div>
                    </div>
                </div>
                <div id="prod_select_flavorshot" class="stage">
                    <div class="flexcolumn">
                        <h3>Try some Flavorshots!</h3>
                        <hr class="thinmargin"/>
                        <div class="sameline">
                            <h4 style="min-width: 120px;">Vanilla&nbsp;</h4>
                            <div id="cond_vanilla_add"><span class="smallcircle">+</span></div>
                            <div id="cond_vanilla_remove"><span class="smallcircle">-</span></div>
                            <input id="cond_vanilla" class="minitext" type="text" disabled/>
                        </div>
                        <div class="sameline">
                            <h4 style="min-width: 120px;">Caramel&nbsp;</h4>
                            <div id="cond_caramel_add"><span class="smallcircle">+</span></div>
                            <div id="cond_caramel_remove"><span class="smallcircle">-</span></div>
                            <input id="cond_caramel" class="minitext" type="text" disabled/>
                        </div>
                        <div class="sameline">
                            <h4 style="min-width: 120px;">Mocha&nbsp;</h4>
                            <div id="cond_mocha_add"><span class="smallcircle">+</span></div>
                            <div id="cond_mocha_remove"><span class="smallcircle">-</span></div>
                            <input id="cond_mocha" class="minitext" type="text" disabled/>
                        </div>
                    </div>
                </div>
                <div id="prod_select_whippedtopping"  class="stage">
                    <div class="flexcolumn">
                        <h3>Whipped Topping?</h3>
                        <hr class="thinmargin"/>
                        <div class="sameline">
                            <h4 style="min-width: 250px;">Vanilla Whipped Cream &nbsp;</h4>
                            <div id="cond_vanillawc_add"><span class="smallcircle">+</span></div>
                            <div id="cond_vanillawc_remove"><span class="smallcircle">-</span></div>
                            <input id="cond_vanillawc" class="minitext" type="text" disabled/>
                        </div>
                        <div class="sameline">
                            <h4 style="min-width: 250px;">Chocolate Whipped Cream &nbsp;</h4>
                            <div id="cond_chocolatewc_add"><span class="smallcircle">+</span></div>
                            <div id="cond_chocolatewc_remove"><span class="smallcircle">-</span></div>
                            <input id="cond_chocolatewc" class="minitext" type="text" disabled/>
                        </div>
                    </div>
                </div>
                <input type="button" id="products_submit" value="Add to Order" />
        
                
            </div><!-- end of right -->
            <div id="prod_left">
                <h2>Nutrition Information</h2>
                <p>Nutrition information is calculated based on our standard recipes. Only changing drink size will update this information. Other customizations will not.</p>
                
                <div class="sameline">
                    <span id="x1_0" class="bold">Serving Size:<span>&nbsp;</span></span>
                    <span id="x1_1">286mL</span>
                </div>
                <hr class="thinmargin" style="height: 3px;"/>
                <div class="sameline">
                    <span id="x0_0" class="bold">Caffiene:<span>&nbsp;</span></span>
                    <span id="x0_1">50mg</span>
                </div>
                <hr class="thinmargin" style="height: 2px;"/>
                <div class="sameline">
                    <span id="x2_0" class="bold">Calories:<span>&nbsp;</span></span>
                    <span id="x2_1">50mg</span>
                </div>
                <hr class="thinmargin" style="height: 1px;"/>
                <div class="sameline">
                    <span id="x3_0" class="bold">Fat:<span>&nbsp;</span></span>
                    <span id="x3_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline subpart">
                    <span id="x4_0" class="mw">Saturated Fat<span>&nbsp;</span></span>
                    <span id="x4_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline subpart">
                    <span id="x5_0" class="mw">Trans Fat<span>&nbsp;</span></span>
                    <span id="x5_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline">
                    <span id="x6_0" class="bold">Cholesterol:<span>&nbsp;</span></span>
                    <span id="x6_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline">
                    <span id="x7_0" class="bold">Sodium:<span>&nbsp;</span></span>
                    <span id="x7_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline">
                    <span id="x8_0" class="bold">Carbs:<span>&nbsp;</span></span>
                    <span id="x8_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline subpart">
                    <span id="x9_0" class="mw">Fibre<span>&nbsp;</span></span>
                    <span id="x9_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline subpart">
                    <span id="x10_0" class="mw">Sugar<span>&nbsp;</span></span>
                    <span id="x10_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline">
                    <span id="x11_0" class="bold">Protein:<span>&nbsp;</span></span>
                    <span id="x11_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline subpart">
                    <span id="x12_0" class="mw">Vitamin A<span>&nbsp;</span></span>
                    <span id="x12_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline subpart">
                    <span id="x13_0" class="mw">Vitamin C<span>&nbsp;</span></span>
                    <span id="x13_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline subpart">
                    <span id="x14_0" class="mw">Calcium<span>&nbsp;</span></span>
                    <span id="x14_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <div class="sameline subpart">
                    <span id="x15_0" class="mw">Iron<span>&nbsp;</span></span>
                    <span id="x15_1">50mg</span>
                </div>
                <hr class="thinmargin">
                <br />
                <p>Adults and youth (ages 13 and older) need an average of 2,000 calories a day, and children (ages 4 to 12) need an average of 1,500 calories a day. However, individual needs vary.</p>
            </div>
        </div>
    </div>


    <?php
        include '../../views/helpers/page_footer.php';
    ?>
    
    <script src="lib/js/jquery-ui.js" type="text/javascript"></script>
    <script src="lib/js/jquery-1.10.2.js" type="text/javascript"></script>
    <script src="controllers/js/main.js" type="text/javascript"></script>
    <script src="controllers/js/products.js" type="text/javascript"></script>
    </form>

    
</body>


</html>